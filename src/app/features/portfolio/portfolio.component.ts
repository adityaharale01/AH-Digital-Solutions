import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { AgencyDataService } from '../../core/services/agency-data.service';
import { QuoteModalService } from '../../core/services/quote-modal.service';
import { SeoService } from '../../core/services/seo.service';
import { ProjectItem } from '../../core/models/agency.models';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  template: `
    <div class="min-h-screen bg-[#F5F1E8] text-[#172B3A] pt-28 pb-24">
      
      <!-- Portfolio Studio Header -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-left border-b border-[#172B3A]/10">
        <div class="max-w-3xl space-y-4">
          <span class="font-mono text-xs font-bold uppercase tracking-widest text-[#263D36] bg-[#263D36]/10 px-3 py-1 rounded inline-block">
            Verified Engineering Case Studies
          </span>
          <h1 class="font-serif text-4xl sm:text-5xl md:text-6xl text-[#172B3A] font-normal tracking-tight leading-tight">
            Real Projects. Verified Architecture.
          </h1>
          <p class="text-base sm:text-lg text-[#68747A] leading-relaxed">
            We showcase real technology prototypes and full-stack systems built with modern engineering standards. No fabricated metrics or exaggerated client counts.
          </p>
        </div>

        <!-- Category Filter Tabs (Editorial Architectural Buttons) -->
        <div class="flex flex-wrap items-center gap-3 pt-8">
          <button 
            type="button"
            (click)="setFilter('all')"
            [class.bg-[#172B3A]]="activeFilter() === 'all'"
            [class.text-[#F5F1E8]]="activeFilter() === 'all'"
            [class.bg-white]="activeFilter() !== 'all'"
            [class.text-[#172B3A]]="activeFilter() !== 'all'"
            class="px-5 py-2.5 rounded-md border border-[#172B3A]/20 font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-sm">
            All Projects ({{ allProjects.length }})
          </button>
          
          <button 
            type="button"
            (click)="setFilter('ai')"
            [class.bg-[#172B3A]]="activeFilter() === 'ai'"
            [class.text-[#F5F1E8]]="activeFilter() === 'ai'"
            [class.bg-white]="activeFilter() !== 'ai'"
            [class.text-[#172B3A]]="activeFilter() !== 'ai'"
            class="px-5 py-2.5 rounded-md border border-[#172B3A]/20 font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-sm">
            AI & Full-Stack Systems
          </button>

          <button 
            type="button"
            (click)="setFilter('vision')"
            [class.bg-[#172B3A]]="activeFilter() === 'vision'"
            [class.text-[#F5F1E8]]="activeFilter() === 'vision'"
            [class.bg-white]="activeFilter() !== 'vision'"
            [class.text-[#172B3A]]="activeFilter() !== 'vision'"
            class="px-5 py-2.5 rounded-md border border-[#172B3A]/20 font-heading text-xs font-bold uppercase tracking-wider transition-all shadow-sm">
            Computer Vision & AR
          </button>
        </div>
      </section>

      <!-- Projects Listing -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-12">
        
        <div 
          *ngFor="let project of filteredProjects()" 
          class="rounded-xl bg-white border border-[#172B3A]/15 p-8 sm:p-12 shadow-studio-card space-y-8 animate-fadeIn">
          
          <!-- Top Header Line -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#172B3A]/10">
            <div>
              <div class="flex items-center gap-3 mb-2 font-mono text-xs">
                <span class="font-bold px-3 py-1 rounded bg-[#172B3A] text-[#F5F1E8]">
                  {{ project.categoryLabel }}
                </span>
                <span class="text-[#263D36] font-semibold">
                  ✓ Verified Technical Prototype
                </span>
              </div>
              <h2 class="font-serif text-3xl sm:text-4xl text-[#172B3A] font-bold">
                {{ project.title }}
              </h2>
            </div>

            <button 
              (click)="inquireProject(project.title)"
              class="px-5 py-2.5 rounded-md bg-[#D97745] hover:bg-[#C46433] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-colors shrink-0 flex items-center gap-2 self-start sm:self-auto shadow-sm">
              <span>Inquire About Similar Build</span>
              <app-icon name="arrow-right" [size]="14"></app-icon>
            </button>
          </div>

          <!-- Problem & Solution Breakdown -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="p-6 rounded-lg bg-[#FAF7F2] border border-[#172B3A]/10 space-y-2.5">
              <div class="flex items-center gap-2 text-[#D97745] font-heading font-bold text-xs uppercase tracking-wider">
                <app-icon name="alert-circle" [size]="16"></app-icon>
                <span>Problem Being Solved</span>
              </div>
              <p class="text-xs sm:text-sm text-[#68747A] leading-relaxed">
                {{ project.problem }}
              </p>
            </div>

            <div class="p-6 rounded-lg bg-[#FAF7F2] border border-[#172B3A]/10 space-y-2.5">
              <div class="flex items-center gap-2 text-[#263D36] font-heading font-bold text-xs uppercase tracking-wider">
                <app-icon name="check-circle" [size]="16"></app-icon>
                <span>Engineered Solution</span>
              </div>
              <p class="text-xs sm:text-sm text-[#68747A] leading-relaxed">
                {{ project.solution }}
              </p>
            </div>
          </div>

          <!-- Features & Architectural Specs -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- Features Checklist (7 cols) -->
            <div class="lg:col-span-7 space-y-5">
              <h4 class="font-heading text-xs font-bold uppercase tracking-wider text-[#172B3A]">
                Key Technical Features & Capabilities:
              </h4>
              <ul class="space-y-3 font-sans">
                <li *ngFor="let feat of project.features" class="flex items-start gap-2.5 text-xs sm:text-sm text-[#68747A]">
                  <app-icon name="check" [size]="15" cssClass="text-[#D97745] mt-0.5 shrink-0"></app-icon>
                  <span>{{ feat }}</span>
                </li>
              </ul>

              <!-- Technologies List -->
              <div class="pt-4">
                <h5 class="font-heading text-xs font-bold uppercase tracking-wider text-[#172B3A] mb-2">Technology Stack:</h5>
                <div class="flex flex-wrap gap-2">
                  <span 
                    *ngFor="let tech of project.technologies" 
                    class="font-mono text-xs px-3 py-1.5 rounded bg-[#FAF7F2] border border-[#172B3A]/15 text-[#172B3A]">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Architectural Blueprint Panel (5 cols) -->
            <div class="lg:col-span-5">
              <div class="rounded-lg bg-[#172B3A] border border-[#2C475C] p-6 text-[#F5F1E8] space-y-4">
                <div class="flex items-center justify-between pb-3 border-b border-[#2C475C] font-mono text-xs">
                  <span class="text-[#98A4AB]">System Blueprint</span>
                  <span class="text-[#D97745]">Production Tested</span>
                </div>

                <div class="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div 
                    *ngFor="let s of project.visualMockup.statsOrLabels" 
                    class="p-2.5 rounded bg-[#101E29] border border-[#2C475C]">
                    <span class="text-[10px] text-[#98A4AB] block">{{ s.label }}</span>
                    <span class="text-xs font-bold text-white block mt-0.5 truncate">{{ s.value }}</span>
                  </div>
                </div>

                <div class="space-y-2 pt-2 border-t border-[#2C475C]">
                  <div 
                    *ngFor="let pt of project.visualMockup.architecturePoints" 
                    class="flex items-center gap-2 text-[11px] text-[#98A4AB]">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#D97745] shrink-0"></span>
                    <span>{{ pt }}</span>
                  </div>
                </div>

                <!-- Demo Note -->
                <div class="pt-3 border-t border-[#2C475C] font-mono text-[11px] text-[#98A4AB] italic">
                  ℹ️ {{ project.demoNote }}
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      <!-- Custom Project Consultation Box -->
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div class="p-8 sm:p-10 rounded-xl bg-[#172B3A] text-[#F5F1E8] space-y-4">
          <span class="font-mono text-xs uppercase tracking-widest text-[#D97745]">Technical Feasibility Check</span>
          <h3 class="font-serif text-2xl sm:text-3xl text-white font-normal">
            Do You Need a Custom System or Web Application?
          </h3>
          <p class="text-sm text-[#98A4AB] max-w-xl mx-auto leading-relaxed">
            From modern responsive agency websites to intelligent internal dashboards and automation pipelines, we translate complex technical requirements into practical business reality.
          </p>
          <div class="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button 
              (click)="openGeneralQuote()"
              class="px-7 py-3.5 rounded-md bg-[#D97745] hover:bg-[#C46433] text-white font-heading font-semibold text-xs tracking-wider uppercase transition-colors shadow flex items-center gap-2">
              <span>Discuss Your Architecture Needs</span>
              <app-icon name="arrow-right" [size]="15"></app-icon>
            </button>
          </div>
        </div>
      </section>

    </div>
  `
})
export class PortfolioComponent implements OnInit {
  private dataService = inject(AgencyDataService);
  private quoteModalService = inject(QuoteModalService);
  private seoService = inject(SeoService);

  readonly allProjects: ProjectItem[] = this.dataService.getProjects();
  readonly activeFilter = signal<'all' | 'ai' | 'vision'>('all');

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Our Selected Work & Case Studies',
      description: 'Explore real technology projects by AH Digital Solutions: AI Marketing Team Platform, Zyro AR Smart Mirror, and SignBridge.'
    });
  }

  setFilter(filter: 'all' | 'ai' | 'vision'): void {
    this.activeFilter.set(filter);
  }

  filteredProjects(): ProjectItem[] {
    const f = this.activeFilter();
    if (f === 'all') {
      return this.allProjects;
    }
    return this.allProjects.filter(p => p.category === f);
  }

  inquireProject(projectTitle: string): void {
    this.quoteModalService.openModal(projectTitle);
  }

  openGeneralQuote(): void {
    this.quoteModalService.openModal();
  }
}
