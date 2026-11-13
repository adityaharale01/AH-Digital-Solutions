import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-hero-visual',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="relative w-full max-w-xl mx-auto">
      
      <!-- Studio Frame / Architectural Chassis -->
      <div class="relative rounded-xl bg-[#172B3A] border border-[#2C475C] shadow-2xl overflow-hidden text-[#F5F1E8]">
        
        <!-- Header Colophon Bar -->
        <div class="px-5 py-3.5 bg-[#101E29] border-b border-[#2C475C] flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <span class="w-2.5 h-2.5 rounded-full bg-[#D97745]"></span>
            <span class="font-mono text-[11px] tracking-wider text-[#98A4AB]">
              ah-digital.studio // architecture_workbench
            </span>
          </div>

          <div class="flex items-center gap-2 font-mono text-[10px] text-[#D97745] bg-[#D97745]/10 px-2.5 py-0.5 rounded border border-[#D97745]/30">
            <span class="w-1.5 h-1.5 rounded-full bg-[#D97745] animate-ping"></span>
            <span>PRODUCTION VERIFIED</span>
          </div>
        </div>

        <!-- Tab Selector (Architectural Studio Switcher) -->
        <div class="flex border-b border-[#2C475C] bg-[#172B3A] font-heading text-xs">
          <button 
            type="button"
            (click)="activeView.set('website')"
            [class.text-[#F5F1E8]]="activeView() === 'website'"
            [class.border-b-2]="activeView() === 'website'"
            [class.border-[#D97745]]="activeView() === 'website'"
            [class.bg-[#1F374A]]="activeView() === 'website'"
            class="px-5 py-3 font-semibold transition-colors hover:text-[#F5F1E8] text-[#98A4AB] flex items-center gap-2">
            <app-icon name="globe" [size]="14"></app-icon>
            <span>Modern Web</span>
          </button>
          
          <button 
            type="button"
            (click)="activeView.set('ai')"
            [class.text-[#F5F1E8]]="activeView() === 'ai'"
            [class.border-b-2]="activeView() === 'ai'"
            [class.border-[#D97745]]="activeView() === 'ai'"
            [class.bg-[#1F374A]]="activeView() === 'ai'"
            class="px-5 py-3 font-semibold transition-colors hover:text-[#F5F1E8] text-[#98A4AB] flex items-center gap-2">
            <app-icon name="cpu" [size]="14"></app-icon>
            <span>AI Systems</span>
          </button>
          
          <button 
            type="button"
            (click)="activeView.set('automation')"
            [class.text-[#F5F1E8]]="activeView() === 'automation'"
            [class.border-b-2]="activeView() === 'automation'"
            [class.border-[#D97745]]="activeView() === 'automation'"
            [class.bg-[#1F374A]]="activeView() === 'automation'"
            class="px-5 py-3 font-semibold transition-colors hover:text-[#F5F1E8] text-[#98A4AB] flex items-center gap-2">
            <app-icon name="workflow" [size]="14"></app-icon>
            <span>Automation</span>
          </button>
        </div>

        <!-- View 1: Modern Web Engineering -->
        <div *ngIf="activeView() === 'website'" class="p-6 space-y-5 animate-fadeIn">
          
          <div class="flex items-center justify-between pb-4 border-b border-[#2C475C]">
            <div>
              <span class="font-mono text-[10px] text-[#D97745] uppercase tracking-wider block font-semibold">
                Lighthouse Audit Standards
              </span>
              <h4 class="font-heading text-sm font-bold text-white mt-0.5">Core Web Vitals & Speed</h4>
            </div>
            <div class="text-right">
              <span class="font-serif text-3xl font-bold text-[#F5F1E8]">99<span class="text-sm font-mono text-[#D97745]">/100</span></span>
              <p class="font-mono text-[10px] text-[#98A4AB]">Performance Score</p>
            </div>
          </div>

          <!-- Metrics Row -->
          <div class="grid grid-cols-3 gap-2.5 text-center font-mono">
            <div class="p-3 rounded-lg bg-[#101E29] border border-[#2C475C]">
              <span class="text-sm font-bold text-[#F5F1E8] block">0.6s</span>
              <span class="text-[10px] text-[#98A4AB] block mt-0.5">First Contentful Paint</span>
            </div>
            <div class="p-3 rounded-lg bg-[#101E29] border border-[#2C475C]">
              <span class="text-sm font-bold text-[#D97745] block">0.00</span>
              <span class="text-[10px] text-[#98A4AB] block mt-0.5">Cumulative Shift</span>
            </div>
            <div class="p-3 rounded-lg bg-[#101E29] border border-[#2C475C]">
              <span class="text-sm font-bold text-[#263D36] block bg-[#F5F1E8] px-1 rounded">100%</span>
              <span class="text-[10px] text-[#98A4AB] block mt-0.5">Mobile Usability</span>
            </div>
          </div>

          <!-- Stack Blueprint Specs -->
          <div class="bg-[#101E29] p-4 rounded-lg border border-[#2C475C] space-y-2 text-xs font-mono">
            <div class="flex items-center justify-between">
              <span class="text-[#98A4AB]">Framework</span>
              <span class="text-[#F5F1E8] font-semibold">Angular 18 Standalone</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[#98A4AB]">Styling Architecture</span>
              <span class="text-[#D97745] font-semibold">Tailwind CSS (JIT Engine)</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[#98A4AB]">SEO / Indexing</span>
              <span class="text-[#F5F1E8]">OpenGraph, Twitter & Schema Ready</span>
            </div>
          </div>

          <div class="p-3 rounded-lg bg-[#263D36]/40 border border-[#263D36] flex items-center gap-3 text-xs text-[#F5F1E8]">
            <app-icon name="check-circle" [size]="16" cssClass="text-[#D97745] shrink-0"></app-icon>
            <span class="leading-relaxed">Zero plugin bloatware. Clean, handcrafted code designed for conversions.</span>
          </div>
        </div>

        <!-- View 2: AI Knowledge Systems -->
        <div *ngIf="activeView() === 'ai'" class="p-6 space-y-5 animate-fadeIn">
          <div class="flex items-center justify-between pb-4 border-b border-[#2C475C]">
            <div>
              <span class="font-mono text-[10px] text-[#D97745] uppercase tracking-wider block font-semibold">
                Retrieval-Augmented Generation
              </span>
              <h4 class="font-heading text-sm font-bold text-white mt-0.5">Domain-Grounded Business AI</h4>
            </div>
            <span class="font-mono text-xs text-[#D97745] bg-[#D97745]/15 px-2.5 py-1 rounded">
              Grounded Model
            </span>
          </div>

          <!-- Flow Schematic -->
          <div class="space-y-2 font-mono text-xs">
            <div class="flex items-center gap-3 p-2.5 rounded-lg bg-[#101E29] border border-[#2C475C]">
              <span class="w-2 h-2 rounded-full bg-[#D97745]"></span>
              <span class="text-[#F5F1E8]">1. Ingest Verified Business Data</span>
              <span class="ml-auto text-[10px] text-[#98A4AB]">PDF, Docs & Sheets</span>
            </div>
            <div class="flex items-center gap-3 p-2.5 rounded-lg bg-[#101E29] border border-[#2C475C]">
              <span class="w-2 h-2 rounded-full bg-[#F5F1E8]"></span>
              <span class="text-[#F5F1E8]">2. Semantic Vector Similarity</span>
              <span class="ml-auto text-[10px] text-[#D97745]">RAG Embedding</span>
            </div>
            <div class="flex items-center gap-3 p-2.5 rounded-lg bg-[#101E29] border border-[#2C475C]">
              <span class="w-2 h-2 rounded-full bg-[#263D36] ring-1 ring-[#D97745]"></span>
              <span class="text-[#F5F1E8]">3. Instant Verified Response</span>
              <span class="ml-auto text-[10px] text-[#F5F1E8]">&lt; 1.2s Latency</span>
            </div>
          </div>

          <div class="p-3 rounded-lg bg-[#1F374A] border border-[#2C475C] flex items-center gap-3 text-xs text-[#F5F1E8]">
            <app-icon name="sparkles" [size]="16" cssClass="text-[#D97745] shrink-0"></app-icon>
            <span class="leading-relaxed">Eliminates AI hallucinations by grounding responses strictly on your business facts.</span>
          </div>
        </div>

        <!-- View 3: Automation Dispatch -->
        <div *ngIf="activeView() === 'automation'" class="p-6 space-y-5 animate-fadeIn">
          <div class="flex items-center justify-between pb-4 border-b border-[#2C475C]">
            <div>
              <span class="font-mono text-[10px] text-[#D97745] uppercase tracking-wider block font-semibold">
                Event-Driven Architecture
              </span>
              <h4 class="font-heading text-sm font-bold text-white mt-0.5">Automated Lead & Workflow Engine</h4>
            </div>
            <span class="font-mono text-xs text-[#263D36] bg-[#F5F1E8] px-2.5 py-1 rounded font-bold">
              0 Missed Leads
            </span>
          </div>

          <!-- Sequence -->
          <div class="bg-[#101E29] p-4 rounded-lg border border-[#2C475C] space-y-2.5 text-xs font-mono">
            <div class="flex items-center justify-between pb-2 border-b border-[#2C475C]/60">
              <span class="text-[#98A4AB]">Customer Form Submission</span>
              <span class="text-[#F5F1E8]">Triggered [Instant]</span>
            </div>
            <div class="flex items-center justify-between pb-2 border-b border-[#2C475C]/60">
              <span class="text-[#98A4AB]">Instant Owner WhatsApp Alert</span>
              <span class="text-[#D97745]">Dispatched [&lt;1s]</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[#98A4AB]">CRM & Google Sheet Record</span>
              <span class="text-[#F5F1E8]">Synchronized</span>
            </div>
          </div>

          <div class="p-3 rounded-lg bg-[#263D36]/40 border border-[#263D36] flex items-center gap-3 text-xs text-[#F5F1E8]">
            <app-icon name="check-square" [size]="16" cssClass="text-[#D97745] shrink-0"></app-icon>
            <span class="leading-relaxed">Automate daily repetitive busywork. Never lose a valuable client inquiry.</span>
          </div>
        </div>

        <!-- Studio Colophon Base Line -->
        <div class="px-5 py-3 bg-[#101E29] border-t border-[#2C475C] flex items-center justify-between font-mono text-[11px] text-[#98A4AB]">
          <span>AH Digital Solutions // Spec v2.4</span>
          <span>India Base • Global Standards</span>
        </div>

      </div>

      <!-- Tactile Architectural Stamp Tag 1 -->
      <div class="hidden sm:flex absolute -bottom-5 -left-5 bg-[#F5F1E8] border border-[#172B3A]/25 rounded-md px-4 py-2.5 shadow-lg items-center gap-3 text-[#172B3A]">
        <div class="w-8 h-8 rounded bg-[#172B3A] text-[#F5F1E8] flex items-center justify-center">
          <app-icon name="code" [size]="16"></app-icon>
        </div>
        <div>
          <span class="font-heading text-xs font-bold block leading-none">Clean Architecture</span>
          <span class="font-mono text-[10px] text-[#68747A] mt-0.5 block">TypeScript • No Bloat</span>
        </div>
      </div>

      <!-- Tactile Architectural Stamp Tag 2 -->
      <div class="hidden sm:flex absolute -top-4 -right-4 bg-[#F5F1E8] border border-[#172B3A]/25 rounded-md px-4 py-2.5 shadow-lg items-center gap-3 text-[#172B3A]">
        <div class="w-8 h-8 rounded bg-[#D97745] text-white flex items-center justify-center">
          <app-icon name="smartphone" [size]="16"></app-icon>
        </div>
        <div>
          <span class="font-heading text-xs font-bold block leading-none">Mobile-First</span>
          <span class="font-mono text-[10px] text-[#68747A] mt-0.5 block">iOS & Android Calibrated</span>
        </div>
      </div>

    </div>
  `
})
export class HeroVisualComponent {
  readonly activeView = signal<'website' | 'ai' | 'automation'>('website');
}
