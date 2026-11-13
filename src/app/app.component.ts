import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { WhatsappButtonComponent } from './shared/components/whatsapp-button/whatsapp-button.component';
import { QuoteModalComponent } from './shared/components/quote-modal/quote-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    WhatsappButtonComponent,
    QuoteModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AH Digital Solutions';
}
