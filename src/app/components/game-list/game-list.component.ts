import {Component, input} from '@angular/core';
import {Game} from '../../models/game.model';
import {GameCardComponent} from '../game-card/game-card.component';

@Component({
  selector: 'app-game-list',
  imports: [
    GameCardComponent
  ],
  templateUrl: './game-list.component.html',
  standalone: true,
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {
  games = input.required<Game[]>();
}
