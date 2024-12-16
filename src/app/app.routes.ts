import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'games',
    loadComponent: () => import('./pages/games/games.component').then(m => m.GamesComponent),
  },
  {
    path: 'game/:id',
    loadComponent: () => import('./pages/game-details/game-details.component').then(m => m.GameDetailsComponent),
  }
];
