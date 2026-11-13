import { Injectable } from '@angular/core';
import { 
  ServiceItem, 
  ProjectItem, 
  FaqItem, 
  ProcessStep, 
  ValuePillar, 
  AgencyContact, 
  TargetIndustry,
  PricingPlan
} from '../models/agency.models';

@Injectable({
  providedIn: 'root'
})
export class AgencyDataService {

  readonly contactInfo: AgencyContact = {
    agencyName: 'AH Digital Solutions',
    tagline: 'Turning Ideas Into Digital Growth.',
    email: 'adityaharale088@gmail.com', // Business email
    phone: '+91 93563 81251', // Business phone
    whatsappNumber: '919356381251', // WhatsApp number (digits only, with country code)
    whatsappDisplay: '+91 93563 81251',
    location: 'India',
    businessHours: 'Monday – Saturday: 9:30 AM – 6:30 PM IST',
    responseExpectation: 'We review project briefs carefully and respond within 24 business hours with an initial evaluation.'
  };

  readonly targetIndustries: TargetIndustry[] = [
    {
      title: 'Small & Medium Businesses',
      subtitle: 'Professional digital presence that builds customer confidence and drives local inquiries.',
      icon: 'briefcase',
      examples: ['Local service firms', 'Consultancies', 'Professional offices']
    },
    {
      title: 'Bakeries & Restaurants',
      subtitle: 'Appetizing visual menus, table booking flows, and WhatsApp order routing.',
      icon: 'utensils',
      examples: ['Artisan bakeries', 'Cafes & bistros', 'Cloud kitchens']
    },
    {
      title: 'Retail Shops & Boutiques',
      subtitle: 'Clean product catalogs, local inventory showcases, and direct customer communication channels.',
      icon: 'shopping-bag',
      examples: ['Fashion boutiques', 'Specialty stores', 'Home decor outlets']
    },
    {
      title: 'Coaching Institutes & Tutors',
      subtitle: 'Course catalog pages, student inquiry forms, demo class scheduling, and test result displays.',
      icon: 'graduation-cap',
      examples: ['Competitive exam coaching', 'Language schools', 'Skill trainers']
    },
    {
      title: 'Startups & Entrepreneurs',
      subtitle: 'High-converting MVP landing pages, interactive product demos, and custom web dashboards.',
      icon: 'rocket',
      examples: ['SaaS founders', 'Tech startups', 'Direct-to-consumer brands']
    },
    {
      title: 'Growing Companies',
      subtitle: 'Scalable web architecture, automated repetitive tasks, and internal operational tooling.',
      icon: 'trending-up',
      examples: ['Manufacturing firms', 'Logistics partners', 'Regional distributors']
    }
  ];

