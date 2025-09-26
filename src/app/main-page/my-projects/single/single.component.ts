import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import{MyProjectsComponent} from '../my-projects.component';



@Component({
  selector: 'app-single',
  imports: [CommonModule,TranslateModule],
  templateUrl: './single.component.html',
  styleUrl: './single.component.scss'
})
export class SingleComponent {

@Input()project:any; 


}
