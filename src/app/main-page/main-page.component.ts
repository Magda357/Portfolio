import { Component } from '@angular/core';
import{NavComponent} from './nav/nav.component';
import{WhyMeComponent} from './why-me/why-me.component';
import{MySkillsComponent} from './my-skills/my-skills.component';
import{MyProjectsComponent} from './my-projects/my-projects.component';
import{TeamOpinionComponent} from './team-opinion/team-opinion.component';

@Component({
  selector: 'app-main-page',
  
  imports: [NavComponent,WhyMeComponent,MySkillsComponent,MyProjectsComponent,TeamOpinionComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
