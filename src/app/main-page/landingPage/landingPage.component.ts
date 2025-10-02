import { Component} from '@angular/core';
import {CommonModule, NgIf} from "@angular/common";
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from "@ngx-translate/core";
import{NavComponent} from './../../nav/nav.component';

@Component({
       selector: 'app-landinPage',
       imports: [NgIf,TranslateModule,CommonModule,NavComponent,],
       templateUrl: './landingPage.component.html',
       styleUrls: ['./landingPage.component.scss','./landingPage.responsive.scss']

})

export class LandingPageComponent   {
   selectedLang: string = 'en';

  constructor(private translate: TranslateService
  ) {
     this.translate.addLangs(['de', 'en']);
     this.translate.setDefaultLang('en');
     this.translate.use('en');
   }
    useLanguage(language: string): void {
       this.selectedLang = language;
     this.translate.use(language);
   }

    burgerMenuVisible: boolean = false;
     toggleBurgerMenu(): void {
    this.burgerMenuVisible = !this.burgerMenuVisible;
  }


scrollToSection(event: Event, id: string) {
  event.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
  
  
}