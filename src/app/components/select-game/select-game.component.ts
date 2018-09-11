import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvailableGamesService } from '../../services/available-games.service';

@Component({
  selector: 'app-select-game',
  templateUrl: './select-game.component.html'
})
export class SelectGameComponent implements OnInit {
  public games: any[];
  private router: Router;
  private route: ActivatedRoute;
  private availableGamesService: AvailableGamesService;

  constructor(availableGamesService: AvailableGamesService, router: Router, route: ActivatedRoute) {
    this.availableGamesService = availableGamesService;
    this.router = router;
  }

  ngOnInit(): void {
    this.availableGamesService.getAvailableGames()
      .subscribe(games => {
        this.games = games;
      });
  }

  public selectGame(selectedGame) {
    this.availableGamesService.selectGame(selectedGame)
      .subscribe(game => {
        this.router.navigate([`game/${game.id}/select-profiles/`]);
      });
    // TESTING, REMOVE BOTTOM TWO LINES
    const testGame = {id: 1};
    this.router.navigate([`game/${testGame.id}/select-profiles/`]);
  }
}
