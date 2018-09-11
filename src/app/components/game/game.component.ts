import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {
  public game: any;
  public input;
  private gameService: GameService;
  private route: ActivatedRoute;

  constructor(gameService: GameService, route: ActivatedRoute) {
    this.gameService = gameService;
    this.route = route;
  }

  ngOnInit(): void {
    // grabs the current game by its id
    this.route.params.subscribe(params => {
      this.getGameById(params.gameId);
    });
  }

  // helper method which grabs the current game by its id
  public getGameById(gameId): void {
    this.gameService.getGameById(gameId)
      .subscribe(game => {
        this.game = game;
      });
  }

  /* takes input from the input box and sends
     it to the game service to process a turn */
  public submitInput(): void {
    this.gameService.submitInput(this.game, this.input)
      .subscribe(game => {
        this.game = game;
      });
  }
}
