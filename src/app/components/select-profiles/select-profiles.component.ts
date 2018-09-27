import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilesService } from '../../services/profiles.service';
import { GameService } from '../../services/game.service';
import { Game } from '../../types/game';

@Component({
  selector: 'app-select-profiles',
  templateUrl: './select-profiles.component.html'
})
export class SelectProfilesComponent implements OnInit {
  public profiles: any[];
  public game: Game;
  private gameType: string;
  private selectedProfile: any;
  private profilesService: ProfilesService;
  private gameService: GameService;
  private router: Router;
  private route: ActivatedRoute;

  constructor(profilesService: ProfilesService, gameService: GameService, router: Router, route: ActivatedRoute) {
    this.profilesService = profilesService;
    this.gameService = gameService;
    this.router = router;
    this.route = route;
    this.selectedProfile = {};
  }

  ngOnInit() {
    this.profilesService.getAvailableProfiles()
      .subscribe(profiles => {
        this.profiles = profiles;
      });

    this.gameService.currentGameObservable
      .subscribe(game => {
        this.game = game;
        console.log(this.game);
      });
  }

  public selectProfile(profile): void {
    this.selectedProfile = profile;
  }

  public submitProfile(): void {
    this.gameService.createPlayer('highlow', this.selectedProfile)
      .subscribe(player => {
        this.game.players.push(player);
        this.updateGame();
      });
  }

  private updateGame() {
    this.gameService.updateGame('highlow', this.game);
    this.router.navigate([`/games/highlow/${this.game.id}/`]);
  }
}
