# AH Digital Solutions — Premium Digital Agency Website

> **Tagline:** Turning Ideas Into Digital Growth.  
> **Agency Type:** Customer-Focused Digital Solutions Agency  
> **Location:** India  

This repository contains the complete, production-ready website for **AH Digital Solutions**, built using **Angular 18+ standalone components**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Key Highlights & Architectural Features

1. **Modern Standalone Angular 18 Architecture**
   - Built with the latest standalone component model (`@Component({ standalone: true })`).
   - Clean folder hierarchy separating `core/` (services, data models, SEO metadata), `shared/` (reusable UI components, SVG icons, modals), and `features/` (lazy-loaded routed pages).
   - In-memory smooth scrolling with anchor support (`withInMemoryScrolling`) for frictionless navigation.

2. **Brand & Design Identity**
   - **Primary Palette:** Deep Navy (`#0B1220`, `#111A2E`, `#152138`), Pure White (`#FFFFFF`), Electric Blue (`#3B82F6`), Light Background (`#F5F7FB`), and Charcoal (`#172033`).
   - High-contrast balance alternating dark hero / footer sections and clean, spacious light content sections.
   - Genuine, trustworthy tone: Zero fabricated client counters, fake 500+ stats, or artificial testimonials.

3. **Core Website Pages & Deliverables**
   - **Home (`/`)**:
     - Dynamic hero section with headline, supporting copy, primary/secondary CTAs.
     - Interactive **Agency Workspace Mockup** displaying live-feel web metrics (99/100 Lighthouse, Core Web Vitals), AI RAG pipeline flow, and automation routing.
     - Tailored solutions section for target customers (Bakeries & Restaurants, Retail Shops, Coaching Institutes, Startups, and Growing Enterprises).
     - Services preview cards with direct quote triggers and feature breakdowns.
     - The AH Digital Standard (6 engineering pillars).
     - Featured Projects showcasing real engineering work.
     - 6-step project delivery roadmap.
     - Interactive FAQ accordion.
     - High-conversion bottom CTA banner.
   - **About (`/about`)**:
     - Agency mission, vision, and operating philosophy (Honest Scoping, Clean Codebase, Direct Developer Access).
     - Core Technology Stack showcase.
     - Engineering leadership introduction with realistic commitments.
   - **Services (`/services`)**:
     - Comprehensive breakdowns of **Website Development**, **AI Solutions**, **Business Automation**, and **UI/UX Design**.
     - Benefits, concrete deliverables checklist, sub-service breakdown, and 1-click service quotation triggers.
   - **Our Work / Portfolio (`/portfolio`)**:
     - Category filter tabs (**All**, **AI & Full-Stack Systems**, **Computer Vision & AR**).
     - **AI Marketing Team Platform** (Angular, Django, Python, PostgreSQL, Local LLMs, RAG).
     - **Zyro AR Smart Mirror** (React, Computer Vision, WebGL, AR).
     - **SignBridge Translator** (React, FastAPI, MediaPipe, Random Forest).
     - Problem-solution analysis, feature checklists, and system blueprint specs.
   - **Contact (`/contact`)**:
     - Angular Reactive Form with validation (Name, Business Name, Email, Phone, Service, Budget, Description).
     - **Honest Non-Deceptive Transmission**: Compiles a structured project brief with 1-click transmission to WhatsApp, pre-filled Email draft, or clipboard copy.
     - Configurable agency email, phone, and WhatsApp contact options.

4. **Conversion & User Experience Tools**
   - Sticky responsive navigation with active link indicators and mobile drawer menu.
   - Global **Free Quotation Modal** accessible from anywhere across the site.
   - Floating **Sticky WhatsApp Button** with expandable quick message popup.
   - SEO metadata dynamically managed via `SeoService` (titles, meta descriptions, Open Graph, and Twitter Cards).
   - `sitemap.xml` and `robots.txt` for search engine visibility.

---

## 🛠️ Technology Stack

- **Framework:** Angular 18 (Standalone Components)
- **Language:** TypeScript 5.5
- **Styling:** Tailwind CSS 3.4 + PostCSS
- **Forms:** Angular Reactive Forms (`FormBuilder`, `Validators`)
- **Icons:** Custom SVG Icon Engine (`app-icon`) + Lucide Angular
- **Routing:** Angular Router with lazy loading

---

## 🚀 Running the Project Locally

### Prerequisites
- Node.js `v18.19+` or `v20.x`
- npm `v10.x`

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm start
# or
npx ng serve --port 4200
```
Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any source files.

### 3. Production Build
```bash
npm run build
```
The optimized production bundle will be output to `dist/ah-digital-solutions/browser/`.

---

## ⚙️ Configuration & Customization

All business contact information, hours, and service data can be updated in a single file:  
`src/app/core/services/agency-data.service.ts`

```typescript
readonly contactInfo: AgencyContact = {
  agencyName: 'AH Digital Solutions',
  tagline: 'Turning Ideas Into Digital Growth.',
  email: 'your-business-email@example.com',
  phone: '+91 98765 43210',
  whatsappNumber: '919876543210',
  whatsappDisplay: '+91 98765 43210',
  location: 'India',
  businessHours: 'Monday – Saturday: 9:30 AM – 6:30 PM IST',
  responseExpectation: 'We review project briefs carefully and respond within 24 business hours.'
};
```

---

## 🚢 Deployment Guide

### Deploying to Netlify / Vercel / Cloudflare Pages

1. **Build Command:** `npm run build`
2. **Publish Directory:** `dist/ah-digital-solutions/browser`
3. **SPA Redirect Rule:**
   - For Netlify, ensure `public/_redirects` exists with:
     ```text
     /*    /index.html   200
     ```
   - For Vercel, use a `vercel.json` rewrites rule:
     ```json
     {
       "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
     }
     ```
