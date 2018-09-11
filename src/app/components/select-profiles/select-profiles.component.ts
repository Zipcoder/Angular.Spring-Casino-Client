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
    // grabs current game by its id
    this.route.params.subscribe(params => {
      this.getGameById(params.gameId);
    });

    // grabs list of all available profiles
    this.profilesService.getAvailableProfiles()
      .subscribe(profiles => {
        this.profiles = profiles;
      });
  }

  // helper method which uses the route params
  // to grab the current game by its id
  public getGameById(gameId): void {
    this.gameService.getGameById(gameId)
      .subscribe(game => {
        this.game = game;
      });
  }

  // selects or deselects an individual profile and adds
  // or removes it from the selectedProfiles array
  public selectProfile(profile): void {
    if (this.selectedProfiles.includes(profile)) {
      this.selectedProfiles.splice(this.selectedProfiles.indexOf(profile), 1);
    } else {
      this.selectedProfiles.push(profile);
    }
  }

  // takes all the profiles selected and passes them to the service, along with the game.
  // Use this to add profiles/players to a particular game
  public submitProfiles(): void {
    this.profilesService.selectProfiles(this.game, this.profiles)
      .subscribe(game => {
        this.router.navigate([`game/${game.id}`]);
      });
  }
}
