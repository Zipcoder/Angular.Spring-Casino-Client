import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvailableGamesService } from '../../services/available-games.service';

@Component({
  selector: 'app-select-game',
  templateUrl: './select-game.component.html'
})
export class SelectGameComponent implements OnInit {
  public games: any[];
  private router: Router;
  private availableGamesService: AvailableGamesService;

  constructor(availableGamesService: AvailableGamesService, router: Router) {
    this.availableGamesService = availableGamesService;
    this.router = router;
  }

  ngOnInit(): void {
    // Grabs a list of games available to play
    this.availableGamesService.getAvailableGames()
      .subscribe(games => {
        this.games = games;
      });
  }

  public selectGame(selectedGame) {
    // selects a game, then receives back the created game from the api
    this.availableGamesService.selectGame(selectedGame)
      .subscribe(game => {
        /* uses the created game from the api to navigate to the
           selectProfiles route, passing the game id as a path variable */
        this.router.navigate([`game/${game.id}/select-profiles/`]);
      });
  }
}
