
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SelectGameComponent } from './components/select-game/select-game.component';
import { SelectProfilesComponent } from './components/select-profiles/select-profiles.component';
import { GameComponent } from './components/game/game.component';

export const routes: Routes = [
  {
    path: 'home',
    component: SelectGameComponent,
    data: { title: 'Home' }
  },
  {
    path: 'game/:gameId/select-profiles',
    component: SelectProfilesComponent,
    data: { title: 'Select Profiles'}
  },
  {
    path: 'game/:gameId',
    component: GameComponent,
    data: { title: 'Game'}
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: SelectGameComponent
  }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

