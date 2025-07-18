import { Component } from "@angular/core";
import{NavComponent} from "./nav/nav.component";
import {NgIf} from "@angular/common";
import { TranslateModule } from '@ngx-translate/core';

@Component({
       selector: 'app-landinPage',
       imports: [NavComponent,NgIf,TranslateModule],
       templateUrl: './landingPage.component.html',
       styleUrl: './landingPage.component.scss'

})

export class LandingPageComponent {
    burgerMenuVisible: boolean = false;
     toggleBurgerMenu(): void {
    this.burgerMenuVisible = !this.burgerMenuVisible;
  }
}