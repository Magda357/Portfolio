import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import{NavComponent} from "./../nav/nav.component";

@Component({
  selector: 'app-imprint',
  imports: [TranslateModule,NavComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
email = 'mdanielyan50@gmail.com';
}
