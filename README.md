# Enterprise Landing Page

A modern, responsive landing page built with Next.js 16 and Tailwind CSS, featuring a complete lead capture system, SEO optimization, and smooth user experience.

## Setup Instructions

### Prerequisites

- Node.js 18+
- npm or bun package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd my-assignment
```

2. Install dependencies:

```bash
bun install
```

3. Run the development server:

```bash
bun run dev
```

4. Open your browser and visit:

```
http://localhost:3000
```

### Build for Production

```bash
bun run build
bun start
```

## Approach Taken

### Architecture

- **Next.js 16 App Router** with all sections as isolated client/server components
- All static content centralized in `app/data/mock.ts` for separation of concerns
- **Tailwind CSS utility classes only** — no custom CSS except `scroll-behavior` in `globals.css`
- API route at `/api/leads` stores form submissions to `data/leads.json`
- IntersectionObserver for active nav link detection on scroll
- Modal-based lead capture triggered from multiple CTAs across the page

### Component Structure

```
app/
├── components/
│   ├── Navbar.tsx              # Sticky navigation with scroll detection
│   ├── Hero.tsx                # Hero section with CTA
│   ├── Stats.tsx               # Track record statistics
│   ├── Clients.tsx             # Client logos carousel
│   ├── AccredianEdge.tsx       # USP section
│   ├── DomainExpertise.tsx     # Domain expertise cards
│   ├── CourseSegmentation.tsx  # Course offerings
│   ├── SkillEnhancement.tsx    # Skill enhancement section
│   ├── CATFramework.tsx        # CAT framework visualization
│   ├── HowItWorks.tsx          # Process steps
│   ├── FAQ.tsx                 # Accordion FAQ section
│   ├── Testimonials.tsx        # Auto-play testimonial carousel
│   ├── ContactBanner.tsx       # CTA banner with background
│   ├── LeadForm.tsx            # Modal lead capture form
│   ├── BackToTop.tsx           # Scroll to top button
│   └── Footer.tsx              # Footer with links and social icons
├── api/
│   └── leads/
│       └── route.ts            # POST endpoint for lead capture
├── data/
│   └── mock.ts                 # Centralized static content
├── lib/
│   └── imageUtils.ts           # Image blur placeholder utility
├── layout.tsx                  # Root layout with metadata
├── page.tsx                    # Main page with JSON-LD schema
├── sitemap.ts                  # Dynamic sitemap generation
└── robot.ts                    # Robots.txt configuration
```

### Key Features

#### User Experience

- **Responsive Design**: Mobile-first approach with breakpoints at 768px (md) and 1024px (lg)
- **Smooth Scrolling**: CSS scroll-behavior for anchor navigation
- **Active Navigation**: IntersectionObserver highlights current section in navbar
- **Auto-play Carousel**: Testimonials rotate every 3 seconds with manual controls
- **Back to Top Button**: Appears after scrolling 300px for easy navigation
- **Mobile Dropdown Menu**: Centered dropdown card on mobile devices
- **Accessibility**: ARIA labels on icon buttons, semantic HTML, keyboard navigation

#### Lead Capture

- **Modal Form**: Triggered from multiple CTAs across the page
- **Form Validation**: Client-side validation with error feedback
- **File-based Storage**: Submissions saved to `data/leads.json`
- **Success/Error Feedback**: User-friendly messages on form submission

#### Image Optimization

- **Next.js Image Component**: Used throughout for automatic optimization
- **Priority Loading**: Hero images loaded with `priority` flag for better LCP
- **Blur Placeholders**: Custom SVG-based blur placeholders for smooth loading
- **Meaningful Alt Text**: Descriptive alt text for SEO and accessibility

### SEO Optimization

#### Metadata & Schema

- **Page Metadata** (`app/layout.tsx`):
  - Title, description, and keywords for search engines
  - Open Graph tags for social media sharing (Facebook, LinkedIn)
  - Twitter Card metadata for Twitter sharing
  - Structured metadata with proper image dimensions

- **JSON-LD Schema** (`app/page.tsx`):
  - Organization schema with company details
  - Contact information and address
  - Social media profiles (LinkedIn, Twitter)
  - Helps search engines understand business information

#### Crawling & Indexing

- **Sitemap** (`app/sitemap.ts`):
  - Dynamic sitemap generation at `/sitemap.xml`
  - Includes URL, last modified date, change frequency, and priority
  - Helps search engines discover and index pages efficiently

- **Robots.txt** (`app/robot.ts`):
  - Configured at `/robots.txt`
  - Allows all user agents to crawl the site
  - References sitemap location for search engine crawlers

### Styling Approach

- **Color Palette**:
  - Primary Blue: `#2563EB` (blue-600)
  - Text: Black, gray-600, gray-700, gray-900
  - Backgrounds: White, blue-50, gray-50, gradient overlays
