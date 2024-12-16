import { Component } from '@angular/core';
import {Game} from '../../models/game.model';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {GameService} from '../../services/game.service';
import {MatAnchor, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-game-details',
  imports: [
    MatAnchor,
    MatIcon,
    MatIconButton,
    RouterLink
  ],
  templateUrl: './game-details.component.html',
  standalone: true,
  styleUrl: './game-details.component.scss'
})
export class GameDetailsComponent {
  game!: Game;

  constructor(private route: ActivatedRoute, private gameService: GameService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameService.getGameDetails(id).subscribe({
      next: (game) => (this.game = game),
      error: (err) => console.error('Error loading game details', err),
    });
  }
}
