import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent implements OnInit, OnDestroy {
  icons: { icon: string, text: string }[] = [];
  currentIconIndex = 0;
  displayText = '';
  isDeleting = false;
  charIndex = 0;
  private langChangeSub!: Subscription;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.loadIcons();

    // Подписка на смену языка
    this.langChangeSub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadIcons();
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }

  loadIcons(): void {
    this.translate.get(['WHY_ME.TEXT1', 'WHY_ME.TEXT2', 'WHY_ME.TEXT3']).subscribe(translations => {
      this.icons = [
        { icon: 'img/location.png', text: translations['WHY_ME.TEXT1'] },
        { icon: 'img/Icon Remote (1).png', text: translations['WHY_ME.TEXT2'] },
        { icon: 'img/Group 26.png', text: translations['WHY_ME.TEXT3'] }
      ];

      // Reset animation
      this.currentIconIndex = 0;
      this.charIndex = 0;
      this.displayText = '';
      this.isDeleting = false;

      this.startTyping();
    });
  }

  get currentIcon(): string {
    return this.icons[this.currentIconIndex]?.icon || '';
  }

  startTyping(): void {
    if (this.icons.length === 0) return;

    const current = this.icons[this.currentIconIndex];
    const fullText = current.text;
    const speed = this.isDeleting ? 100 : 100;

    setTimeout(() => {
      if (this.isDeleting) {
        this.charIndex--;
        this.displayText = fullText.substring(0, this.charIndex);
      } else {
        this.charIndex++;
        this.displayText = fullText.substring(0, this.charIndex);
      }

      if (!this.isDeleting && this.charIndex === fullText.length) {
        setTimeout(() => {
          this.isDeleting = true;
          this.startTyping();
        }, 1000);
        return;
      }

      if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.currentIconIndex = (this.currentIconIndex + 1) % this.icons.length;
      }

      this.startTyping();
    }, speed);
  }

  useLanguage(language: string): void {
    this.translate.use(language); 
  }

    scrollToSection(event: Event, id: string) {
  event.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
}