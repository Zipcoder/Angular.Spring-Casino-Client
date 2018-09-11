import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilesService } from '../../services/profiles.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-select-profiles',
  templateUrl: './select-profiles.component.html'
})
export class SelectProfilesComponent implements OnInit {
  public profiles: any[];
  public game: any;
  private selectedProfiles: any[];
  private profilesService: ProfilesService;
  private gameService: GameService;
  private route: ActivatedRoute;
  private router: Router;

  constructor(profilesService: ProfilesService, gameService: GameService, route: ActivatedRoute, router: Router) {
    this.profilesService = profilesService;
    this.gameService = gameService;
    this.route = route;
    this.router = router;
    this.selectedProfiles = [];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getGameById(params.gameId);
    });

    this.profilesService.getAvailableProfiles()
      .subscribe(profiles => {
        this.profiles = profiles;
      });
  }

  public getGameById(gameId): void {
    this.gameService.getGameById(gameId)
      .subscribe(game => {
        this.game = game;
      });
  }

  public selectProfile(profile): void {
    if (this.selectedProfiles.includes(profile)) {
      this.selectedProfiles.splice(this.selectedProfiles.indexOf(profile), 1);
    } else {
      this.selectedProfiles.push(profile);
    }
  }

  public submitProfiles(): void {
    this.profilesService.selectProfiles(this.game, this.profiles)
      .subscribe(game => {
        this.router.navigate([`game/${game.id}`]);
      });
  }
}
