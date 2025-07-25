import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-nav',
  imports: [TranslateModule,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  selectedLang: string = 'en';
 constructor(private translate: TranslateService) {
  
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
   useLanguage(language: string): void {
    this.selectedLang = language;
    this.translate.use(language);
  }
}
