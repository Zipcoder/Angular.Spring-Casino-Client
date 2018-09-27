
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SelectGameComponent } from './components/select-game/select-game.component';
import { SelectProfilesComponent } from './components/select-profiles/select-profiles.component';
import { HighlowGameComponent } from './components/highlow-game/highlow-game.component';

export const routes: Routes = [
  {
    path: 'games',
    component: SelectGameComponent,
    data: { title: 'Select A Game' }
  },
  {
    path: 'games/highlow/:gameId/select-profile',
    component: SelectProfilesComponent,
    data: { title: 'Select Profiles'}
  },
  {
    path: 'games/highlow/:gameId',
    component: HighlowGameComponent,
    data: { title: 'Game'}
  },
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'games',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

