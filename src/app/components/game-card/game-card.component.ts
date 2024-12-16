import {Component, input} from '@angular/core';
import {Game} from '../../models/game.model';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-game-card',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
    RouterLink
  ],
  templateUrl: './game-card.component.html',
  standalone: true,
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  game = input.required<Game>();
}
