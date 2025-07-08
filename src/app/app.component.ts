import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{LandingPageComponent} from './landingPage/landingPage.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
