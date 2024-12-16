import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game.model';
import { FilterComponent } from '../../components/filter/filter.component';
import { GameListComponent } from '../../components/game-list/game-list.component';
import { NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [NgIf, GameListComponent, MatProgressSpinnerModule, FilterComponent, MatButtonModule],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games: Array<Game> = [];
  isLoading = false;

  categories = ['Shooter', 'MMORPG', 'PVP', 'Strategy', 'Action', 'Card'];
  platforms = ['PC', 'Browser'];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.fetchGames();
  }

  fetchGames(category?: string, platform?: string, sort?: string): void {
    this.isLoading = true;
    this.gameService.getGamesByFilters(category, platform, sort).subscribe({
      next: (data) => {
        this.games = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching games:', err);
        this.isLoading = false;
      }
    });
  }

  applyFilters(filters: { category?: string; platform?: string; sort?: string }): void {
    const { category, platform, sort } = filters;
    this.fetchGames(category, platform, sort);
  }

}