  readonly services: ServiceItem[] = [
    {
      id: 'website-development',
      title: 'Website Development',
      slug: 'website-development',
      shortDescription: 'High-performance, responsive websites engineered with modern frameworks to engage visitors and drive genuine business leads.',
      fullDescription: 'We build fast, secure, and mobile-first websites tailored to your business needs. Rather than relying on clunky page builders that slow down over time, we use modern web architectures (Angular, clean semantic HTML, and Tailwind CSS) that provide instantaneous load times, excellent search engine visibility, and effortless maintenance.',
      icon: 'globe',
      subServices: [
        'Business & Corporate Websites',
        'E-Commerce & Online Product Catalogs',
        'Professional Portfolio Websites',
        'High-Converting Landing Pages',
        'Modern Website Redesign & Migration'
      ],
      benefits: [
        'Lightning-fast page loading across desktop and mobile',
        'Clean, maintainable codebase ready to scale with your business',
        'Search engine optimized (SEO) architecture from day one',
        'Fully responsive layouts engineered for all screen sizes',
        'Zero bloatware or heavy subscription plugins'
      ],
      deliverables: [
        'Custom responsive UI tailored to your brand identity',
        'Cross-browser and mobile device compatibility testing',
        'Lead capture contact forms with validation',
        'Google Analytics & Search Console integration setup',
        'Full deployment to cloud hosting with SSL security'
      ],
      badge: 'Core Service'
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      slug: 'ai-solutions',
      shortDescription: 'Intelligent AI tools and tailored integrations that assist customer inquiries, summarize information, and augment daily work.',
      fullDescription: 'Artificial intelligence shouldn’t just be a buzzword—it should solve tangible business bottlenecks. We engineer custom AI capabilities that integrate directly into your workflow: from business-specific conversational assistants that answer customer questions 24/7 using your documents, to intelligent data extraction and specialized internal productivity tools.',
      icon: 'cpu',
      subServices: [
        'AI Customer Chatbot Integration (WhatsApp & Web)',
        'Domain-Specific Knowledge Assistants (RAG)',
        'Intelligent Document & Invoice Processing',
        'Custom AI-Powered Business Utilities'
      ],
      benefits: [
        'Instant answers for common customer questions around the clock',
        'Reduced manual hours spent searching through internal documents',
        'Grounding on your verified business data to minimize hallucinations',
        'Seamless integration with your existing website or internal tools',
        'Privacy-conscious architectures respecting proprietary data'
      ],
      deliverables: [
        'Trained or prompt-engineered AI pipeline with relevant knowledge base',
        'Embeddable chat interface or background processing service',
        'Safety guardrails and tone-of-voice alignment',
        'API keys and cloud infrastructure setup guidance',
        'Staff training and documentation on maintaining prompts'
      ],
      badge: 'Advanced Tech'
    },
    {
      id: 'business-automation',
      title: 'Business Automation',
      slug: 'business-automation',
      shortDescription: 'Streamline repetitive administrative routines, connect disparate tools, and automatically route customer requests.',
      fullDescription: 'Stop losing valuable hours to repetitive copy-paste tasks between emails, spreadsheets, and messaging platforms. We design clean automation flows that capture leads, update records, dispatch notifications, and keep your business running smoothly without manual friction.',
      icon: 'workflow',
      subServices: [
        'End-to-End Workflow Automation',
        'Lead Capture & Automatic CRM / Sheet Sync',
        'Third-Party API Integrations (Payments, SMS, Webhooks)',
        'Automated Customer Enquiries & WhatsApp Alerts'
      ],
      benefits: [
        'Eliminate repetitive data re-entry across different systems',
        'Instant alerts when new high-value customer inquiries arrive',
        'Fewer human errors in order processing or booking schedules',
        'Faster response times that improve customer conversion rates',
        'More time for you to focus on client delivery and business growth'
      ],
      deliverables: [
        'System architecture diagram mapping data flow',
        'Robust webhook and API connection scripts',
        'Error handling and fallback notification alerts',
        'Testing with real sample transactions',
        'Clear operational documentation for your team'
      ],
      badge: 'Efficiency'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      slug: 'ui-ux-design',
      shortDescription: 'Clean, intentional, and customer-focused interfaces that create instant credibility and guide visitors toward action.',
      fullDescription: 'Great digital design is not about superficial decorations or flashing animations—it is about clarity, trust, and ease of use. We craft user experiences that allow prospective customers to quickly comprehend your value proposition, browse your offerings effortlessly, and take action with confidence.',
      icon: 'palette',
      subServices: [
        'Modern Website & Web App UI Design',
        'Administrative Dashboard & Portal Layouts',
        'Mobile-First Responsive Wireframing & Prototyping',
        'User Journey & Conversion Rate Optimization'
      ],
      benefits: [
        'Immediate professional trust established within the first 5 seconds',
        'Logical visual hierarchy directing visitor attention to key actions',
        'Consistent typography, spacing, and brand color harmony',
        'Reduced friction in contact and checkout funnels',
        'Accessible, readable interfaces for all demographics'
      ],
      deliverables: [
        'High-fidelity interactive visual layouts',
        'Component design system (colors, typography, buttons, cards)',
        'Responsive layouts for mobile, tablet, and desktop viewports',
        'Assets and SVG icons formatted for production code',
        'User flow diagrams and usability review'
      ],
      badge: 'Visual Experience'
    }
  ];