- **Typography**: Inter font family with bold headings and regular body text
- **Spacing**: Consistent `py-8 md:py-12` section padding (reduced from default)
- **Components**: Rounded corners (`rounded-xl`, `rounded-2xl`), subtle shadows

## AI Usage

- Used **Kiro (Claude Sonnet 4.5)** to scaffold all component structures and Tailwind class combinations
- Manually verified and adjusted: spacing, responsive breakpoints, color values, section ordering, and typography sizing to match the reference site
- API route logic (validation, file I/O, error handling) reviewed and tested manually
- All content in `app/data/mock.ts` was manually verified against the actual site screenshots
- SEO implementations (metadata, sitemap, robots.txt, JSON-LD) were AI-assisted and manually reviewed

## What I Would Improve With More Time

### Backend & Data

- Replace `data/leads.json` storage with **Supabase** or **PostgreSQL** for scalability
- Add email notification on form submission using **Resend API** or **SendGrid**
- Build a `/dashboard` route to view captured leads with filtering, sorting, and export
- Add authentication for dashboard access using **NextAuth.js**
- Implement rate limiting on API routes to prevent spam

### User Experience

- Add **Framer Motion** scroll animations for section entry and exit
- Implement lazy loading for images below the fold
- Add skeleton loaders for dynamic content
- Improve form validation with **Zod** or **React Hook Form**
- Add toast notifications for better user feedback
- Add loading states for form submission

### Performance & Optimization

- Implement ISR (Incremental Static Regeneration) for testimonials
- Add service worker for offline support
- Optimize bundle size with dynamic imports for heavy components
- Add performance monitoring with **Vercel Analytics** or **Google Analytics**
- Implement CDN caching strategies

### SEO & Analytics

- Add more comprehensive JSON-LD schemas (FAQPage, BreadcrumbList)
- Implement dynamic meta tags based on URL parameters
- Add canonical URLs for duplicate content prevention
- Set up Google Search Console and Bing Webmaster Tools
- Add structured data testing and validation

### Testing

- Write unit tests for components using **Jest** and **React Testing Library**
- Add integration tests for the API route
- Implement E2E tests with **Playwright** or **Cypress**
- Add visual regression testing

## Tech Stack

- **Framework**: Next.js 16.2.4 (App Router, Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Package Manager**: Bun
- **Runtime**: Node.js 18+
- **Analytics**: Vercel Analytics

## Project Structure

```
.
├── app/
│   ├── api/leads/          # API routes
│   ├── components/         # React components
│   ├── data/              # Static content
│   ├── lib/               # Utility functions
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page with JSON-LD
│   ├── sitemap.ts         # Sitemap generation
│   └── robot.ts           # Robots.txt configuration
├── data/
│   └── leads.json         # Lead storage (gitignored)
├── public/
│   └── image/             # Static assets
├── .env                   # Environment variables
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=your_database_url_here
```

## License

This project is private and proprietary.
