import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{LandingPageComponent} from './landingPage/landingPage.component';
import{NavComponent} from './main-page/nav/nav.component';
import{WhyMeComponent} from './main-page/why-me/why-me.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPageComponent,NavComponent,WhyMeComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