  readonly projects: ProjectItem[] = [
    {
      id: 'ai-marketing-platform',
      title: 'AI Marketing Team Platform',
      slug: 'ai-marketing-team-platform',
      category: 'ai',
      categoryLabel: 'AI & Full-Stack System',
      problem: 'Marketing teams and solo entrepreneurs struggle with the high cognitive overhead of planning, drafting, and adapting multi-channel campaigns. Switching between disparate tools often leads to inconsistent brand voice, fragmented campaign schedules, and wasted hours manually formatting content for various platforms.',
      solution: 'Engineered an autonomous multi-agent platform where specialized AI personas—such as a Content Strategist, Copywriter, and Channel Adapter—collaborate dynamically. The system ingests company brand guidelines via Retrieval-Augmented Generation (RAG) to ensure every draft matches the company tone before surfacing content to human operators for final approval.',
      technologies: ['Angular', 'Django', 'Python', 'PostgreSQL', 'Local LLMs', 'RAG / Vector Store'],
      features: [
        'Multi-agent collaborative workflow with role-based personas',
        'RAG architecture grounded on uploaded brand guidelines and documentation',
        'Interactive Angular dashboard for real-time campaign review and editing',
        'PostgreSQL-backed asset repository with version history and export tools',
        'Human-in-the-loop validation checkpoints before publishing'
      ],
      visualMockup: {
        accentColor: '#3B82F6',
        tagline: 'Autonomous multi-persona campaign generation with brand-grounded RAG',
        statsOrLabels: [
          { label: 'Architecture', value: 'Decoupled Angular + Django' },
          { label: 'Grounding Method', value: 'RAG with Vector Similarity' },
          { label: 'LLM Orchestration', value: 'Agentic Persona Pipeline' },
          { label: 'Database', value: 'PostgreSQL Relational Storage' }
        ],
        architecturePoints: [
          'Angular 17+ Standalone Frontend with Reactive Forms',
          'Django REST Framework backend with async task runners',
          'Vector embeddings for brand knowledge retrieval',
          'Structured JSON outputs for predictable UI rendering'
        ]
      },
      demoAvailable: false,
      demoNote: 'Enterprise demonstration project. Technical architecture and code walk-through available on request during project consultation.'
    },
    {
      id: 'zyro-ar-smart-mirror',
      title: 'Zyro AR Smart Mirror',
      slug: 'zyro-ar-smart-mirror',
      category: 'vision',
      categoryLabel: 'Computer Vision & AR',
      problem: 'Conventional retail fitting rooms and lifestyle grooming setups offer passive reflections with zero contextual assistance. Shoppers cannot preview complementary apparel items easily, test different lighting ambiances, or access interactive style suggestions without leaving the mirror.',
      solution: 'Developed an intelligent augmented reality mirror interface combining computer vision, camera stream processing, and interactive widgets. The display overlays contextual information, lighting simulations, and visual garments directly onto the user reflection using low-latency gesture detection.',
      technologies: ['React', 'Computer Vision', 'AR Technologies', 'WebGL / Canvas', 'Node.js'],
      features: [
        'Real-time video feed processing with high frame-rate overlay rendering',
        'Touchless gesture interaction designed for mirror environments',
        'Ambient lighting temperature adjustment presets (Daylight, Evening, Office)',
        'Modular widget system for weather, style recommendations, and schedule overview',
        'Minimalist high-contrast dark UI optimized for optical two-way mirror glass'
      ],
      visualMockup: {
        accentColor: '#10B981',
        tagline: 'Interactive smart surface with computer vision and real-time AR overlay',
        statsOrLabels: [
          { label: 'Display Engine', value: 'WebGL & Hardware Accelerated Canvas' },
          { label: 'Interaction Model', value: 'Touchless Computer Vision Gestures' },
          { label: 'UI Contrast', value: 'High-Luminance Optical Dark Mode' },
          { label: 'Frontend Stack', value: 'React Component Architecture' }
        ],
        architecturePoints: [
          'Optimized 60 FPS video stream landmark detection',
          'Custom HUD widgets for two-way mirror transmission',
          'Dynamic ambient lighting and color correction algorithms',
          'Local hardware integration with low latency response'
        ]
      },
      demoAvailable: false,
      demoNote: 'Hardware-integrated project prototype. Video demonstration and interface design overview available upon inquiry.'
    },
    {
      id: 'signbridge-translator',
      title: 'SignBridge Sign Language Translator',
      slug: 'signbridge-translator',
      category: 'ai',
      categoryLabel: 'AI & Assistive Tech',
      problem: 'Individuals who communicate primarily through sign language frequently face communication barriers when interacting with hearing personnel at service desks, hospitals, retail counters, and educational institutions without dedicated human interpreters present.',
      solution: 'Built an assistive computer-vision system that captures hand gestures via a standard webcam, extracts precise 3D spatial landmarks using Google MediaPipe, and classifies gestures in real time using an optimized Random Forest machine learning model served via FastAPI to display translated text and synthesized voice.',
      technologies: ['React', 'FastAPI', 'Python', 'Google MediaPipe', 'Random Forest', 'Scikit-Learn'],
      features: [
        'Webcam hand landmark tracking across 21 distinct 3D knuckle coordinates',
        'Lightweight Random Forest classifier delivering sub-50ms inference times',
        'FastAPI asynchronous microservice for inference and landmark validation',
        'Real-time text translation display with confidence indicator',
        'Custom dataset recording and model training pipeline for localized signs'
      ],
      visualMockup: {
        accentColor: '#8B5CF6',
        tagline: 'Real-time gesture recognition converting hand landmarks into readable text',
        statsOrLabels: [
          { label: 'Landmark Extraction', value: '21 3D Coordinates / Hand (MediaPipe)' },
          { label: 'Classifier Model', value: 'Trained Random Forest Ensemble' },
          { label: 'API Latency', value: 'Sub-50ms Real-Time Inference' },
          { label: 'Backend Server', value: 'Python FastAPI Microservice' }
        ],
        architecturePoints: [
          'Normalized spatial coordinate vectors resilient to distance variations',
          'Zero expensive cloud GPUs required—runs efficiently on consumer CPUs',
          'Clean accessible React web interface for clear reading by both parties',
          'Modular dictionary architecture expandable to additional vocabularies'
        ]
      },
      demoAvailable: false,
      demoNote: 'Applied AI research & prototype. Dataset methodology, inference pipeline, and codebase review available upon request.'
    }
  ];

