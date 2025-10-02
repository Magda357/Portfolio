import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule, RouterLink, NgIf, NgClass],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss','./contact.responsive.scss']
})
export class ContactComponent {
  email = 'mdanielyan50@gmail.com';

  constructor(private http: HttpClient) {}

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

 
  mailTest = false;

  private endpoint = 'https://magda-danielyan.de/sendMail.php';

  onSubmit(ngForm: NgForm) {
    if (!ngForm.submitted || !ngForm.form.valid) return;

    this.http.post(
      this.endpoint,
      this.contactData, 
      {
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        withCredentials: false, 
      }
    ).subscribe({
      next: (resp: any) => {
        
        console.log('server response:', resp);
        ngForm.resetForm();
      },
      error: (err) => {
        console.error('POST failed:', err);
      },
      complete: () => console.info('send post complete'),
    });
  }

  scrollToSection(event: Event, id: string) {
  event.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
}