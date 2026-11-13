import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { AgencyDataService } from '../../core/services/agency-data.service';
import { QuoteModalService } from '../../core/services/quote-modal.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  template: `
    <div class="min-h-screen bg-[#F5F1E8] text-[#172B3A] pt-28 pb-20">
      
      <!-- Studio Header -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-left border-b border-[#172B3A]/10">
        <div class="max-w-3xl space-y-4">
          <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#D97745] bg-[#D97745]/10 px-3 py-1 rounded inline-block">
            About AH Digital Studio
          </span>
          <h1 class="font-serif text-4xl sm:text-5xl md:text-6xl text-[#172B3A] font-normal tracking-tight leading-tight">
            An Engineering-Led Digital Studio Dedicated to Pragmatic Growth.
          </h1>
          <p class="text-base sm:text-lg text-[#68747A] leading-relaxed">
            We combine modern web engineering with practical artificial intelligence to help small businesses, retailers, and entrepreneurs build a dependable digital foundation.
          </p>
        </div>
      </section>

      <!-- Mission & Vision (Editorial Duo) -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Mission -->
          <div class="p-8 sm:p-10 rounded-xl bg-white border border-[#172B3A]/15 shadow-studio-card space-y-4">
            <div class="flex items-center justify-between pb-4 border-b border-[#172B3A]/10">
              <span class="font-mono text-xs font-bold text-[#D97745]">01 // OUR MISSION</span>
              <div class="w-8 h-8 rounded bg-[#172B3A] text-[#F5F1E8] flex items-center justify-center">
                <app-icon name="target" [size]="16"></app-icon>
              </div>
            </div>
            <h2 class="font-serif text-2xl font-bold text-[#172B3A]">Clear Direction & No Technical Bloat</h2>
            <p class="text-sm text-[#68747A] leading-relaxed">
              To demystify modern technology for local and growing businesses. We build digital products that are fast, accessible, and genuinely useful—focusing strictly on what drives business value without unnecessary technical bloatware or inflated retainers.
            </p>
          </div>

          <!-- Vision -->
          <div class="p-8 sm:p-10 rounded-xl bg-white border border-[#172B3A]/15 shadow-studio-card space-y-4">
            <div class="flex items-center justify-between pb-4 border-b border-[#172B3A]/10">
              <span class="font-mono text-xs font-bold text-[#263D36]">02 // OUR VISION</span>
              <div class="w-8 h-8 rounded bg-[#263D36] text-[#F5F1E8] flex items-center justify-center">
                <app-icon name="trending-up" [size]="16"></app-icon>
              </div>
            </div>
            <h2 class="font-serif text-2xl font-bold text-[#172B3A]">The Trusted Digital Craft Partner</h2>
            <p class="text-sm text-[#68747A] leading-relaxed">
              To be the most trusted, dependable digital solutions studio for businesses that value craftsmanship, transparent communication, and engineering integrity.
            </p>
          </div>

        </div>
      </section>

      <!-- Operating Philosophy (The Studio Manifesto) -->
      <section class="py-20 bg-white border-y border-[#172B3A]/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="max-w-3xl mb-12 space-y-2">
            <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#D97745]">
              Operating Manifesto
            </span>
            <h3 class="font-serif text-3xl sm:text-4xl text-[#172B3A] font-normal">
              How We Approach Every Engineering Project
            </h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-7 rounded-xl bg-[#FAF7F2] border border-[#172B3A]/15 space-y-3">
              <span class="font-mono text-xs font-bold text-[#D97745] block">
                PRINCIPLE 01 // HONEST SCOPING
              </span>
              <h4 class="font-heading text-lg font-bold text-[#172B3A]">No Fluff or Overpromising</h4>
              <p class="text-xs text-[#68747A] leading-relaxed">
                We never fabricate past statistics, inflate team counts, or pitch costly infrastructure you do not need. We assess your exact situation and recommend the leanest, most effective solution.
              </p>
            </div>

            <div class="p-7 rounded-xl bg-[#FAF7F2] border border-[#172B3A]/15 space-y-3">
              <span class="font-mono text-xs font-bold text-[#172B3A] block">
                PRINCIPLE 02 // CLEAN CODEBASE
              </span>
              <h4 class="font-heading text-lg font-bold text-[#172B3A]">Enterprise Code Standards</h4>
              <p class="text-xs text-[#68747A] leading-relaxed">
                Every website and tool is structured following enterprise best practices using Angular, TypeScript, and clean semantic markup. You own your code completely with zero proprietary lock-in.
              </p>
            </div>

            <div class="p-7 rounded-xl bg-[#FAF7F2] border border-[#172B3A]/15 space-y-3">
              <span class="font-mono text-xs font-bold text-[#263D36] block">
                PRINCIPLE 03 // DIRECT COLLABORATION
              </span>
              <h4 class="font-heading text-lg font-bold text-[#172B3A]">Direct Access to the Builder</h4>
              <p class="text-xs text-[#68747A] leading-relaxed">
                No junior middlemen or account managers misunderstanding your needs. You communicate directly with technical engineers who write the software and understand your vision.
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- Technology Stack Showcase -->
      <section class="py-20 bg-[#FAF7F2] border-b border-[#172B3A]/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#D97745]">
              Production Technologies
            </span>
            <h3 class="font-serif text-3xl text-[#172B3A] font-normal">Our Core Engineering Stack</h3>
            <p class="text-xs text-[#68747A]">Battle-tested technologies that ensure performance, security, and longevity.</p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center font-mono">
            <div class="p-5 rounded-lg bg-white border border-[#172B3A]/15">
              <span class="text-sm font-bold text-[#172B3A] block">Angular 18+</span>
              <span class="text-[10px] text-[#D97745] block mt-1">Frontend Framework</span>
            </div>
            <div class="p-5 rounded-lg bg-white border border-[#172B3A]/15">
              <span class="text-sm font-bold text-[#172B3A] block">TypeScript</span>
              <span class="text-[10px] text-[#D97745] block mt-1">Type-Safe Logic</span>
            </div>
            <div class="p-5 rounded-lg bg-white border border-[#172B3A]/15">
              <span class="text-sm font-bold text-[#172B3A] block">Tailwind CSS</span>
              <span class="text-[10px] text-[#D97745] block mt-1">JIT Design Engine</span>
            </div>
            <div class="p-5 rounded-lg bg-white border border-[#172B3A]/15">
              <span class="text-sm font-bold text-[#172B3A] block">Python & FastAPI</span>
              <span class="text-[10px] text-[#D97745] block mt-1">Backend & AI Services</span>
            </div>
            <div class="p-5 rounded-lg bg-white border border-[#172B3A]/15">
              <span class="text-sm font-bold text-[#172B3A] block">PostgreSQL</span>
              <span class="text-[10px] text-[#D97745] block mt-1">Relational Database</span>
            </div>
            <div class="p-5 rounded-lg bg-white border border-[#172B3A]/15">
              <span class="text-sm font-bold text-[#172B3A] block">MediaPipe / CV</span>
              <span class="text-[10px] text-[#D97745] block mt-1">Computer Vision</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Founder & Technical Leadership Note -->
      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="rounded-xl bg-white border border-[#172B3A]/15 p-8 sm:p-12 shadow-studio-card">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-lg bg-[#172B3A] border-2 border-[#D97745] flex items-center justify-center text-[#F5F1E8] font-serif text-3xl font-bold shadow shrink-0">
              AH
            </div>
            <div class="space-y-3 text-left">
              <span class="font-mono text-xs uppercase font-bold tracking-wider text-[#D97745]">
                Founder & Lead Technologist
              </span>
              <h3 class="font-serif text-2xl sm:text-3xl font-bold text-[#172B3A]">
                Engineering-Led Digital Solutions
              </h3>
              <p class="text-sm text-[#68747A] leading-relaxed">
                "AH Digital Solutions was founded with a single principle: business owners deserve honest, high-quality digital craftsmanship without corporate bureaucracy. Whether designing a restaurant's ordering portal, a coaching institute's student system, or a startup's AI assistant, we approach each project with engineering discipline, personal responsibility, and deep respect for your business timeline."
              </p>
              <div class="pt-2 font-mono text-xs text-[#172B3A] font-semibold">
                📍 Based in India — Collaborating with forward-thinking businesses across regions.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom Studio CTA -->
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div class="p-8 sm:p-10 rounded-xl bg-[#172B3A] text-[#F5F1E8] space-y-5">
          <h3 class="font-serif text-2xl sm:text-3xl text-white font-normal">
            Have a Project in Mind?
          </h3>
          <p class="text-sm text-[#98A4AB] max-w-xl mx-auto">
            Let's discuss what you want to build and find the most practical, cost-effective way to make it happen.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button 
              (click)="openQuoteModal()"
              class="px-6 py-3 rounded-md bg-[#D97745] hover:bg-[#C46433] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-colors shadow">
              Request a Free Quote
            </button>
            <a 
              routerLink="/contact"
              class="px-6 py-3 rounded-md bg-[#1F374A] hover:bg-[#244057] border border-[#2C475C] text-[#F5F1E8] font-heading font-semibold text-xs tracking-wider uppercase transition-colors">
              Contact Our Studio
            </a>
          </div>
        </div>
      </section>

    </div>
  `
})
export class AboutComponent implements OnInit {
  private quoteModalService = inject(QuoteModalService);
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'About Our Studio',
      description: 'Learn about AH Digital Solutions: our mission, values, technology standards, and client-focused approach to building digital products.'
    });
  }

  openQuoteModal(): void {
    this.quoteModalService.openModal();
  }
}