  readonly whyChooseUs: ValuePillar[] = [
    {
      title: 'Tailored to Business Needs',
      description: 'We take time to understand how your business actually operates, who your customers are, and what outcome you need before writing a single line of code.',
      icon: 'target'
    },
    {
      title: 'Clean & Maintainable Code',
      description: 'Built with industry-standard Angular, clean TypeScript, and modern modular architecture so your site is fast, secure, and easy to maintain over the long term.',
      icon: 'code'
    },
    {
      title: 'Mobile-First Development',
      description: 'Over 70% of local customers browse on smartphones. We ensure your website looks flawless and functions smoothly across all mobile devices, tablets, and desktops.',
      icon: 'smartphone'
    },
    {
      title: 'Transparent Communication',
      description: 'No technical jargon, no inflated promises, and no hidden surprises. You receive clear milestones, regular progress updates, and direct access to your developer.',
      icon: 'message-circle'
    },
    {
      title: 'Focus on Actual Requirements',
      description: 'We don’t upsell unnecessary complex features you do not need. We build practical digital solutions that solve real problems and respect your project budget.',
      icon: 'check-square'
    },
    {
      title: 'Continued Support & Guidance',
      description: 'Our engagement does not end on launch day. We provide thorough handover documentation, staff training, and responsive support as your business evolves.',
      icon: 'shield-check'
    }
  ];

