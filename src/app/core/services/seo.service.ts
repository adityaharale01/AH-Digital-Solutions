import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseTitle = 'AH Digital Solutions — Turning Ideas Into Digital Growth';

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  updateTitle(title?: string): void {
    if (title) {
      this.titleService.setTitle(`${title} | AH Digital Solutions`);
    } else {
      this.titleService.setTitle(this.baseTitle);
    }
  }

  updateMetaTags(config: {
    title?: string;
    description?: string;
    keywords?: string;
  }): void {
    const fullTitle = config.title ? `${config.title} | AH Digital Solutions` : this.baseTitle;
    const description = config.description || 'AH Digital Solutions delivers modern web development, practical AI tools, and workflow automation for growing businesses in India.';
    const keywords = config.keywords || 'digital agency, web development, AI solutions, automation, Angular, India';

    this.titleService.setTitle(fullTitle);

    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
  }
}
