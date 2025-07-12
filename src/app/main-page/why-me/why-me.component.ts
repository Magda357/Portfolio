import { Component } from '@angular/core';



@Component({
  selector: 'app-why-me',
  imports: [],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {

  icons = [
    { icon: '/img/location.png', text: 'I am located in Steinheim...|' },
    { icon: 'img/Icon Remote (1).png', text: 'I am open to work remote...|' },
    { icon: '/img/Group 26.png', text: 'I am open to relocate...|' }
  ];
currentIconIndex = 0;
  displayText = '';
  isDeleting = false;
  charIndex = 0;

  ngOnInit(): void {
    this.startTyping();
  }

  startTyping(): void {
    const current = this.icons[this.currentIconIndex];
    const fullText = current.text;
    const speed = this.isDeleting ? 50 : 100;

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

  get currentIcon(): string {
    return this.icons[this.currentIconIndex].icon;
  }
}



  

