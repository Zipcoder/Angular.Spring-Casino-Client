import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GameService {
  private http: HttpClient;
  private apiUri = ''; // replace with your URI (I.E. Localhost:8080)

  constructor(http: HttpClient) {
    this.http = http;
  }

  // gets a game by its id
  public getGameById(id: number): Observable<any> {
    // Replace with your endpoint, passing in the game id;
    return this.http.get(this.apiUri + `/games/${id}`);
  }

  public submitInput(game, input): Observable<any> {
    // TO DO: Implement. Using the current game (game) and the input (input), evaluate the current turn
    // Should return back the updated game with an output property with info about the past and next turn.
    return null;
  }
}
