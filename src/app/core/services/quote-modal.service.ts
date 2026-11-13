import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteModalService {
  // Angular signal for reactive modal visibility
  readonly isOpen = signal<boolean>(false);
  readonly selectedService = signal<string>('');

  openModal(preselectedService?: string): void {
    if (preselectedService) {
      this.selectedService.set(preselectedService);
    } else {
      this.selectedService.set('');
    }
    this.isOpen.set(true);
    // Prevent background scrolling when modal is open
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(): void {
    this.isOpen.set(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
