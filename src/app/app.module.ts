import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { SelectGameComponent } from './components/select-game/select-game.component';
import { SelectProfilesComponent } from './components/select-profiles/select-profiles.component';
import { HighlowGameComponent } from './components/highlow-game/highlow-game.component';

import { ProfilesService } from './services/profiles.service';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectGameComponent,
    SelectProfilesComponent,
    HighlowGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ProfilesService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
