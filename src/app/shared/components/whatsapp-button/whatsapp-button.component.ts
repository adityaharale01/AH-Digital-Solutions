import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';
import { AgencyDataService } from '../../../core/services/agency-data.service';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  template: `
    <!-- Floating Studio WhatsApp Widget -->
    <div class="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      <!-- Mini Quick Chat Flyout (Warm Ivory & Navy Studio Card) -->
      <div 
        *ngIf="showPopup()" 
        class="mb-3 w-80 sm:w-88 bg-[#FAF7F2] border border-[#172B3A]/20 rounded-xl shadow-2xl p-5 text-[#172B3A] animate-fadeIn overflow-hidden">
        
        <div class="flex items-center justify-between pb-3 border-b border-[#172B3A]/10">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-md bg-[#263D36] text-[#F5F1E8] flex items-center justify-center">
              <app-icon name="whatsapp" [size]="16"></app-icon>
            </div>
            <div>
              <h4 class="font-heading text-xs font-bold text-[#172B3A]">AH Digital Studio</h4>
              <p class="font-mono text-[10px] text-[#263D36] font-semibold">Direct Engineering Inquiry</p>
            </div>
          </div>
          
          <button 
            (click)="togglePopup()" 
            aria-label="Close WhatsApp chat popup"
            class="text-[#68747A] hover:text-[#172B3A] p-1 rounded hover:bg-[#EBE5D8] transition-colors">
            <app-icon name="x" [size]="16"></app-icon>
          </button>
        </div>

        <div class="py-3 text-xs text-[#68747A] leading-relaxed bg-[#EBE5D8]/50 p-3 rounded-lg my-3 border border-[#172B3A]/10">
          Have an inquiry about a website, AI solution, or workflow automation? Send a direct note to our technical team.
        </div>

        <div class="space-y-2.5">
          <input 
            type="text" 
            [(ngModel)]="quickMessage" 
            placeholder="Type your project note or inquiry..."
            (keyup.enter)="sendToWhatsApp()"
            class="w-full text-xs px-3 py-2.5 rounded-md bg-white border border-[#172B3A]/20 text-[#172B3A] placeholder-[#68747A] focus:outline-none focus:border-[#D97745] focus:ring-1 focus:ring-[#D97745] transition-colors" />

          <button 
            (click)="sendToWhatsApp()"
            class="w-full py-2.5 px-3 rounded-md bg-[#D97745] hover:bg-[#C46433] text-white font-heading font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-sm">
            <span>Open in WhatsApp</span>
            <app-icon name="send" [size]="13"></app-icon>
          </button>
        </div>

        <p class="text-[10px] text-[#68747A] text-center mt-2.5 font-mono">
          Reviewed within business hours (IST)
        </p>
      </div>

      <!-- Trigger Button -->
      <button 
        (click)="togglePopup()"
        aria-label="Chat on WhatsApp"
        class="group relative flex items-center gap-2 bg-[#263D36] hover:bg-[#172B3A] border border-[#F5F1E8]/20 text-[#F5F1E8] px-4 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none">
        
        <span class="w-2 h-2 rounded-full bg-[#D97745] animate-pulse"></span>
        <app-icon name="whatsapp" [size]="18" cssClass="text-[#F5F1E8]"></app-icon>
        <span class="font-heading text-xs font-semibold tracking-wider uppercase hidden sm:inline-block">Studio WhatsApp</span>
      </button>

    </div>
  `
})
export class WhatsappButtonComponent {
  private dataService = inject(AgencyDataService);

  readonly showPopup = signal<boolean>(false);
  quickMessage: string = '';

  togglePopup(): void {
    this.showPopup.update(v => !v);
  }

  sendToWhatsApp(): void {
    const info = this.dataService.getContactInfo();
    const message = this.quickMessage.trim() 
      ? `Hello AH Digital Solutions, ${this.quickMessage.trim()}`
      : 'Hello AH Digital Solutions, I would like to inquire about your digital studio services.';
    
    const url = `https://wa.me/${info.whatsappNumber}?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    this.showPopup.set(false);
    this.quickMessage = '';
  }
}