  readonly processSteps: ProcessStep[] = [
    {
      step: '01',
      title: 'Understand Requirements',
      description: 'We start with a thorough consultation to uncover your business goals, target audience, core offerings, and specific pain points that need solving.',
      deliverables: 'Documented project scope, feature requirements, and timeline alignment.'
    },
    {
      step: '02',
      title: 'Plan the Solution',
      description: 'We define the technical architecture, choose the best tools for your budget, map the sitemap, and outline user journeys to avoid surprises.',
      deliverables: 'Information architecture, technology stack confirmation, and milestone schedule.'
    },
    {
      step: '03',
      title: 'Design the Experience',
      description: 'We craft clean, professional layouts with clear typography and visual hierarchy tailored to build immediate trust with your prospective clients.',
      deliverables: 'Interactive UI prototypes, responsive design mockups, and client feedback review.'
    },
    {
      step: '04',
      title: 'Develop the Product',
      description: 'Our developers write clean, modular, and optimized code following modern software engineering standards, ensuring speed, security, and responsiveness.',
      deliverables: 'Fully functional web application on a staging server for your review.'
    },
    {
      step: '05',
      title: 'Test and Deliver',
      description: 'Rigorous cross-device testing, mobile usability checks, form validation testing, SEO metadata verification, and speed optimization prior to launch.',
      deliverables: 'Quality assurance checklist, production deployment, and domain/SSL setup.'
    },
    {
      step: '06',
      title: 'Provide Support',
      description: 'We provide detailed handover instructions, show your team how to handle inquiries, and remain available for updates and technical maintenance.',
      deliverables: 'System documentation, administrative handover, and post-launch check-in.'
    }
  ];

  readonly faqs: FaqItem[] = [
    {
      category: 'general',
      question: 'How does AH Digital Solutions help my business grow?',
      answer: 'We help businesses establish a credible, professional digital presence that converts visitors into paying customers. Whether you need a modern website that works smoothly on mobile phones, an automated system to route customer inquiries, or an AI assistant to handle common questions, we provide technology solutions that simplify your operations and strengthen your market presence.'
    },
    {
      category: 'general',
      question: 'Do you work with small and local businesses?',
      answer: 'Yes! Small and medium-sized businesses, local retailers, bakeries, restaurants, coaching institutes, and independent entrepreneurs are our primary focus. We believe high-quality, modern web engineering should be accessible and tailored to real local business needs without corporate complexity.'
    },
    {
      category: 'process',
      question: 'How long does it typically take to develop a website?',
      answer: 'Timelines depend on the scope and complexity of your requirements. A streamlined business website or landing page typically takes 1 to 2 weeks, while a comprehensive web application with custom automations or AI integrations generally takes 3 to 5 weeks. We establish a clear timeline upfront and keep you informed at every milestone.'
    },
    {
      category: 'pricing',
      question: 'How do you structure project pricing?',
      answer: 'We quote projects based on the actual deliverables and technical scope agreed upon during our discovery discussion. We believe in transparent, fixed-scope proposals with no hidden fees. You can use our "Get a Free Quote" feature to share your requirements, and we will prepare a realistic, itemized estimate tailored to your budget.'
    },
    {
      category: 'services',
      question: 'Will my website work well on mobile phones and tablets?',
      answer: 'Every website we develop is built mobile-first. We test on real iOS and Android devices, laptops, and large monitors to guarantee crisp typography, fast load speeds, accessible navigation, and perfectly responsive layouts across all screen resolutions.'
    },
    {
      category: 'services',
      question: 'Can you help automate our customer inquiry process?',
      answer: 'Yes. We can connect your website contact forms directly to WhatsApp, email alerts, Google Sheets, or your CRM so you never miss an incoming lead. We can also integrate intelligent conversational assistants to address frequently asked questions even outside regular business hours.'
    },
    {
      category: 'process',
      question: 'What happens after the website is launched?',
      answer: 'We don’t disappear after launch. We provide full handover documentation, configure your domain and security certificates, and provide ongoing maintenance support to ensure your website stays fast, updated, and secure.'
    }
  ];

