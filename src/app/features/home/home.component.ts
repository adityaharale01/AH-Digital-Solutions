import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { HeroVisualComponent } from './components/hero-visual/hero-visual.component';
import { AgencyDataService } from '../../core/services/agency-data.service';
import { QuoteModalService } from '../../core/services/quote-modal.service';
import { SeoService } from '../../core/services/seo.service';
import { ServiceItem, ProjectItem, FaqItem, PricingPlan } from '../../core/models/agency.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent, HeroVisualComponent],
  template: `
    <div class="min-h-screen text-[#172B3A] bg-[#F5F1E8]">
      
      <!-- ========================================================================= -->
      <!-- 1. HERO SECTION (Editorial Studio Aesthetic with Warm Ivory & Deep Navy) -->
      <!-- ========================================================================= -->
      <section class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden studio-grid-subtle border-b border-[#172B3A]/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <!-- Left Editorial Headline & Narrative -->
            <div class="lg:col-span-7 space-y-6 text-left">
              
              <!-- Studio Stamp / Subtitle -->
              <div class="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-[#172B3A] text-[#F5F1E8] font-mono text-xs font-semibold tracking-wider uppercase">
                <span class="w-1.5 h-1.5 rounded-full bg-[#D97745]"></span>
                <span>AH Digital Studio // India</span>
              </div>

              <!-- Main Headline with DM Serif Display + Manrope Editorial Contrast -->
              <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#172B3A] tracking-tight leading-[1.12]">
                We Build Digital Experiences That 
                <span class="font-serif italic font-normal text-[#D97745] block sm:inline">
                  Grow Your Business.
                </span>
              </h1>

              <!-- Supporting Text -->
              <p class="text-base sm:text-lg text-[#68747A] max-w-2xl font-normal leading-relaxed">
                From professional websites to intelligent AI solutions, we help businesses simplify operations, strengthen their digital presence and grow with technology.
              </p>

              <!-- CTA Row -->
              <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button 
                  (click)="openQuoteModal()"
                  class="px-7 py-3.5 rounded-md bg-[#D97745] hover:bg-[#C46433] text-white font-heading font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-sm active:translate-y-0.5 flex items-center justify-center gap-2.5">
                  <span>Let's Discuss Your Project</span>
                  <app-icon name="arrow-right" [size]="16"></app-icon>
                </button>

                <a 
                  routerLink="/services"
                  class="px-7 py-3.5 rounded-md bg-[#FAF7F2] hover:bg-white border border-[#172B3A]/20 text-[#172B3A] font-heading font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2">
                  <span>Explore Capabilities</span>
                  <app-icon name="arrow-right" [size]="16" cssClass="text-[#68747A]"></app-icon>
                </a>
              </div>

              <!-- Editorial Assurance Rules -->
              <div class="pt-6 border-t border-[#172B3A]/10 flex flex-wrap items-center gap-y-2 gap-x-6 font-mono text-[11px] text-[#68747A]">
                <span class="flex items-center gap-1.5">
                  <span class="font-bold text-[#D97745]">[01]</span>
                  <span>Customer-Focused Approach</span>
                </span>
                <span class="flex items-center gap-1.5">
                  <span class="font-bold text-[#D97745]">[02]</span>
                  <span>Clean Angular Architecture</span>
                </span>
                <span class="flex items-center gap-1.5">
                  <span class="font-bold text-[#D97745]">[03]</span>
                  <span>Mobile-First Engineering</span>
                </span>
              </div>

            </div>

            <!-- Right: Studio Visual Workbench -->
            <div class="lg:col-span-5">
              <app-hero-visual></app-hero-visual>
            </div>

          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 2. TRUST & VALUE SECTION (Target Customers & Practical Solutions) -->
      <!-- ========================================================================= -->
      <section class="py-20 bg-white border-b border-[#172B3A]/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div class="max-w-2xl">
              <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#D97745] block mb-2">
                Who We Build For
              </span>
              <h2 class="font-serif text-3xl sm:text-4xl text-[#172B3A] font-normal tracking-tight">
                Tailored Digital Solutions for Growing Enterprises
              </h2>
            </div>
            <p class="text-sm text-[#68747A] max-w-md leading-relaxed">
              We design and engineer practical technology for businesses that require genuine results, clear communication, and reliable software.
            </p>
          </div>

          <!-- Asymmetrical Industry Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              *ngFor="let item of targetIndustries; let idx = index" 
              class="p-7 rounded-xl bg-[#FAF7F2] border border-[#172B3A]/15 hover:border-[#172B3A] transition-all duration-300 flex flex-col justify-between group">
              
              <div>
                <div class="flex items-center justify-between mb-5">
                  <div class="w-11 h-11 rounded-lg bg-[#172B3A] text-[#F5F1E8] flex items-center justify-center group-hover:bg-[#D97745] transition-colors">
                    <app-icon [name]="item.icon" [size]="20"></app-icon>
                  </div>
                  <span class="font-mono text-xs font-bold text-[#68747A]">
                    #0{{ idx + 1 }}
                  </span>
                </div>

                <h3 class="font-heading text-lg font-bold text-[#172B3A] mb-2">
                  {{ item.title }}
                </h3>
                <p class="text-xs text-[#68747A] leading-relaxed mb-6">
                  {{ item.subtitle }}
                </p>
              </div>

              <!-- Example Badges -->
              <div class="flex flex-wrap gap-1.5 pt-3 border-t border-[#172B3A]/10">
                <span 
                  *ngFor="let ex of item.examples" 
                  class="font-mono text-[10px] px-2 py-0.5 rounded bg-white text-[#172B3A] border border-[#172B3A]/10">
                  {{ ex }}
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 3. SERVICES DIRECTORY (Editorial Catalog Layout) -->
      <!-- ========================================================================= -->
      <section id="services-overview" class="py-24 bg-[#F5F1E8] border-b border-[#172B3A]/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div class="max-w-2xl space-y-2">
              <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#D97745]">
                Studio Capabilities
              </span>
              <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#172B3A] font-normal tracking-tight">
                Comprehensive Digital Services Engineered for Real Growth
              </h2>
            </div>

            <a 
              routerLink="/services" 
              class="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-[#D97745] hover:text-[#C46433] transition-colors pb-1 border-b border-[#D97745]">
              <span>View Full Deliverables Catalog</span>
              <app-icon name="arrow-right" [size]="14"></app-icon>
            </a>
          </div>

          <!-- Staggered Services Grid (Asymmetrical Layout) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              *ngFor="let service of services; let i = index" 
              class="bg-white rounded-xl p-8 border border-[#172B3A]/15 shadow-studio-card hover:shadow-studio-hover transition-all duration-300 flex flex-col justify-between">
              
              <div>
                <div class="flex items-center justify-between pb-4 mb-6 border-b border-[#172B3A]/10">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-md bg-[#172B3A] text-[#F5F1E8] flex items-center justify-center">
                      <app-icon [name]="service.icon" [size]="20"></app-icon>
                    </div>
                    <span class="font-mono text-xs font-bold text-[#D97745]">
                      CAPABILITY 0{{ i + 1 }}
                    </span>
                  </div>

                  <span *ngIf="service.badge" class="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#FAF7F2] text-[#172B3A] border border-[#172B3A]/10">
                    {{ service.badge }}
                  </span>
                </div>

                <h3 class="font-heading text-2xl font-bold text-[#172B3A] mb-3">
                  {{ service.title }}
                </h3>
                
                <p class="text-sm text-[#68747A] leading-relaxed mb-6">
                  {{ service.shortDescription }}
                </p>

                <!-- Sub-services / Scope items -->
                <div class="space-y-2 mb-8 bg-[#FAF7F2] p-4 rounded-lg border border-[#172B3A]/10">
                  <div 
                    *ngFor="let sub of service.subServices.slice(0, 3)" 
                    class="flex items-start gap-2.5 text-xs text-[#172B3A]">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#D97745] mt-1.5 shrink-0"></span>
                    <span>{{ sub }}</span>
                  </div>
                </div>
              </div>

              <!-- Card Action Bar -->
              <div class="pt-5 border-t border-[#172B3A]/10 flex items-center justify-between">
                <a 
                  [routerLink]="['/services']" 
                  [fragment]="service.slug"
                  class="font-heading text-xs font-bold text-[#172B3A] hover:text-[#D97745] flex items-center gap-1.5 transition-colors">
                  <span>Detailed Specifications</span>
                  <app-icon name="arrow-right" [size]="13"></app-icon>
                </a>

                <button 
                  (click)="openQuoteModal(service.id)"
                  class="px-4 py-2 rounded-md bg-[#172B3A] hover:bg-[#101E29] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-colors">
                  Get Quote
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 4. WHY CHOOSE US (The AH Digital Studio Standard) -->
      <!-- ========================================================================= -->
      <section class="py-24 bg-[#172B3A] text-[#F5F1E8] relative overflow-hidden">
        <div class="absolute inset-0 studio-dark-grid opacity-30 pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#D97745]">
              The Studio Standard
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white">
              Why Businesses Choose AH Digital Solutions
            </h2>
            <p class="text-sm text-[#98A4AB] leading-relaxed">
              We stand apart through genuine software engineering discipline, honest project scoping, and transparent communication from initial discovery to handover.
            </p>
          </div>

          <!-- 6 Editorial Principle Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              *ngFor="let pillar of whyChooseUs; let pIdx = index" 
              class="p-7 rounded-xl bg-[#1F374A] border border-[#2C475C] hover:border-[#D97745] transition-all duration-300">
              
              <div class="flex items-center justify-between mb-4">
                <div class="w-10 h-10 rounded-md bg-[#101E29] text-[#D97745] flex items-center justify-center">
                  <app-icon [name]="pillar.icon" [size]="20"></app-icon>
                </div>
                <span class="font-mono text-xs text-[#98A4AB]">
                  PRINCIPLE 0{{ pIdx + 1 }}
                </span>
              </div>

              <h3 class="font-heading text-lg font-bold text-white mb-2.5">
                {{ pillar.title }}
              </h3>
              
              <p class="text-xs text-[#98A4AB] leading-relaxed">
                {{ pillar.description }}
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 4b. PRICING OVERVIEW SECTION -->
      <!-- ========================================================================= -->
      <section class="py-20 bg-[#F5F1E8] border-b border-[#172B3A]/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div class="max-w-2xl space-y-3">
              <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#D97745] block">
                Transparent Pricing
              </span>
              <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#172B3A] font-normal tracking-tight">
                Affordable Rates for Every Stage of Growth.
              </h2>
              <p class="text-sm text-[#68747A] leading-relaxed">
                Starting prices designed for small businesses, startups and local shops. No inflated quotes, no hidden fees.
              </p>
            </div>
            <a
              routerLink="/services"
              fragment="pricing"
              class="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-[#D97745] hover:text-[#C46433] transition-colors pb-1 border-b border-[#D97745] whitespace-nowrap self-start md:self-auto">
              <span>See All Plans</span>
              <app-icon name="arrow-right" [size]="14"></app-icon>
            </a>
          </div>

          <!-- Compact Pricing Table -->
          <div class="bg-white rounded-xl border border-[#172B3A]/15 shadow-sm overflow-hidden">
            <div *ngFor="let plan of pricingPlans; let i = index; let last = last"
              [class.border-b]="!last"
              class="border-[#172B3A]/10 px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF7F2] transition-colors">

              <div class="flex items-start sm:items-center gap-4">
                <span class="font-mono text-xs font-bold text-[#D97745] w-7 shrink-0">0{{ i + 1 }}</span>
                <div>
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="font-heading text-sm font-bold text-[#172B3A]">{{ plan.title }}</span>
                    <span *ngIf="plan.isFeatured" class="font-mono text-[9px] font-bold uppercase tracking-wider bg-[#D97745]/15 text-[#D97745] px-2 py-0.5 rounded">
                      Popular
                    </span>
                  </div>
                  <span class="text-xs text-[#68747A]">{{ plan.description.split('.')[0] }}.</span>
                </div>
              </div>

              <div class="flex items-center gap-6 pl-11 sm:pl-0">
                <div class="text-right">
                  <div class="font-heading text-base font-extrabold text-[#172B3A] whitespace-nowrap">{{ plan.priceRange }}</div>
                  <div *ngIf="plan.priceUnit" class="font-mono text-[10px] text-[#68747A]">{{ plan.priceUnit }}</div>
                </div>
                <button
                  (click)="openQuoteModal()"
                  class="shrink-0 px-4 py-2 rounded-md bg-[#172B3A] hover:bg-[#101E29] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-colors">
                  Quote
                </button>
              </div>
            </div>
          </div>

          <!-- Professional Pricing Note -->
          <div class="max-w-3xl mx-auto text-center px-4 mt-8 mb-6">
            <p class="text-xs sm:text-[13px] text-[#68747A] leading-relaxed">
              <span class="font-heading font-semibold text-[#172B3A]">Note:</span> All prices are indicative and negotiable based on project requirements, estimated development effort, features and overall project complexity. We offer flexible pricing to suit your business needs. Contact us for a personalized quotation.
            </p>
          </div>

          <!-- Get a Custom Quote Action -->
          <div class="text-center">
            <button
              (click)="openQuoteModal()"
              class="px-8 py-3.5 rounded-md bg-[#D97745] hover:bg-[#C46433] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm active:translate-y-0.5 inline-flex items-center gap-2">
              <span>Get a Custom Quote</span>
              <app-icon name="arrow-right" [size]="14"></app-icon>
            </button>
          </div>

        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 5. FEATURED PROJECTS (Verified Real Engineering Demonstrations) -->
      <!-- ========================================================================= -->      <section class="py-24 bg-white border-b border-[#172B3A]/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div class="max-w-2xl space-y-2">
              <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#263D36] bg-[#263D36]/10 px-2.5 py-1 rounded">
                Verified Technical Case Studies
              </span>
              <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#172B3A] font-normal tracking-tight">
                Selected Engineering Work
              </h2>
              <p class="text-sm text-[#68747A] leading-relaxed">
                Explore our actual technology projects demonstrating full-stack architecture, machine learning models, and computer vision systems.
              </p>
            </div>

            <a 
              routerLink="/portfolio" 
              class="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-[#172B3A] hover:text-[#D97745] transition-colors pb-1 border-b border-[#172B3A]">
              <span>View All Technical Blueprints</span>
              <app-icon name="arrow-right" [size]="14"></app-icon>
            </a>
          </div>

          <!-- Bespoke Case Study Cards -->
          <div class="space-y-12">
            <div 
              *ngFor="let project of featuredProjects; let i = index" 
              class="rounded-xl bg-[#FAF7F2] border border-[#172B3A]/15 overflow-hidden p-7 sm:p-10 shadow-studio-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <!-- Left Project Narrative -->
              <div class="lg:col-span-7 space-y-5">
                <div class="flex items-center gap-3">
                  <span class="font-mono text-xs font-bold px-3 py-1 rounded bg-[#172B3A] text-[#F5F1E8]">
                    {{ project.categoryLabel }}
                  </span>
                  <span class="font-mono text-xs text-[#263D36] font-semibold">
                    ✓ Verified Working Prototype
                  </span>
                </div>

                <h3 class="font-serif text-2xl sm:text-3xl text-[#172B3A] font-bold">
                  {{ project.title }}
                </h3>

                <div class="space-y-3 font-sans">
                  <div class="p-4 rounded-lg bg-white border border-[#172B3A]/10">
                    <h4 class="font-heading text-xs font-bold uppercase tracking-wider text-[#D97745] mb-1">Problem Addressed:</h4>
                    <p class="text-xs sm:text-sm text-[#68747A] leading-relaxed">{{ project.problem }}</p>
                  </div>
                  
                  <div class="p-4 rounded-lg bg-white border border-[#172B3A]/10">
                    <h4 class="font-heading text-xs font-bold uppercase tracking-wider text-[#263D36] mb-1">Engineering Solution:</h4>
                    <p class="text-xs sm:text-sm text-[#68747A] leading-relaxed">{{ project.solution }}</p>
                  </div>
                </div>

                <!-- Tech Badges -->
                <div>
                  <h4 class="font-heading text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-2">Technologies Deployed:</h4>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      *ngFor="let tech of project.technologies" 
                      class="font-mono text-xs px-3 py-1 rounded bg-white border border-[#172B3A]/15 text-[#172B3A]">
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <div class="pt-2 flex flex-wrap items-center gap-4">
                  <a 
                    routerLink="/portfolio"
                    class="px-5 py-2.5 rounded-md bg-[#D97745] hover:bg-[#C46433] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-colors flex items-center gap-2">
                    <span>Inspect Case Study</span>
                    <app-icon name="arrow-right" [size]="14"></app-icon>
                  </a>
                  
                  <span class="text-[11px] text-[#68747A] italic font-mono">
                    {{ project.demoNote }}
                  </span>
                </div>

              </div>

              <!-- Right Architectural Blueprint Card -->
              <div class="lg:col-span-5">
                <div class="rounded-lg bg-[#172B3A] border border-[#2C475C] p-6 text-[#F5F1E8] space-y-4">
                  <div class="flex items-center justify-between pb-3 border-b border-[#2C475C] font-mono text-xs">
                    <span class="text-[#98A4AB]">Blueprint Specs</span>
                    <span class="text-[#D97745] font-bold">{{ project.technologies[0] }} Core</span>
                  </div>

                  <p class="font-serif italic text-xs text-[#F5F1E8]">
                    "{{ project.visualMockup.tagline }}"
                  </p>

                  <div class="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div 
                      *ngFor="let item of project.visualMockup.statsOrLabels" 
                      class="p-2.5 rounded bg-[#101E29] border border-[#2C475C]">
                      <span class="text-[10px] text-[#98A4AB] block">{{ item.label }}</span>
                      <span class="text-xs font-bold text-white block mt-0.5 truncate">{{ item.value }}</span>
                    </div>
                  </div>

                  <div class="space-y-1.5 pt-2 border-t border-[#2C475C]">
                    <div 
                      *ngFor="let point of project.visualMockup.architecturePoints.slice(0, 3)" 
                      class="flex items-center gap-2 text-[11px] text-[#98A4AB]">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#D97745]"></span>
                      <span>{{ point }}</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 6. OUR PROCESS (Transparent 6-Step Delivery Roadmap) -->
      <!-- ========================================================================= -->
      <section class="py-24 bg-[#FAF7F2] border-b border-[#172B3A]/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#D97745]">
              Project Methodology
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#172B3A] font-normal tracking-tight">
              How We Turn Ideas Into Digital Growth
            </h2>
            <p class="text-sm text-[#68747A] leading-relaxed">
              Our 6-step project delivery methodology ensures transparency, predictable delivery, and exceptional craftsmanship every step of the way.
            </p>
          </div>

          <!-- Process Steps Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              *ngFor="let step of processSteps" 
              class="bg-white rounded-xl p-8 border border-[#172B3A]/15 shadow-studio-card flex flex-col justify-between">
              
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="font-serif text-3xl font-bold text-[#D97745]">{{ step.step }}</span>
                  <span class="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#FAF7F2] text-[#172B3A] border border-[#172B3A]/10">
                    Phase {{ step.step }}
                  </span>
                </div>

                <h3 class="font-heading text-lg font-bold text-[#172B3A] mb-2">{{ step.title }}</h3>
                <p class="text-xs text-[#68747A] leading-relaxed mb-6">{{ step.description }}</p>
              </div>

              <div class="pt-4 border-t border-[#172B3A]/10">
                <span class="font-mono text-[10px] uppercase font-bold text-[#68747A] block mb-1">Key Deliverable:</span>
                <span class="font-heading text-xs font-semibold text-[#172B3A]">{{ step.deliverables }}</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 7. FAQ SECTION (Accordion with Warm Ivory Background) -->
      <!-- ========================================================================= -->
      <section class="py-24 bg-white border-b border-[#172B3A]/10">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="text-center mb-16 space-y-3">
            <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#D97745]">
              Direct Clarifications
            </span>
            <h2 class="font-serif text-3xl sm:text-4xl text-[#172B3A] font-normal tracking-tight">
              Frequently Asked Questions
            </h2>
            <p class="text-sm text-[#68747A]">
              Transparent details on our process, technical standards, project timelines, and engagement model.
            </p>
          </div>

          <!-- Accordion -->
          <div class="space-y-4">
            <div 
              *ngFor="let faq of faqs; let i = index" 
              class="rounded-xl bg-[#FAF7F2] border border-[#172B3A]/15 overflow-hidden transition-all duration-200">
              
              <button 
                type="button"
                (click)="toggleFaq(i)"
                class="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-white transition-colors">
                <span class="font-heading text-sm sm:text-base font-semibold text-[#172B3A]">{{ faq.question }}</span>
                <app-icon 
                  [name]="openFaqIndex() === i ? 'chevron-up' : 'chevron-down'" 
                  [size]="18" 
                  cssClass="text-[#D97745] shrink-0">
                </app-icon>
              </button>

              <div 
                *ngIf="openFaqIndex() === i" 
                class="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#68747A] leading-relaxed border-t border-[#172B3A]/10 bg-white animate-fadeIn">
                {{ faq.answer }}
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 8. HIGH-IMPACT STUDIO CONTACT CTA BANNER -->
      <!-- ========================================================================= -->
      <section class="py-20 bg-[#172B3A] text-[#F5F1E8] relative overflow-hidden">
        <div class="absolute inset-0 studio-dark-grid opacity-20 pointer-events-none"></div>

        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#D97745] bg-[#D97745]/15 px-3 py-1 rounded inline-block">
            Start Your Project With AH Digital
          </span>

          <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-tight">
            Let's Build Something Exceptional Together.
          </h2>

          <p class="text-base sm:text-lg text-[#98A4AB] max-w-2xl mx-auto leading-relaxed">
            Whether you need a brand-new website, an e-commerce catalog, or custom AI automation, share your vision with our engineering team today.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              (click)="openQuoteModal()"
              class="w-full sm:w-auto px-8 py-4 rounded-md bg-[#D97745] hover:bg-[#C46433] text-white font-heading font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-sm active:translate-y-0.5 flex items-center justify-center gap-2">
              <span>Request a Project Quotation</span>
              <app-icon name="arrow-right" [size]="16"></app-icon>
            </button>

            <a 
              routerLink="/contact"
              class="w-full sm:w-auto px-8 py-4 rounded-md bg-[#1F374A] hover:bg-[#244057] border border-[#2C475C] text-white font-heading font-semibold text-xs sm:text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2">
              <span>Contact Our Studio Directly</span>
              <app-icon name="mail" [size]="16"></app-icon>
            </a>
          </div>

          <p class="font-mono text-xs text-[#98A4AB] pt-2">
            {{ contact.responseExpectation }}
          </p>
        </div>
      </section>

    </div>
  `
})
export class HomeComponent implements OnInit {
  private dataService = inject(AgencyDataService);
  private quoteModalService = inject(QuoteModalService);
  private seoService = inject(SeoService);

  readonly targetIndustries = this.dataService.getTargetIndustries();
  readonly services: ServiceItem[] = this.dataService.getServices();
  readonly whyChooseUs = this.dataService.getWhyChooseUs();
  readonly featuredProjects: ProjectItem[] = this.dataService.getFeaturedProjects();
  readonly processSteps = this.dataService.getProcessSteps();
  readonly faqs: FaqItem[] = this.dataService.getFaqs();
  readonly contact = this.dataService.getContactInfo();
  readonly pricingPlans: PricingPlan[] = this.dataService.getPricingPlans();

  readonly openFaqIndex = signal<number | null>(0);

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Turning Ideas Into Digital Growth',
      description: 'AH Digital Solutions develops high-performance websites, practical AI tools, and workflow automations for growing businesses in India.'
    });
  }

  toggleFaq(index: number): void {
    if (this.openFaqIndex() === index) {
      this.openFaqIndex.set(null);
    } else {
      this.openFaqIndex.set(index);
    }
  }

  openQuoteModal(serviceId?: string): void {
    this.quoteModalService.openModal(serviceId);
  }
}
