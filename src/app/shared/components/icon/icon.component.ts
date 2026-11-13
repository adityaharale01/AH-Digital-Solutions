import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg 
      [attr.class]="cssClass"
      [attr.width]="size" 
      [attr.height]="size" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      [attr.stroke-width]="strokeWidth" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      aria-hidden="true">
      <ng-container [ngSwitch]="name">
        <!-- Globe -->
        <ng-container *ngSwitchCase="'globe'">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </ng-container>

        <!-- CPU / AI -->
        <ng-container *ngSwitchCase="'cpu'">
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="15" x2="23" y2="15"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="15" x2="4" y2="15"></line>
        </ng-container>

        <!-- Workflow / Automation -->
        <ng-container *ngSwitchCase="'workflow'">
          <rect x="3" y="3" width="6" height="6" rx="1"></rect>
          <rect x="15" y="3" width="6" height="6" rx="1"></rect>
          <rect x="9" y="15" width="6" height="6" rx="1"></rect>
          <path d="M6 9v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9"></path>
          <line x1="12" y1="13" x2="12" y2="15"></line>
        </ng-container>

        <!-- Palette / UI-UX -->
        <ng-container *ngSwitchCase="'palette'">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"></path>
        </ng-container>

        <!-- Arrow Right -->
        <ng-container *ngSwitchCase="'arrow-right'">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </ng-container>

        <!-- Arrow Up Right -->
        <ng-container *ngSwitchCase="'arrow-up-right'">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </ng-container>

        <!-- Check -->
        <ng-container *ngSwitchCase="'check'">
          <polyline points="20 6 9 17 4 12"></polyline>
        </ng-container>

        <!-- Check Circle -->
        <ng-container *ngSwitchCase="'check-circle'">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </ng-container>

        <!-- Target -->
        <ng-container *ngSwitchCase="'target'">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </ng-container>

        <!-- Code -->
        <ng-container *ngSwitchCase="'code'">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </ng-container>

        <!-- Smartphone -->
        <ng-container *ngSwitchCase="'smartphone'">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </ng-container>

        <!-- Message Circle -->
        <ng-container *ngSwitchCase="'message-circle'">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </ng-container>

        <!-- Check Square -->
        <ng-container *ngSwitchCase="'check-square'">
          <polyline points="9 11 12 14 22 4"></polyline>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </ng-container>

        <!-- Shield Check -->
        <ng-container *ngSwitchCase="'shield-check'">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </ng-container>

        <!-- Phone -->
        <ng-container *ngSwitchCase="'phone'">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </ng-container>

        <!-- Mail -->
        <ng-container *ngSwitchCase="'mail'">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </ng-container>

        <!-- Map Pin -->
        <ng-container *ngSwitchCase="'map-pin'">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </ng-container>

        <!-- WhatsApp -->
        <ng-container *ngSwitchCase="'whatsapp'">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          <path d="M16 14.5c-.3.8-1.5 1.5-2.2 1.5-.6 0-1.2-.2-2-.6-1.5-.7-2.7-2.1-3.3-3.4-.4-.8-.4-1.4-.1-1.9.3-.5.8-.8 1.1-.8.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.3.4c-.1.1-.1.2 0 .3.4.7 1 1.3 1.7 1.7.1.1.2.1.3 0l.4-.3c.2-.1.4-.1.6 0l1.7.7c.3.1.4.3.4.5 0 .3-.3.8-.9 1.3z"></path>
        </ng-container>

        <!-- Menu / Hamburger -->
        <ng-container *ngSwitchCase="'menu'">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </ng-container>

        <!-- Close / X -->
        <ng-container *ngSwitchCase="'x'">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </ng-container>

        <!-- Chevron Down -->
        <ng-container *ngSwitchCase="'chevron-down'">
          <polyline points="6 9 12 15 18 9"></polyline>
        </ng-container>

        <!-- Chevron Up -->
        <ng-container *ngSwitchCase="'chevron-up'">
          <polyline points="18 15 12 9 6 15"></polyline>
        </ng-container>

        <!-- Sparkles -->
        <ng-container *ngSwitchCase="'sparkles'">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
        </ng-container>

        <!-- Zap -->
        <ng-container *ngSwitchCase="'zap'">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </ng-container>

        <!-- Clock -->
        <ng-container *ngSwitchCase="'clock'">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </ng-container>

        <!-- Briefcase -->
        <ng-container *ngSwitchCase="'briefcase'">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </ng-container>

        <!-- Utensils -->
        <ng-container *ngSwitchCase="'utensils'">
          <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"></path>
          <line x1="15" y1="11" x2="15" y2="22"></line>
          <path d="M6 2v20"></path>
          <path d="M9 2v4a3 3 0 0 1-3 3"></path>
        </ng-container>

        <!-- Shopping Bag -->
        <ng-container *ngSwitchCase="'shopping-bag'">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </ng-container>

        <!-- Graduation Cap -->
        <ng-container *ngSwitchCase="'graduation-cap'">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </ng-container>

        <!-- Rocket -->
        <ng-container *ngSwitchCase="'rocket'">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
        </ng-container>

        <!-- Trending Up -->
        <ng-container *ngSwitchCase="'trending-up'">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </ng-container>

        <!-- External Link -->
        <ng-container *ngSwitchCase="'external-link'">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </ng-container>

        <!-- Info / Alert -->
        <ng-container *ngSwitchCase="'info'">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </ng-container>

        <!-- Copy -->
        <ng-container *ngSwitchCase="'copy'">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </ng-container>

        <!-- Send -->
        <ng-container *ngSwitchCase="'send'">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </ng-container>

        <!-- Default circle -->
        <ng-container *ngSwitchDefault>
          <circle cx="12" cy="12" r="8"></circle>
        </ng-container>
      </ng-container>
    </svg>
  `
})
export class IconComponent {
  @Input() name: string = 'check';
  @Input() size: number = 20;
  @Input() strokeWidth: number = 2;
  @Input() cssClass: string = 'inline-block';
}
