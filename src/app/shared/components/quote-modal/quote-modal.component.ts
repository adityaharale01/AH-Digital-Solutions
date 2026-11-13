import { Component, HostListener, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';
import { QuoteModalService } from '../../../core/services/quote-modal.service';
import { AgencyDataService } from '../../../core/services/agency-data.service';

@Component({
  selector: 'app-quote-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconComponent],
  template: `
    <div 
      *ngIf="quoteModalService.isOpen()" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#172B3A]/85 backdrop-blur-sm animate-fadeIn"
      (click)="onBackdropClick($event)">
      
      <div 
        class="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#172B3A]/20 rounded-xl shadow-2xl overflow-hidden my-8 text-[#172B3A]"
        (click)="$event.stopPropagation()">
        
        <!-- Modal Header -->
        <div class="px-6 sm:px-8 py-5 border-b border-[#172B3A]/10 flex items-center justify-between bg-[#F5F1E8]">
          <div>
            <div class="flex items-center gap-2">
              <span class="font-mono text-[10px] uppercase font-bold tracking-wider text-[#D97745] bg-[#D97745]/10 px-2 py-0.5 rounded">
                Direct Studio Brief
              </span>
              <h3 class="font-serif text-xl sm:text-2xl font-bold text-[#172B3A]">Request a Project Quotation</h3>
            </div>
            <p class="text-xs text-[#68747A] mt-1">
              Tell us about your project requirements. We evaluate your goals and respond within 24 business hours.
            </p>
          </div>

          <button 
            type="button"
            (click)="close()" 
            aria-label="Close quotation dialog"
            class="p-2 rounded-md text-[#68747A] hover:text-[#172B3A] hover:bg-[#EBE5D8] transition-colors">
            <app-icon name="x" [size]="20"></app-icon>
          </button>
        </div>

        <!-- Form Body or Success State -->
        <div class="p-6 sm:p-8">
          
          <div *ngIf="!submitted">
            <form [formGroup]="quoteForm" (ngSubmit)="onSubmit()" class="space-y-4">
              
              <!-- Service Selection -->
              <div>
                <label class="block text-xs font-heading font-bold text-[#172B3A] uppercase tracking-wider mb-2">
                  Service Category <span class="text-[#D97745]">*</span>
                </label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button 
                    type="button"
                    *ngFor="let s of services"
                    (click)="setService(s.id)"
                    [ngClass]="isServiceSelected(s.id) ? 'border-[#172B3A] bg-[#172B3A] text-[#F5F1E8]' : 'border-[#172B3A]/15 bg-white text-[#172B3A] hover:bg-[#EBE5D8]'"
                    class="p-2.5 rounded-md border text-left transition-all">
                    <span class="font-heading text-xs font-semibold block">{{ s.name }}</span>
                  </button>
                </div>
                <div *ngIf="quoteForm.get('service')?.touched && quoteForm.get('service')?.invalid" class="text-[#D97745] text-xs mt-1">
                  Please select a service category.
                </div>
              </div>

              <!-- Full Name & Business Name -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-heading font-semibold text-[#172B3A] mb-1.5">
                    Your Full Name <span class="text-[#D97745]">*</span>
                  </label>
                  <input 
                    type="text" 
                    formControlName="fullName"
                    placeholder="e.g. Rahul Sharma"
                    class="w-full text-sm px-3.5 py-2.5 rounded-md bg-white border border-[#172B3A]/20 text-[#172B3A] placeholder-[#68747A] focus:outline-none focus:border-[#D97745] focus:ring-1 focus:ring-[#D97745] transition-colors" />
                  <div *ngIf="quoteForm.get('fullName')?.touched && quoteForm.get('fullName')?.invalid" class="text-[#D97745] text-xs mt-1">
                    Full name is required (min 2 characters).
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-heading font-semibold text-[#172B3A] mb-1.5">
                    Business / Brand Name <span class="text-[#D97745]">*</span>
                  </label>
                  <input 
                    type="text" 
                    formControlName="businessName"
                    placeholder="e.g. Urban Bakes / TechCorp"
                    class="w-full text-sm px-3.5 py-2.5 rounded-md bg-white border border-[#172B3A]/20 text-[#172B3A] placeholder-[#68747A] focus:outline-none focus:border-[#D97745] focus:ring-1 focus:ring-[#D97745] transition-colors" />
                  <div *ngIf="quoteForm.get('businessName')?.touched && quoteForm.get('businessName')?.invalid" class="text-[#D97745] text-xs mt-1">
                    Business or project name is required.
                  </div>
                </div>
              </div>

              <!-- Email & Phone -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-heading font-semibold text-[#172B3A] mb-1.5">
                    Email Address <span class="text-[#D97745]">*</span>
                  </label>
                  <input 
                    type="email" 
                    formControlName="email"
                    placeholder="rahul@example.com"
                    class="w-full text-sm px-3.5 py-2.5 rounded-md bg-white border border-[#172B3A]/20 text-[#172B3A] placeholder-[#68747A] focus:outline-none focus:border-[#D97745] focus:ring-1 focus:ring-[#D97745] transition-colors" />
                  <div *ngIf="quoteForm.get('email')?.touched && quoteForm.get('email')?.invalid" class="text-[#D97745] text-xs mt-1">
                    Valid email address is required.
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-heading font-semibold text-[#172B3A] mb-1.5">
                    Phone / WhatsApp Number <span class="text-[#D97745]">*</span>
                  </label>
                  <input 
                    type="tel" 
                    formControlName="phone"
                    placeholder="+91 98765 43210"
                    class="w-full text-sm px-3.5 py-2.5 rounded-md bg-white border border-[#172B3A]/20 text-[#172B3A] placeholder-[#68747A] focus:outline-none focus:border-[#D97745] focus:ring-1 focus:ring-[#D97745] transition-colors" />
                  <div *ngIf="quoteForm.get('phone')?.touched && quoteForm.get('phone')?.invalid" class="text-[#D97745] text-xs mt-1">
                    Valid phone or WhatsApp number is required.
                  </div>
                </div>
              </div>

              <!-- Budget Selection -->
              <div>
                <label class="block text-xs font-heading font-semibold text-[#172B3A] mb-1.5">
                  Estimated Budget Range
                </label>
                <select 
                  formControlName="budget"
                  class="w-full text-sm px-3.5 py-2.5 rounded-md bg-white border border-[#172B3A]/20 text-[#172B3A] focus:outline-none focus:border-[#D97745] focus:ring-1 focus:ring-[#D97745] transition-colors">
                  <option value="Flexible / Discuss Scope First">Flexible / Let's discuss scope first</option>
                  <option value="₹5,000 – ₹12,000 (Starter Website)">₹5,000 – ₹12,000 (Starter Website)</option>
                  <option value="₹12,000 – ₹25,000 (Professional Business Website)">₹12,000 – ₹25,000 (Professional Business Website)</option>
                  <option value="₹20,000 – ₹45,000 (Custom AI Solutions)">₹20,000 – ₹45,000 (Custom AI Solutions)</option>
                  <option value="₹35,000 – ₹75,000+ (Full-Stack Custom Platform)">₹35,000 – ₹75,000+ (Full-Stack Custom Platform)</option>
                  <option value="₹1,000 – ₹3,000/month (Website Maintenance)">₹1,000 – ₹3,000/month (Website Maintenance)</option>
                </select>
              </div>

              <!-- Project Description -->
              <div>
                <label class="block text-xs font-heading font-semibold text-[#172B3A] mb-1.5">
                  Project Description & Key Requirements <span class="text-[#D97745]">*</span>
                </label>
                <textarea 
                  formControlName="description"
                  rows="3"
                  placeholder="Describe your business, what problem needs solving, key pages or features, and reference links..."
                  class="w-full text-sm px-3.5 py-2.5 rounded-md bg-white border border-[#172B3A]/20 text-[#172B3A] placeholder-[#68747A] focus:outline-none focus:border-[#D97745] focus:ring-1 focus:ring-[#D97745] transition-colors"></textarea>
                <div *ngIf="quoteForm.get('description')?.touched && quoteForm.get('description')?.invalid" class="text-[#D97745] text-xs mt-1">
                  Please provide a brief description (min 20 characters).
                </div>
              </div>

              <!-- Footer Actions -->
              <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span class="text-[11px] text-[#68747A] text-center sm:text-left">
                  🔒 Confidential inquiry. Direct to engineering team.
                </span>
                
                <button 
                  type="submit"
                  [disabled]="quoteForm.invalid"
                  [class.opacity-50]="quoteForm.invalid"
                  [class.cursor-not-allowed]="quoteForm.invalid"
                  class="w-full sm:w-auto px-6 py-3 rounded-md bg-[#D97745] hover:bg-[#C46433] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm flex items-center justify-center gap-2">
                  <span>Prepare Quotation Brief</span>
                  <app-icon name="arrow-right" [size]="14"></app-icon>
                </button>
              </div>

            </form>
          </div>

          <!-- Brief Prepared / Transmission Options -->
          <div *ngIf="submitted" class="space-y-5 animate-fadeIn">
            
            <div class="bg-[#263D36]/10 border border-[#263D36]/25 rounded-lg p-4 text-[#172B3A]">
              <div class="flex items-center gap-2 text-[#263D36] font-heading font-bold text-sm mb-1">
                <app-icon name="check-circle" [size]="17"></app-icon>
                <span>Quotation Brief Compiled</span>
              </div>
              <p class="text-xs text-[#68747A]">
                To guarantee your project request reaches our engineering team directly without getting lost in automated spam folders, choose your preferred direct channel:
              </p>
            </div>

            <!-- Formatted Preview -->
            <div class="bg-white border border-[#172B3A]/15 rounded-lg p-4 space-y-2 text-xs font-mono text-[#172B3A] max-h-48 overflow-y-auto">
              <div class="text-[#D97745] font-bold mb-1">=== PROJECT QUOTATION INQUIRY ===</div>
              <div><strong class="text-[#68747A]">Client:</strong> {{ quoteForm.value.fullName }} ({{ quoteForm.value.businessName }})</div>
              <div><strong class="text-[#68747A]">Email:</strong> {{ quoteForm.value.email }}</div>
              <div><strong class="text-[#68747A]">Phone:</strong> {{ quoteForm.value.phone }}</div>
              <div><strong class="text-[#68747A]">Service:</strong> {{ getServiceName(quoteForm.value.service) }}</div>
              <div><strong class="text-[#68747A]">Budget:</strong> {{ quoteForm.value.budget }}</div>
              <div><strong class="text-[#68747A]">Scope:</strong> {{ quoteForm.value.description }}</div>
            </div>

            <!-- Action Buttons -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a 
                [href]="getWhatsAppSubmissionUrl()" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-[#263D36] hover:bg-[#1A2B26] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm">
                <app-icon name="whatsapp" [size]="15"></app-icon>
                <span>Send via WhatsApp</span>
              </a>

              <a 
                [href]="getEmailSubmissionUrl()"
                class="flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-[#172B3A] hover:bg-[#101E29] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm">
                <app-icon name="mail" [size]="15"></app-icon>
                <span>Send via Email</span>
              </a>

              <button 
                type="button"
                (click)="copyBrief()"
                class="flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-[#EBE5D8] hover:bg-[#DFD7C7] text-[#172B3A] font-heading font-semibold text-xs tracking-wider uppercase transition-colors border border-[#172B3A]/20">
                <app-icon name="copy" [size]="15"></app-icon>
                <span>{{ copiedText ? 'Copied to Clipboard!' : 'Copy Brief' }}</span>
              </button>
            </div>

            <div class="pt-2 text-center">
              <button 
                type="button"
                (click)="resetForm()"
                class="text-xs text-[#68747A] hover:text-[#172B3A] underline font-heading">
                Edit Information or Start Over
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  `
})
export class QuoteModalComponent {
  quoteModalService = inject(QuoteModalService);
  private dataService = inject(AgencyDataService);
  private fb = inject(FormBuilder);

  quoteForm: FormGroup;
  submitted: boolean = false;
  copiedText: boolean = false;

  readonly services = [
    { id: 'website-development', name: 'Website Development' },
    { id: 'ai-solutions', name: 'AI Solutions' },
    { id: 'business-automation', name: 'Automation' },
    { id: 'ui-ux-design', name: 'UI / UX Design' }
  ];

  constructor() {
    this.quoteForm = this.fb.group({
      service: ['website-development', Validators.required],
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      businessName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      budget: ['Flexible / Discuss Scope First'],
      description: ['', [Validators.required, Validators.minLength(20)]]
    });

    effect(() => {
      const selected = this.quoteModalService.selectedService();
      if (selected) {
        this.quoteForm.patchValue({ service: selected });
      }
    });
  }

  isServiceSelected(serviceId: string): boolean {
    return this.quoteForm.get('service')?.value === serviceId;
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.quoteModalService.isOpen()) {
      this.close();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    this.close();
  }

  close(): void {
    this.quoteModalService.closeModal();
    this.submitted = false;
    this.copiedText = false;
  }

  setService(serviceId: string): void {
    this.quoteForm.patchValue({ service: serviceId });
  }

  getServiceName(id: string): string {
    const match = this.services.find(s => s.id === id);
    return match ? match.name : id;
  }

  onSubmit(): void {
    if (this.quoteForm.valid) {
      this.submitted = true;
    } else {
      this.quoteForm.markAllAsTouched();
    }
  }

  resetForm(): void {
    this.submitted = false;
    this.copiedText = false;
  }

  getFormattedBrief(): string {
    const v = this.quoteForm.value;
    return `PROJECT QUOTATION INQUIRY — AH DIGITAL SOLUTIONS
====================================
• Client Name: ${v.fullName}
• Business Name: ${v.businessName}
• Email: ${v.email}
• Phone: ${v.phone}
• Service: ${this.getServiceName(v.service)}
• Budget Range: ${v.budget}

Project Scope & Requirements:
${v.description}
====================================`;
  }

  getWhatsAppSubmissionUrl(): string {
    const info = this.dataService.getContactInfo();
    const message = encodeURIComponent(this.getFormattedBrief());
    return `https://wa.me/${info.whatsappNumber}?text=${message}`;
  }

  getEmailSubmissionUrl(): string {
    const info = this.dataService.getContactInfo();
    const subject = encodeURIComponent(`Project Quotation Request: ${this.quoteForm.value.businessName} - ${this.getServiceName(this.quoteForm.value.service)}`);
    const body = encodeURIComponent(this.getFormattedBrief());
    return `mailto:${info.email}?subject=${subject}&body=${body}`;
  }

  copyBrief(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.getFormattedBrief());
      this.copiedText = true;
      setTimeout(() => {
        this.copiedText = false;
      }, 3000);
    }
  }
}
