import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{LandingPageComponent} from './landingPage/landingPage.component';
import{NavComponent} from './main-page/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPageComponent,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