  readonly pricingPlans: PricingPlan[] = [
    {
      id: 'starter',
      title: 'Starter Website',
      priceRange: '₹5,000 – ₹12,000',
      description: 'A clean, professional online presence for new businesses, freelancers and service providers who need to get started quickly without a large budget.',
      highlights: [
        'Up to 5 pages (Home, About, Services, Contact, Gallery)',
        'Mobile-responsive design',
        'WhatsApp & email contact integration',
        'Basic SEO setup',
        'Google Maps embed',
        'Fast 1–2 week delivery'
      ],
      ctaLabel: 'Get a Quote',
      isFeatured: false
    },
    {
      id: 'professional',
      title: 'Professional Business Website',
      priceRange: '₹12,000 – ₹25,000',
      description: 'A polished, conversion-focused website for established businesses wanting a strong digital presence, clear service communication and consistent lead generation.',
      highlights: [
        'Up to 10 pages with custom layout',
        'Professional UI/UX design',
        'Contact & inquiry forms with validation',
        'Portfolio or product catalog section',
        'On-page SEO & performance optimization',
        'Social media links & WhatsApp chat integration',
        'Delivery in 2–3 weeks'
      ],
      ctaLabel: 'Get a Quote',
      isFeatured: true
    },
    {
      id: 'ai-solutions',
      title: 'Custom AI Solutions',
      priceRange: '₹20,000 – ₹45,000',
      description: 'Practical AI-powered tools integrated into your business — chatbots, intelligent FAQ assistants, automated inquiry handlers and smart product recommenders.',
      highlights: [
        'AI chatbot or FAQ assistant for your website',
        'WhatsApp bot integration',
        'Lead capture automation',
        'Natural language query handling',
        'Custom trained on your business data',
        'CRM or Google Sheets integration'
      ],
      ctaLabel: 'Discuss Requirements',
      isFeatured: false
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Custom Platforms',
      priceRange: '₹35,000 – ₹75,000+',
      description: 'End-to-end custom web applications — booking systems, e-commerce stores, member portals, admin dashboards and specialized business management tools.',
      highlights: [
        'Custom web application development',
        'User authentication & role management',
        'Admin dashboard & reporting panel',
        'Database design & API integration',
        'Payment gateway integration',
        'Scalable cloud-ready architecture',
        'Ongoing support available'
      ],
      ctaLabel: 'Discuss Your Project',
      isFeatured: false
    },
    {
      id: 'maintenance',
      title: 'Website Maintenance',
      priceRange: '₹1,000 – ₹3,000',
      priceUnit: 'per month',
      description: 'Reliable ongoing care for your website — keeping it fast, secure, up to date and free from technical issues so you can focus on running your business.',
      highlights: [
        'Regular content & image updates',
        'Security monitoring & patches',
        'Performance checks & optimization',
        'Bug fixes & minor modifications',
        'Monthly health report',
        'Priority response for critical issues'
      ],
      ctaLabel: 'Get Maintenance Plan',
      isFeatured: false
    }
  ];

  // Helper getters
  getPricingPlans(): PricingPlan[] {
    return this.pricingPlans;
  }

  getServices(): ServiceItem[] {
    return this.services;
  }

  getServiceBySlug(slug: string): ServiceItem | undefined {
    return this.services.find(s => s.slug === slug);
  }

  getProjects(): ProjectItem[] {
    return this.projects;
  }

  getProjectBySlug(slug: string): ProjectItem | undefined {
    return this.projects.find(p => p.slug === slug);
  }

  getFeaturedProjects(): ProjectItem[] {
    return this.projects;
  }

  getWhyChooseUs(): ValuePillar[] {
    return this.whyChooseUs;
  }

  getProcessSteps(): ProcessStep[] {
    return this.processSteps;
  }

  getFaqs(category?: string): FaqItem[] {
    if (!category || category === 'all') {
      return this.faqs;
    }
    return this.faqs.filter(f => f.category === category);
  }

  getTargetIndustries(): TargetIndustry[] {
    return this.targetIndustries;
  }

  getContactInfo(): AgencyContact {
    return this.contactInfo;
  }
}
