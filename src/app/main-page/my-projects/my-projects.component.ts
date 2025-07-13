import { Component } from '@angular/core';
import {SingleComponent} from './single/single.component'

@Component({
  selector: 'app-my-projects',
  imports: [SingleComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

}
