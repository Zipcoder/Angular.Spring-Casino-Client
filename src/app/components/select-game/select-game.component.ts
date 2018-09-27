import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select-game',
  templateUrl: './select-game.component.html'
})
export class SelectGameComponent implements OnInit, OnDestroy {
  public games: any[];
  private router: Router;
  private route: ActivatedRoute;
  private gameService: GameService;
  private gameSubscription: Subscription;

  constructor(gameService: GameService, router: Router, route: ActivatedRoute) {
    this.gameService = gameService;
    this.router = router;
    this.route = route;
  }

  ngOnInit(): void {

  }

  public selectGame(selectedGame): void {
    this.gameService.createGame(selectedGame);
    this.gameSubscription = this.gameService.currentGameObservable
      .subscribe(game => {
        if (game.id) {
          this.router.navigate([`/games/${selectedGame}/${game.id}/select-profile`]);
        }
      });
  }

  ngOnDestroy(): void {
    this.gameSubscription.unsubscribe();
  }
}
