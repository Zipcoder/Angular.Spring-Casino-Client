import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { SelectGameComponent } from './components/select-game/select-game.component';
import { SelectProfilesComponent } from './components/select-profiles/select-profiles.component';
import { GameComponent } from './components/game/game.component';

import { AvailableGamesService } from './services/available-games.service';
import { ProfilesService } from './services/profiles.service';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectGameComponent,
    SelectProfilesComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AvailableGamesService, ProfilesService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
