import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { QuoteModalService } from '../../../core/services/quote-modal.service';
import { AgencyDataService } from '../../../core/services/agency-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      [ngClass]="{
        'bg-[#F5F1E8]/95 backdrop-blur-md border-b border-[#172B3A]/10 py-3.5 shadow-sm': isScrolled(),
        'bg-transparent py-5': !isScrolled()
      }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          
          <!-- Editorial Studio Logo -->
          <a routerLink="/" (click)="closeMobileMenu()" class="flex items-center gap-3.5 group focus:outline-none">
            <div class="w-10 h-10 rounded-lg bg-[#172B3A] border border-[#D97745]/40 flex items-center justify-center text-[#F5F1E8] font-serif font-bold text-lg shadow-sm group-hover:bg-[#101E29] transition-colors">
              AH
            </div>
            <div class="flex flex-col">
              <span class="font-heading text-lg font-extrabold text-[#172B3A] tracking-tight leading-none">
                AH Digital <span class="text-[#D97745]">Solutions</span>
              </span>
              <span class="text-[10px] font-mono tracking-widest uppercase text-[#68747A] mt-1">
                Digital Studio & Engineering
              </span>
            </div>
          </a>

          <!-- Desktop Navigation (Editorial Studio Style) -->
          <nav class="hidden md:flex items-center gap-7 lg:gap-9 text-xs font-heading font-semibold tracking-wider uppercase text-[#68747A]">
            <a 
              routerLink="/" 
              routerLinkActive="text-[#172B3A] font-bold" 
              [routerLinkActiveOptions]="{exact: true}"
              class="relative py-1 hover:text-[#172B3A] transition-colors group">
              <span>Home</span>
              <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D97745] transition-all duration-200 group-hover:w-full"></span>
            </a>
            
            <a 
              routerLink="/about" 
              routerLinkActive="text-[#172B3A] font-bold" 
              class="relative py-1 hover:text-[#172B3A] transition-colors group">
              <span>About Studio</span>
              <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D97745] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a 
              routerLink="/services" 
              routerLinkActive="text-[#172B3A] font-bold" 
              class="relative py-1 hover:text-[#172B3A] transition-colors group">
              <span>Capabilities</span>
              <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D97745] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a 
              routerLink="/portfolio" 
              routerLinkActive="text-[#172B3A] font-bold" 
              class="relative py-1 hover:text-[#172B3A] transition-colors group">
              <span>Selected Work</span>
              <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D97745] transition-all duration-200 group-hover:w-full"></span>
            </a>

            <a 
              routerLink="/contact" 
              routerLinkActive="text-[#172B3A] font-bold" 
              class="relative py-1 hover:text-[#172B3A] transition-colors group">
              <span>Contact</span>
              <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D97745] transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>

          <!-- Desktop Actions -->
          <div class="hidden md:flex items-center gap-4">
            <a 
              [href]="getWhatsAppUrl()"
              target="_blank" 
              rel="noopener noreferrer"
              class="p-2 text-[#263D36] hover:text-[#172B3A] hover:bg-[#EBE5D8] rounded-md transition-colors"
              title="Direct Studio WhatsApp">
              <app-icon name="whatsapp" [size]="19" cssClass="text-[#263D36]"></app-icon>
            </a>

            <button 
              (click)="openQuoteModal()"
              class="px-5 py-2.5 rounded-md bg-[#D97745] hover:bg-[#C46433] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm active:translate-y-0.5 flex items-center gap-2">
              <span>Get a Free Quote</span>
              <app-icon name="arrow-right" [size]="14"></app-icon>
            </button>
          </div>

          <!-- Mobile Controls -->
          <div class="flex items-center gap-2.5 md:hidden">
            <button 
              (click)="openQuoteModal()"
              class="px-3.5 py-1.5 rounded-md bg-[#D97745] text-white text-xs font-heading font-semibold uppercase tracking-wider">
              Quote
            </button>
            <button 
              (click)="toggleMobileMenu()" 
              [attr.aria-expanded]="mobileMenuOpen()"
              aria-label="Toggle navigation menu"
              class="p-2 rounded-md bg-[#FAF7F2] border border-[#172B3A]/15 text-[#172B3A] focus:outline-none">
              <app-icon [name]="mobileMenuOpen() ? 'x' : 'menu'" [size]="20"></app-icon>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Dropdown Menu (Warm Ivory & Navy Studio aesthetic) -->
      <div 
        *ngIf="mobileMenuOpen()" 
        class="md:hidden bg-[#FAF7F2] border-b border-[#172B3A]/15 px-6 pt-4 pb-6 space-y-4 shadow-lg animate-fadeIn">
        <div class="flex flex-col divide-y divide-[#172B3A]/10 font-heading text-sm">
          <a 
            routerLink="/" 
            (click)="closeMobileMenu()" 
            routerLinkActive="text-[#D97745] font-bold"
            [routerLinkActiveOptions]="{exact: true}"
            class="py-3 text-[#172B3A] flex items-center justify-between">
            <span>Home</span>
            <app-icon name="arrow-right" [size]="14" cssClass="text-[#68747A]"></app-icon>
          </a>
          <a 
            routerLink="/about" 
            (click)="closeMobileMenu()" 
            routerLinkActive="text-[#D97745] font-bold"
            class="py-3 text-[#172B3A] flex items-center justify-between">
            <span>About Studio</span>
            <app-icon name="arrow-right" [size]="14" cssClass="text-[#68747A]"></app-icon>
          </a>
          <a 
            routerLink="/services" 
            (click)="closeMobileMenu()" 
            routerLinkActive="text-[#D97745] font-bold"
            class="py-3 text-[#172B3A] flex items-center justify-between">
            <span>Capabilities & Services</span>
            <app-icon name="arrow-right" [size]="14" cssClass="text-[#68747A]"></app-icon>
          </a>
          <a 
            routerLink="/portfolio" 
            (click)="closeMobileMenu()" 
            routerLinkActive="text-[#D97745] font-bold"
            class="py-3 text-[#172B3A] flex items-center justify-between">
            <span>Selected Work</span>
            <app-icon name="arrow-right" [size]="14" cssClass="text-[#68747A]"></app-icon>
          </a>
          <a 
            routerLink="/contact" 
            (click)="closeMobileMenu()" 
            routerLinkActive="text-[#D97745] font-bold"
            class="py-3 text-[#172B3A] flex items-center justify-between">
            <span>Contact & Inquiries</span>
            <app-icon name="arrow-right" [size]="14" cssClass="text-[#68747A]"></app-icon>
          </a>
        </div>

        <div class="pt-2 flex flex-col gap-2.5">
          <button 
            (click)="openQuoteModal()"
            class="w-full py-3 px-4 rounded-md bg-[#D97745] hover:bg-[#C46433] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-colors shadow flex items-center justify-center gap-2">
            <span>Get a Free Project Quote</span>
            <app-icon name="arrow-right" [size]="15"></app-icon>
          </button>
          
          <a 
            [href]="getWhatsAppUrl()"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full py-3 px-4 rounded-md bg-[#FAF7F2] border border-[#263D36]/30 text-[#263D36] font-heading font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2">
            <app-icon name="whatsapp" [size]="16" cssClass="text-[#263D36]"></app-icon>
            <span>Direct WhatsApp Inquiry</span>
          </a>
        </div>
      </div>
    </header>
  `
})
export class NavbarComponent {
  private quoteModalService = inject(QuoteModalService);
  private dataService = inject(AgencyDataService);

  readonly isScrolled = signal<boolean>(false);
  readonly mobileMenuOpen = signal<boolean>(false);

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 20);
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  openQuoteModal(): void {
    this.closeMobileMenu();
    this.quoteModalService.openModal();
  }

  getWhatsAppUrl(): string {
    const info = this.dataService.getContactInfo();
    const text = encodeURIComponent('Hello AH Digital Solutions, I would like to inquire about your digital studio services.');
    return `https://wa.me/${info.whatsappNumber}?text=${text}`;
  }
}
