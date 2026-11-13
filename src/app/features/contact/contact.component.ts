import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { AgencyDataService } from '../../core/services/agency-data.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconComponent],
  template: `
    <div class="min-h-screen bg-[#F5F1E8] text-[#172B3A] pt-28 pb-24">
      
      <!-- Studio Contact Header -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-left border-b border-[#172B3A]/10">
        <div class="max-w-3xl space-y-4">
          <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#D97745] bg-[#D97745]/10 px-3 py-1 rounded inline-block">
            Start a Project Conversation
          </span>
          <h1 class="font-serif text-4xl sm:text-5xl md:text-6xl text-[#172B3A] font-normal tracking-tight leading-tight">
            Let's Discuss Your Project Requirements.
          </h1>
          <p class="text-base sm:text-lg text-[#68747A] leading-relaxed">
            Tell us about your business, the goals you want to achieve, and your preferred timeline. We evaluate every submission and respond with realistic recommendations.
          </p>
        </div>
      </section>

      <!-- Main Contact Grid -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Column: Direct Info & Channels (5 cols) -->
          <div class="lg:col-span-5 space-y-6">
            
            <!-- Direct Channels Card -->
            <div class="p-8 rounded-xl bg-white border border-[#172B3A]/15 shadow-studio-card space-y-6">
              <h2 class="font-serif text-2xl font-bold text-[#172B3A]">Direct Studio Channels</h2>
              
              <div class="space-y-4">
                
                <!-- WhatsApp Direct -->
                <a 
                  [href]="getWhatsAppUrl()" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="p-4 rounded-lg bg-[#FAF7F2] border border-[#172B3A]/10 hover:border-[#263D36] flex items-start gap-4 transition-all group">
                  <div class="w-10 h-10 rounded-md bg-[#263D36] text-[#F5F1E8] flex items-center justify-center shrink-0">
                    <app-icon name="whatsapp" [size]="20"></app-icon>
                  </div>
                  <div>
                    <span class="font-mono text-[10px] font-bold uppercase tracking-wider text-[#263D36] block">Fastest Response</span>
                    <span class="font-heading text-sm font-bold text-[#172B3A] block">WhatsApp Direct Chat</span>
                    <span class="font-mono text-xs text-[#68747A] block mt-0.5">{{ contact.whatsappDisplay }}</span>
                  </div>
                </a>

                <!-- Email Direct -->
                <a 
                  [href]="'mailto:' + contact.email"
                  class="p-4 rounded-lg bg-[#FAF7F2] border border-[#172B3A]/10 hover:border-[#172B3A] flex items-start gap-4 transition-all group">
                  <div class="w-10 h-10 rounded-md bg-[#172B3A] text-[#F5F1E8] flex items-center justify-center shrink-0">
                    <app-icon name="mail" [size]="20"></app-icon>
                  </div>
                  <div>
                    <span class="font-mono text-[10px] font-bold uppercase tracking-wider text-[#D97745] block">Formal Enquiries</span>
                    <span class="font-heading text-sm font-bold text-[#172B3A] block">Project Email</span>
                    <span class="font-mono text-xs text-[#68747A] block mt-0.5 break-all">{{ contact.email }}</span>
                  </div>
                </a>

                <!-- Location & Time -->
                <div class="p-4 rounded-lg bg-[#FAF7F2] border border-[#172B3A]/10 flex items-start gap-4">
                  <div class="w-10 h-10 rounded-md bg-[#FAF7F2] border border-[#172B3A]/20 text-[#172B3A] flex items-center justify-center shrink-0">
                    <app-icon name="map-pin" [size]="20"></app-icon>
                  </div>
                  <div>
                    <span class="font-mono text-[10px] font-bold uppercase tracking-wider text-[#68747A] block">Studio Location</span>
                    <span class="font-heading text-sm font-bold text-[#172B3A] block">{{ contact.location }}</span>
                    <span class="font-mono text-xs text-[#68747A] block mt-0.5">{{ contact.businessHours }}</span>
                  </div>
                </div>

              </div>

              <!-- Response Expectation -->
              <div class="p-4 rounded-lg bg-[#FAF7F2] border border-[#172B3A]/10 text-xs text-[#68747A] space-y-1">
                <div class="flex items-center gap-2 text-[#D97745] font-heading font-bold">
                  <app-icon name="clock" [size]="15"></app-icon>
                  <span>Our Response Standard</span>
                </div>
                <p class="leading-relaxed">
                  {{ contact.responseExpectation }}
                </p>
              </div>

            </div>

            <!-- Transparency Statement -->
            <div class="p-6 rounded-xl bg-white border border-[#172B3A]/15 space-y-2">
              <h4 class="font-heading text-xs font-bold uppercase tracking-wider text-[#172B3A]">Honest Client Commitment:</h4>
              <p class="text-xs text-[#68747A] leading-relaxed">
                We believe in genuine communication. You talk directly with the engineer building your product—not outsourced call centers or sales reps making promises the developers cannot keep.
              </p>
            </div>

          </div>

          <!-- Right Column: Interactive Reactive Form (7 cols) -->
          <div class="lg:col-span-7">
            <div class="p-8 sm:p-10 rounded-xl bg-white border border-[#172B3A]/15 shadow-studio-card">
              
              <!-- Form State -->
              <div *ngIf="!submitted">
                <h3 class="font-serif text-2xl font-bold text-[#172B3A] mb-1">Project Specification Form</h3>
                <p class="text-xs text-[#68747A] mb-6">
                  Fill in the details below to prepare your formal project brief.
                </p>

                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
                  
                  <!-- Full Name & Business Name -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-heading font-semibold text-[#172B3A] mb-1.5">
                        Your Full Name <span class="text-[#D97745]">*</span>
                      </label>
                      <input 
                        type="text" 
                        formControlName="fullName"
                        placeholder="e.g. Priya Nair"
                        class="w-full text-sm px-3.5 py-2.5 rounded-md bg-[#FAF7F2] border border-[#172B3A]/20 text-[#172B3A] placeholder-[#68747A] focus:outline-none focus:border-[#D97745] focus:ring-1 focus:ring-[#D97745] transition-colors" />
                      <div *ngIf="contactForm.get('fullName')?.touched && contactForm.get('fullName')?.invalid" class="text-[#D97745] text-xs mt-1">
                        Full name is required (min 2 chars).
                      </div>
                    </div>

                    <div>
                      <label class="block text-xs font-heading font-semibold text-[#172B3A] mb-1.5">
                        Business Name <span class="text-[#D97745]">*</span>
                      </label>
                      <input 
                        type="text" 
                        formControlName="businessName"
                        placeholder="e.g. Zenith Studio / FoodNest"
                        class="w-full text-sm px-3.5 py-2.5 rounded-md bg-[#FAF7F2] border border-[#172B3A]/20 text-[#172B3A] placeholder-[#68747A] focus:outline-none focus:border-[#D97745] focus:ring-1 focus:ring-[#D97745] transition-colors" />
                      <div *ngIf="contactForm.get('businessName')?.touched && contactForm.get('businessName')?.invalid" class="text-[#D97745] text-xs mt-1">
                        Business or company name is required.
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
                        placeholder="priya@example.com"
                        class="w-full text-sm px-3.5 py-2.5 rounded-md bg-[#FAF7F2] border border-[#172B3A]/20 text-[#172B3A] placeholder-[#68747A] focus:outline-none focus:border-[#D97745] focus:ring-1 focus:ring-[#D97745] transition-colors" />
                      <div *ngIf="contactForm.get('email')?.touched && contactForm.get('email')?.invalid" class="text-[#D97745] text-xs mt-1">
                        Valid email address is required.
                      </div>
                    </div>

                    <div>
                      <label class="block text-xs font-heading font-semibold text-[#172B3A] mb-1.5">
                        Phone / WhatsApp <span class="text-[#D97745]">*</span>
                      </label>
                      <input 
                        type="tel" 
                        formControlName="phone"
                        placeholder="+91 98765 43210"
                        class="w-full text-sm px-3.5 py-2.5 rounded-md bg-[#FAF7F2] border border-[#172B3A]/20 text-[#172B3A] placeholder-[#68747A] focus:outline-none focus:border-[#D97745] focus:ring-1 focus:ring-[#D97745] transition-colors" />
                      <div *ngIf="contactForm.get('phone')?.touched && contactForm.get('phone')?.invalid" class="text-[#D97745] text-xs mt-1">
                        Valid phone or WhatsApp number is required.
                      </div>
                    </div>
                  </div>

                  <!-- Service Required & Project Budget -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-heading font-semibold text-[#172B3A] mb-1.5">
                        Primary Service Needed <span class="text-[#D97745]">*</span>
                      </label>
                      <select 
                        formControlName="service"
                        class="w-full text-sm px-3.5 py-2.5 rounded-md bg-[#FAF7F2] border border-[#172B3A]/20 text-[#172B3A] focus:outline-none focus:border-[#D97745] focus:ring-1 focus:ring-[#D97745] transition-colors">
                        <option value="Website Development">Website Development (Business, E-commerce, Landing)</option>
                        <option value="AI Solutions">AI Solutions (Chatbots, RAG, Doc Processing)</option>
                        <option value="Business Automation">Business Automation (Workflow, API, Notifications)</option>
                        <option value="UI/UX Design">UI / UX Design (Websites, Dashboards, Mobile)</option>
                        <option value="Custom Combined Package">Custom Combined Engineering Solution</option>
                      </select>
                    </div>

                    <div>
                      <label class="block text-xs font-heading font-semibold text-[#172B3A] mb-1.5">
                        Estimated Budget
                      </label>
                      <select 
                        formControlName="budget"
                        class="w-full text-sm px-3.5 py-2.5 rounded-md bg-[#FAF7F2] border border-[#172B3A]/20 text-[#172B3A] focus:outline-none focus:border-[#D97745] focus:ring-1 focus:ring-[#D97745] transition-colors">
                        <option value="Discuss Scope First">Discuss scope first</option>
                        <option value="₹5,000 – ₹12,000 (Starter Website)">₹5,000 – ₹12,000 (Starter Website)</option>
                        <option value="₹12,000 – ₹25,000 (Professional Business Website)">₹12,000 – ₹25,000 (Professional Business Website)</option>
                        <option value="₹20,000 – ₹45,000 (Custom AI Solutions)">₹20,000 – ₹45,000 (Custom AI Solutions)</option>
                        <option value="₹35,000 – ₹75,000+ (Full-Stack Custom Platform)">₹35,000 – ₹75,000+ (Full-Stack Custom Platform)</option>
                        <option value="₹1,000 – ₹3,000/month (Website Maintenance)">₹1,000 – ₹3,000/month (Website Maintenance)</option>
                      </select>
                    </div>
                  </div>

                  <!-- Project Description -->
                  <div>
                    <label class="block text-xs font-heading font-semibold text-[#172B3A] mb-1.5">
                      Tell Us About Your Project & Requirements <span class="text-[#D97745]">*</span>
                    </label>
                    <textarea 
                      formControlName="description"
                      rows="4"
                      placeholder="Share your business context, who your customers are, what specific problems need solving, or any reference websites you like..."
                      class="w-full text-sm px-3.5 py-2.5 rounded-md bg-[#FAF7F2] border border-[#172B3A]/20 text-[#172B3A] placeholder-[#68747A] focus:outline-none focus:border-[#D97745] focus:ring-1 focus:ring-[#D97745] transition-colors"></textarea>
                    <div *ngIf="contactForm.get('description')?.touched && contactForm.get('description')?.invalid" class="text-[#D97745] text-xs mt-1">
                      Please enter a description (at least 20 characters) so we can assess your requirements.
                    </div>
                  </div>

                  <!-- Form Submit Button -->
                  <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span class="text-[11px] text-[#68747A] text-center sm:text-left font-mono">
                      ✓ Instant structured brief preparation with direct transmission.
                    </span>

                    <button 
                      type="submit"
                      [disabled]="contactForm.invalid"
                      [class.opacity-50]="contactForm.invalid"
                      [class.cursor-not-allowed]="contactForm.invalid"
                      class="w-full sm:w-auto px-8 py-3.5 rounded-md bg-[#D97745] hover:bg-[#C46433] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm flex items-center justify-center gap-2">
                      <span>Submit Project Brief</span>
                      <app-icon name="arrow-right" [size]="15"></app-icon>
                    </button>
                  </div>

                </form>
              </div>

              <!-- Brief Prepared State -->
              <div *ngIf="submitted" class="space-y-6 animate-fadeIn">
                
                <div class="p-4 rounded-lg bg-[#263D36]/10 border border-[#263D36]/25 text-[#172B3A]">
                  <div class="flex items-center gap-2 text-[#263D36] font-heading font-bold text-sm mb-1">
                    <app-icon name="check-circle" [size]="17"></app-icon>
                    <span>Your Project Brief is Formatted & Ready</span>
                  </div>
                  <p class="text-xs text-[#68747A] leading-relaxed">
                    Rather than relying on silent backend forms that often get caught in spam folders, we generate a transparent project brief that you can send directly to our lead developer via WhatsApp or Email.
                  </p>
                </div>

                <!-- Live Brief Preview -->
                <div class="p-4 rounded-lg bg-[#FAF7F2] border border-[#172B3A]/15 font-mono text-xs text-[#172B3A] space-y-2 max-h-56 overflow-y-auto">
                  <div class="text-[#D97745] font-bold mb-1">=== AH DIGITAL SOLUTIONS // PROJECT SPECIFICATION ===</div>
                  <div><strong class="text-[#68747A]">Client:</strong> {{ contactForm.value.fullName }} ({{ contactForm.value.businessName }})</div>
                  <div><strong class="text-[#68747A]">Email:</strong> {{ contactForm.value.email }}</div>
                  <div><strong class="text-[#68747A]">Phone:</strong> {{ contactForm.value.phone }}</div>
                  <div><strong class="text-[#68747A]">Service:</strong> {{ contactForm.value.service }}</div>
                  <div><strong class="text-[#68747A]">Budget:</strong> {{ contactForm.value.budget }}</div>
                  <div class="pt-1"><strong class="text-[#68747A]">Scope:</strong> {{ contactForm.value.description }}</div>
                </div>

                <!-- Direct Send Options -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a 
                    [href]="getWhatsAppSubmissionUrl()" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="py-3 px-4 rounded-md bg-[#263D36] hover:bg-[#1A2B26] text-white font-heading font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-sm">
                    <app-icon name="whatsapp" [size]="15"></app-icon>
                    <span>Send via WhatsApp</span>
                  </a>

                  <a 
                    [href]="getEmailSubmissionUrl()"
                    class="py-3 px-4 rounded-md bg-[#172B3A] hover:bg-[#101E29] text-white font-heading font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-sm">
                    <app-icon name="mail" [size]="15"></app-icon>
                    <span>Send via Email</span>
                  </a>

                  <button 
                    type="button"
                    (click)="copyBrief()"
                    class="py-3 px-4 rounded-md bg-[#EBE5D8] hover:bg-[#DFD7C7] border border-[#172B3A]/20 text-[#172B3A] font-heading font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors">
                    <app-icon name="copy" [size]="15"></app-icon>
                    <span>{{ copiedText ? 'Copied to Clipboard!' : 'Copy Brief' }}</span>
                  </button>
                </div>

                <div class="pt-2 text-center">
                  <button 
                    type="button"
                    (click)="resetForm()"
                    class="text-xs text-[#68747A] hover:text-[#172B3A] underline font-heading">
                    Edit information or submit a different project
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  `
})
export class ContactComponent implements OnInit {
  private dataService = inject(AgencyDataService);
  private seoService = inject(SeoService);
  private fb = inject(FormBuilder);

