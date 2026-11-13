import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { AgencyDataService } from '../../core/services/agency-data.service';
import { QuoteModalService } from '../../core/services/quote-modal.service';
import { SeoService } from '../../core/services/seo.service';
import { ServiceItem, PricingPlan } from '../../core/models/agency.models';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, NgClass, RouterModule, IconComponent],
  template: `
    <div class="min-h-screen bg-[#F5F1E8] text-[#172B3A] pt-28 pb-24">
      
      <!-- Services Studio Header -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-left border-b border-[#172B3A]/10">
        <div class="max-w-3xl space-y-4">
          <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#D97745] bg-[#D97745]/10 px-3 py-1 rounded inline-block">
            Studio Capabilities & Deliverables
          </span>
          <h1 class="font-serif text-4xl sm:text-5xl md:text-6xl text-[#172B3A] font-normal tracking-tight leading-tight">
            Engineered Digital Services Tailored for Growth.
          </h1>
          <p class="text-base sm:text-lg text-[#68747A] leading-relaxed">
            Explore our complete service offerings—from fast, conversion-focused websites to intelligent AI assistants and automated business workflows.
          </p>
        </div>

        <!-- Jump Navigation Links (Studio Catalog Style) -->
        <div class="flex flex-wrap items-center gap-3 pt-8">
          <a 
            *ngFor="let s of services; let sIdx = index"
            [href]="'#' + s.slug"
            class="px-4 py-2 rounded-md bg-white hover:bg-[#172B3A] text-[#172B3A] hover:text-[#F5F1E8] border border-[#172B3A]/15 font-heading text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm">
            <span class="font-mono text-[#D97745]">0{{ sIdx + 1 }}</span>
            <span>{{ s.title }}</span>
          </a>
        </div>
      </section>

      <!-- Detailed Service Catalog Sections -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-12">
        
        <div 
          *ngFor="let service of services; let i = index" 
          [id]="service.slug"
          class="scroll-mt-32 rounded-xl bg-white border border-[#172B3A]/15 p-8 sm:p-12 shadow-studio-card transition-all duration-300">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <!-- Left Info Column -->
            <div class="lg:col-span-7 space-y-6">
              
              <div class="flex items-center gap-3.5 pb-4 border-b border-[#172B3A]/10">
                <div class="w-12 h-12 rounded-lg bg-[#172B3A] text-[#F5F1E8] flex items-center justify-center">
                  <app-icon [name]="service.icon" [size]="24"></app-icon>
                </div>
                <div>
                  <span class="font-mono text-xs font-bold text-[#D97745] block">
                    SERVICE 0{{ i + 1 }} // {{ service.badge || 'ENGINEERED SOLUTION' }}
                  </span>
                  <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#172B3A]">
                    {{ service.title }}
                  </h2>
                </div>
              </div>

              <p class="text-sm sm:text-base text-[#68747A] leading-relaxed">
                {{ service.fullDescription }}
              </p>

              <!-- Scope Items -->
              <div class="space-y-3 pt-2">
                <h4 class="font-heading text-xs font-bold uppercase tracking-wider text-[#172B3A]">
                  What We Build Under This Service:
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div 
                    *ngFor="let item of service.subServices" 
                    class="p-3 rounded-md bg-[#FAF7F2] border border-[#172B3A]/10 text-xs font-heading font-medium text-[#172B3A] flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#D97745]"></span>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>

              <!-- CTAs -->
              <div class="pt-4 flex flex-wrap items-center gap-4">
                <button 
                  (click)="openQuoteForService(service.id)"
                  class="px-6 py-3 rounded-md bg-[#D97745] hover:bg-[#C46433] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm flex items-center gap-2">
                  <span>Request Quotation for {{ service.title }}</span>
                  <app-icon name="arrow-right" [size]="14"></app-icon>
                </button>

                <a 
                  routerLink="/contact"
                  class="px-5 py-3 rounded-md bg-[#FAF7F2] hover:bg-white text-[#172B3A] font-heading font-semibold text-xs tracking-wider uppercase border border-[#172B3A]/20 transition-colors">
                  Ask a Question
                </a>
              </div>

            </div>

            <!-- Right Deliverables & Benefits Panels -->
            <div class="lg:col-span-5 space-y-6">
              
              <!-- Benefits Box (Forest Green Accent) -->
              <div class="p-6 rounded-lg bg-[#FAF7F2] border border-[#172B3A]/10 space-y-4">
                <div class="flex items-center gap-2 text-[#263D36] font-heading font-bold text-xs uppercase tracking-wider">
                  <app-icon name="check-circle" [size]="16"></app-icon>
                  <span>Key Business Benefits</span>
                </div>
                <ul class="space-y-2.5 text-xs text-[#68747A]">
                  <li *ngFor="let benefit of service.benefits" class="flex items-start gap-2.5">
                    <app-icon name="check" [size]="14" cssClass="text-[#263D36] mt-0.5 shrink-0"></app-icon>
                    <span>{{ benefit }}</span>
                  </li>
                </ul>
              </div>

              <!-- Deliverables Box (Deep Navy Accent) -->
              <div class="p-6 rounded-lg bg-[#FAF7F2] border border-[#172B3A]/10 space-y-4">
                <div class="flex items-center gap-2 text-[#D97745] font-heading font-bold text-xs uppercase tracking-wider">
                  <app-icon name="target" [size]="16"></app-icon>
                  <span>Concrete Deliverables</span>
                </div>
                <ul class="space-y-2.5 text-xs text-[#68747A]">
                  <li *ngFor="let item of service.deliverables" class="flex items-start gap-2.5">
                    <app-icon name="arrow-right" [size]="14" cssClass="text-[#D97745] mt-0.5 shrink-0"></app-icon>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </section>

      <!-- ============================================================ -->
      <!-- PRICING SECTION -->
      <!-- ============================================================ -->
      <section id="pricing" class="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 pb-8 border-b border-[#172B3A]/10">
          <div class="max-w-2xl space-y-3">
            <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#D97745] bg-[#D97745]/10 px-3 py-1 rounded inline-block">
              Transparent Pricing
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#172B3A] font-normal tracking-tight leading-tight">
              Introductory Prices Built for<br class="hidden md:block"> Growing Businesses.
            </h2>
            <p class="text-sm text-[#68747A] leading-relaxed max-w-xl">
              Affordable starting rates designed for small businesses, startups, bakeries, coaching institutes and local shops. No hidden fees, no inflated quotes.
            </p>
          </div>
          <a
            routerLink="/contact"
            class="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-[#D97745] hover:text-[#C46433] transition-colors pb-1 border-b border-[#D97745] whitespace-nowrap self-start md:self-auto">
            <span>Get a Custom Quote</span>
            <app-icon name="arrow-right" [size]="14"></app-icon>
          </a>
        </div>

        <!-- Pricing Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div
            *ngFor="let plan of pricingPlans"
            class="relative bg-white rounded-xl border border-[#172B3A]/15 p-7 shadow-sm flex flex-col transition-all duration-300 hover:shadow-md hover:border-[#172B3A]/30"
            [class.ring-2]="plan.isFeatured"
            [class.ring-orange-400]="plan.isFeatured">

            <!-- Featured Badge -->
            <div *ngIf="plan.isFeatured" class="absolute -top-3 left-6">
              <span class="font-mono text-[10px] font-bold uppercase tracking-wider bg-[#D97745] text-white px-3 py-1 rounded-full shadow">
                Most Popular
              </span>
            </div>

            <!-- Plan Header -->
            <div class="pb-5 mb-5 border-b border-[#172B3A]/10">
              <h3 class="font-heading text-lg font-bold text-[#172B3A] mb-3">{{ plan.title }}</h3>
              <div class="flex items-baseline gap-1.5 flex-wrap">
                <span class="font-heading text-2xl sm:text-3xl font-extrabold text-[#172B3A]">{{ plan.priceRange }}</span>
                <span *ngIf="plan.priceUnit" class="font-mono text-xs text-[#68747A] font-semibold">{{ plan.priceUnit }}</span>
              </div>
              <p class="text-xs text-[#68747A] leading-relaxed mt-3">{{ plan.description }}</p>
            </div>

            <!-- Highlights -->
            <ul class="space-y-2.5 mb-7 flex-1">
              <li *ngFor="let highlight of plan.highlights" class="flex items-start gap-2.5 text-xs text-[#172B3A]">
                <app-icon name="check" [size]="14" cssClass="text-[#263D36] mt-0.5 shrink-0"></app-icon>
                <span>{{ highlight }}</span>
              </li>
            </ul>

            <!-- CTA -->
            <button
              (click)="openGeneralQuote()"
              [ngClass]="plan.isFeatured
                ? 'bg-[#D97745] hover:bg-[#C46433] text-white'
                : 'bg-[#FAF7F2] hover:bg-[#172B3A] text-[#172B3A] hover:text-white border border-[#172B3A]/20'"
              class="w-full py-3 rounded-md font-heading font-semibold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2">
              <span>{{ plan.ctaLabel }}</span>
              <app-icon name="arrow-right" [size]="13"></app-icon>
            </button>

          </div>
        </div>

        <!-- Professional Pricing Note -->
        <div class="max-w-3xl mx-auto text-center px-4 pt-10 pb-8 border-t border-[#172B3A]/10">
          <p class="text-xs sm:text-[13px] text-[#68747A] leading-relaxed">
            <span class="font-heading font-semibold text-[#172B3A]">Note:</span> All prices are indicative and negotiable based on project requirements, estimated development effort, features and overall project complexity. We offer flexible pricing to suit your business needs. Contact us for a personalized quotation.
          </p>
        </div>

        <!-- Get a Custom Quote Action -->
        <div class="text-center pb-4">
          <button
            (click)="openGeneralQuote()"
            class="px-8 py-3.5 rounded-md bg-[#D97745] hover:bg-[#C46433] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm active:translate-y-0.5 inline-flex items-center gap-2">
            <span>Get a Custom Quote</span>
            <app-icon name="arrow-right" [size]="14"></app-icon>
          </button>
        </div>

      </section>

      <!-- Bottom Custom Combination Banner -->
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">        <div class="p-8 sm:p-10 rounded-xl bg-[#172B3A] text-[#F5F1E8] space-y-4">
          <h3 class="font-serif text-2xl sm:text-3xl font-normal text-white">
            Need a Custom Combination or Specialized Tool?
          </h3>
          <p class="text-sm text-[#98A4AB] max-w-xl mx-auto">
            Many projects require a combination—such as a modern business website with an integrated WhatsApp order router and an AI FAQ assistant. We customize solutions to match your exact business workflow.
          </p>
          <div class="pt-2">
            <button 
              (click)="openGeneralQuote()"
              class="px-7 py-3.5 rounded-md bg-[#D97745] hover:bg-[#C46433] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-colors shadow inline-flex items-center gap-2">
              <span>Get a Custom Quotation</span>
              <app-icon name="arrow-right" [size]="15"></app-icon>
            </button>
          </div>
        </div>
      </section>

    </div>
  `
})
export class ServicesComponent implements OnInit {
  private dataService = inject(AgencyDataService);
  private quoteModalService = inject(QuoteModalService);
  private seoService = inject(SeoService);
  private route = inject(ActivatedRoute);

  readonly services: ServiceItem[] = this.dataService.getServices();
  readonly pricingPlans: PricingPlan[] = this.dataService.getPricingPlans();

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Our Capabilities & Services',
      description: 'Explore website development, custom AI tools, business workflow automation, and UI/UX design services by AH Digital Solutions.'
    });

    this.route.fragment.subscribe(fragment => {
      if (fragment && typeof document !== 'undefined') {
        setTimeout(() => {
          const el = document.getElementById(fragment);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    });
  }

  openQuoteForService(serviceId: string): void {
    this.quoteModalService.openModal(serviceId);
  }

  openGeneralQuote(): void {
    this.quoteModalService.openModal();
  }
}
