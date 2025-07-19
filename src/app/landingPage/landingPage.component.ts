import { Component } from "@angular/core";
import{NavComponent} from "./nav/nav.component";
import {NgIf} from "@angular/common";
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from "@ngx-translate/core";


@Component({
       selector: 'app-landinPage',
       imports: [NavComponent,NgIf,TranslateModule],
       templateUrl: './landingPage.component.html',
       styleUrl: './landingPage.component.scss'

})

export class LandingPageComponent {

  constructor(private translate: TranslateService) {
     this.translate.addLangs(['de', 'en']);
     this.translate.setDefaultLang('en');
     this.translate.use('en');
   }
    useLanguage(language: string): void {
     this.translate.use(language);
   }


    burgerMenuVisible: boolean = false;
     toggleBurgerMenu(): void {
    this.burgerMenuVisible = !this.burgerMenuVisible;
  }
}