  readonly contact = this.dataService.getContactInfo();

  contactForm: FormGroup;
  submitted: boolean = false;
  copiedText: boolean = false;

  constructor() {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      businessName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      service: ['Website Development', Validators.required],
      budget: ['Discuss Scope First'],
      description: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Contact Our Studio',
      description: 'Get in touch with AH Digital Solutions for website development, AI integrations, and automation services. We evaluate your requirements within 24 business hours.'
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitted = true;
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  resetForm(): void {
    this.submitted = false;
    this.copiedText = false;
  }

  getFormattedBrief(): string {
    const v = this.contactForm.value;
    return `PROJECT INQUIRY — AH DIGITAL SOLUTIONS
====================================
• Client: ${v.fullName}
• Business Name: ${v.businessName}
• Email: ${v.email}
• Phone / WhatsApp: ${v.phone}
• Requested Service: ${v.service}
• Budget Range: ${v.budget}

Project Scope:
${v.description}
====================================`;
  }

  getWhatsAppUrl(): string {
    const text = encodeURIComponent('Hello AH Digital Solutions, I would like to inquire about your digital studio services.');
    return `https://wa.me/${this.contact.whatsappNumber}?text=${text}`;
  }

  getWhatsAppSubmissionUrl(): string {
    const message = encodeURIComponent(this.getFormattedBrief());
    return `https://wa.me/${this.contact.whatsappNumber}?text=${message}`;
  }

  getEmailSubmissionUrl(): string {
    const subject = encodeURIComponent(`Project Brief: ${this.contactForm.value.businessName} - ${this.contactForm.value.service}`);
    const body = encodeURIComponent(this.getFormattedBrief());
    return `mailto:${this.contact.email}?subject=${subject}&body=${body}`;
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
