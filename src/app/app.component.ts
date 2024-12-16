import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Free-to-Play Games';
}
