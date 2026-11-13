import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { AgencyDataService } from '../../../core/services/agency-data.service';
import { QuoteModalService } from '../../../core/services/quote-modal.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  template: `
    <footer class="bg-[#172B3A] text-[#F5F1E8] border-t border-[#172B3A] pt-20 pb-12 relative overflow-hidden">
      <!-- Subtle Architectural Studio Grid Background -->
      <div class="absolute inset-0 studio-dark-grid opacity-30 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Top Editorial Banner -->
        <div class="pb-14 border-b border-[#2C475C] flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div class="max-w-xl space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-md bg-[#263D36] border border-[#D97745]/40 flex items-center justify-center text-[#F5F1E8] font-serif font-bold text-base">
                AH
              </div>
              <span class="font-heading text-xl font-bold tracking-tight text-[#F5F1E8]">
                AH Digital <span class="text-[#D97745]">Solutions</span>
              </span>
            </div>
            <p class="font-serif italic text-2xl sm:text-3xl text-[#F5F1E8] leading-snug">
              "Turning Ideas Into Digital Growth."
            </p>
            <p class="text-xs text-[#98A4AB] leading-relaxed">
              An engineering-led digital solutions studio helping retail shops, bakeries, coaching institutes, startups, and growing enterprises build durable web experiences and custom automations.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <button 
              (click)="openQuoteModal()"
              class="px-5 py-3 rounded-md bg-[#D97745] hover:bg-[#C46433] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm flex items-center gap-2">
              <span>Request a Project Quotation</span>
              <app-icon name="arrow-right" [size]="14"></app-icon>
            </button>

            <a 
              [href]="getWhatsAppUrl()"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-3 rounded-md bg-[#1F374A] hover:bg-[#244057] border border-[#2C475C] text-[#F5F1E8] font-heading font-semibold text-xs tracking-wider uppercase transition-colors flex items-center gap-2">
              <app-icon name="whatsapp" [size]="15" cssClass="text-[#D97745]"></app-icon>
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        <!-- 4 Column Editorial Layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-[#2C475C]">
          
          <!-- Column 1: Studio Practice -->
          <div class="space-y-3.5">
            <span class="font-mono text-[11px] tracking-widest uppercase text-[#D97745] block font-semibold">
              01 // Navigation
            </span>
            <ul class="space-y-2.5 text-xs text-[#98A4AB] font-heading">
              <li>
                <a routerLink="/" class="hover:text-[#F5F1E8] transition-colors">Home Page</a>
              </li>
              <li>
                <a routerLink="/about" class="hover:text-[#F5F1E8] transition-colors">About Our Studio</a>
              </li>
              <li>
                <a routerLink="/services" class="hover:text-[#F5F1E8] transition-colors">Capabilities & Services</a>
              </li>
              <li>
                <a routerLink="/portfolio" class="hover:text-[#F5F1E8] transition-colors">Selected Case Studies</a>
              </li>
              <li>
                <a routerLink="/contact" class="hover:text-[#F5F1E8] transition-colors">Contact & Brief Inquiry</a>
              </li>
            </ul>
          </div>

          <!-- Column 2: Capabilities -->
          <div class="space-y-3.5">
            <span class="font-mono text-[11px] tracking-widest uppercase text-[#D97745] block font-semibold">
              02 // Capabilities
            </span>
            <ul class="space-y-2.5 text-xs text-[#98A4AB] font-heading">
              <li>
                <a routerLink="/services" [fragment]="'website-development'" class="hover:text-[#F5F1E8] transition-colors">Custom Website Development</a>
              </li>
              <li>
                <a routerLink="/services" [fragment]="'ai-solutions'" class="hover:text-[#F5F1E8] transition-colors">Applied AI & RAG Assistants</a>
              </li>
              <li>
                <a routerLink="/services" [fragment]="'business-automation'" class="hover:text-[#F5F1E8] transition-colors">Business Process Automation</a>
              </li>
              <li>
                <a routerLink="/services" [fragment]="'ui-ux-design'" class="hover:text-[#F5F1E8] transition-colors">UI / UX Design Systems</a>
              </li>
              <li>
                <a routerLink="/services" class="hover:text-[#F5F1E8] transition-colors">E-Commerce & Digital Catalogs</a>
              </li>
            </ul>
          </div>

          <!-- Column 3: Client Fit -->
          <div class="space-y-3.5">
            <span class="font-mono text-[11px] tracking-widest uppercase text-[#D97745] block font-semibold">
              03 // Client Focus
            </span>
            <ul class="space-y-2.5 text-xs text-[#98A4AB] font-heading">
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[#D97745]"></span>
                <span>Small & Medium Businesses</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[#D97745]"></span>
                <span>Bakeries, Cafes & Restaurants</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[#D97745]"></span>
                <span>Retail Boutiques & Stores</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[#D97745]"></span>
                <span>Coaching & Education Institutes</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[#D97745]"></span>
                <span>Startups & Growing Founders</span>
              </li>
            </ul>
          </div>

          <!-- Column 4: Studio Colophon -->
          <div class="space-y-3.5">
            <span class="font-mono text-[11px] tracking-widest uppercase text-[#D97745] block font-semibold">
              04 // Studio Details
            </span>
            <div class="space-y-3 text-xs text-[#98A4AB]">
              <div class="flex items-start gap-2.5">
                <app-icon name="map-pin" [size]="14" cssClass="text-[#D97745] mt-0.5 shrink-0"></app-icon>
                <span>{{ contact.location }}</span>
              </div>
              <div class="flex items-start gap-2.5">
                <app-icon name="clock" [size]="14" cssClass="text-[#D97745] mt-0.5 shrink-0"></app-icon>
                <span>{{ contact.businessHours }}</span>
              </div>
              <div class="flex items-start gap-2.5">
                <app-icon name="mail" [size]="14" cssClass="text-[#D97745] mt-0.5 shrink-0"></app-icon>
                <a [href]="'mailto:' + contact.email" class="hover:text-[#F5F1E8] transition-colors break-all">
                  {{ contact.email }}
                </a>
              </div>
              <div class="pt-1">
                <span class="font-mono text-[10px] text-[#263D36] bg-[#F5F1E8] px-2 py-0.5 rounded font-bold">
                  SLA: 24h Project Review
                </span>
              </div>
            </div>
          </div>

        </div>

        <!-- Colophon Bottom Bar -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#98A4AB]">
          <div>
            &copy; {{ currentYear }} AH Digital Solutions. Built with engineering discipline & human design.
          </div>

          <div class="flex items-center gap-4 font-mono text-[11px]">
            <span>Angular 18 Standalone</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>India</span>
          </div>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  private dataService = inject(AgencyDataService);
  private quoteModalService = inject(QuoteModalService);

  readonly contact = this.dataService.getContactInfo();
  readonly currentYear = new Date().getFullYear();

  openQuoteModal(): void {
    this.quoteModalService.openModal();
  }

  getWhatsAppUrl(): string {
    const text = encodeURIComponent('Hello AH Digital Solutions, I would like to discuss a project with your studio.');
    return `https://wa.me/${this.contact.whatsappNumber}?text=${text}`;
  }
}
