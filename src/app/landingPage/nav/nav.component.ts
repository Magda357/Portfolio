import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-nav',
  imports: [TranslateModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
 constructor(private translate: TranslateService) {
  
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
   useLanguage(language: string): void {
    this.translate.use(language);
  }
}
