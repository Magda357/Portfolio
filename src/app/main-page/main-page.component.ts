import { Component } from '@angular/core';
import{LandingPageComponent} from './landingPage/landingPage.component';
import{WhyMeComponent} from './why-me/why-me.component';
import{MySkillsComponent} from './my-skills/my-skills.component';
import{MyProjectsComponent} from './my-projects/my-projects.component';
import{TeamOpinionComponent} from './team-opinion/team-opinion.component';
import {ContactComponent} from './contact/contact.component';

@Component({
  selector: 'app-main-page',
  
  imports: [LandingPageComponent,
    WhyMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    TeamOpinionComponent,
    ContactComponent,
  ],
    
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
