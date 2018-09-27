import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Game } from '../../types/game';

@Component({
  selector: 'app-game',
  templateUrl: './highlow-game.component.html'
})
export class HighlowGameComponent implements OnInit {
  public game: Game;
  public result: string;
  private gameType: string;
  private gameService: GameService;
  private route: ActivatedRoute;

  constructor(gameService: GameService, route: ActivatedRoute) {
    this.gameService = gameService;
    this.route = route;
  }

  ngOnInit(): void {
    // grabs the current game by its id
    this.route.params
      .subscribe(params => {
        this.gameType = params.gameType;
      });

    this.gameService.currentGameObservable
      .subscribe(game => {
        this.game = game;

        let highRoll = 0;
        this.game.players
          .forEach(player => {
            if (!player.hand.empty) {
              if (player.hand.cardList[0].value > highRoll) {
                highRoll = player.hand.cardList[0].value;
                this.result = `${player.name} wins!`;
              } else if (player.hand.cardList[0].value === highRoll) {
                this.result = 'It\'s tie!';
              }
            }
          });
      });
  }

  public getCard(): void {
    this.gameService.evaluateTurn('highlow');
  }
}
