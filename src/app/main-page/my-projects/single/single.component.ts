import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-single',
  imports: [CommonModule],
  templateUrl: './single.component.html',
  styleUrl: './single.component.scss'
})
export class SingleComponent {

@Input()project:any; 
}
