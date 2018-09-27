import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, forkJoin } from 'rxjs';
import { Game } from '../types/game';

@Injectable()
export class GameService {
  private http: HttpClient;
  private apiUri = 'http://localhost:8083'; // replace with your URI (I.E. Localhost:8080)
  private currentGame: Game;
  private AI;
  private currentGameSubject: BehaviorSubject<Game>;
  public currentGameObservable: Observable<Game>;

  constructor(http: HttpClient) {
    this.http = http;
    this.currentGameSubject = new BehaviorSubject<Game>({players: [], id: null});
    this.currentGameObservable = this.currentGameSubject.asObservable();
    this.AI = {
      hand: {
        cardList: []
      },
      casinoProfile: {
        id: 1,
        name: 'AI',
        balance: 0
      }
    };

    this.currentGameObservable
      .subscribe(game => {
        this.currentGame = game;
      });
  }

  public getGameById(gameType: string, id: number): void {
    this.http.get(`${this.apiUri}/casino/${gameType}/game/${id}`)
      .subscribe((game: Game) => {
        this.currentGameSubject.next(game);
      });
  }

  public createGame(gameType: string): void {
    const playerList = [];
    if (gameType === 'highlow') {
      playerList.push(this.AI);
    }

    this.http.post(`${this.apiUri}/casino/${gameType}/game`, {players: playerList})
      .subscribe((game: Game) => {
        this.currentGameSubject.next(game);
      });
  }

  public updateGame(gameType: string, updatedGame: any): void {
    this.http.post(`${this.apiUri}/casino/${gameType}/game`, updatedGame)
      .subscribe((game: Game) => {
        this.currentGameSubject.next(game);
      });
  }

  public createPlayer(gameType: string, profile: any) {
    return this.http.post(`${this.apiUri}/casino/${gameType}/player`, {casinoProfile: profile, hand: { cardList: []}});
  }

  public evaluateTurn(gameType: string): void {
    const observables = [];
    this.currentGame.players
      .forEach(player => {
        const observable = this.http.put(`${this.apiUri}/casino/${gameType}/engine/getCard/${this.currentGame.id}/${player.id}`, null);
        observables.push(observable);
      });

    forkJoin(observables)
      .subscribe(data => {
        this.getGameById(gameType, this.currentGame.id);
      });
  }
}
