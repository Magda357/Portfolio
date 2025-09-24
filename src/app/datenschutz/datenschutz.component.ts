import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { NavComponent } from './../nav/nav.component';
@Component({
  selector: 'app-datenschutz',
  imports: [TranslateModule, NavComponent],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss'
})
export class DatenschutzComponent {

}

