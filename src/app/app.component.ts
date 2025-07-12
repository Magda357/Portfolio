import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{LandingPageComponent} from './landingPage/landingPage.component';
import{MainPageComponent} from './main-page/main-page.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPageComponent,MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
