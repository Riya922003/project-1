# Enterprise Landing Page

A modern, responsive landing page built with Next.js 16 and Tailwind CSS, featuring a complete lead capture system and smooth user experience.

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
bun  install
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
│   └── Footer.tsx              # Footer with links and social icons
├── api/
│   └── leads/
│       └── route.ts            # POST endpoint for lead capture
├── data/
│   └── mock.ts                 # Centralized static content
└── page.tsx                    # Main page composition
```

### Key Features

- **Responsive Design**: Mobile-first approach with breakpoints at 768px (md) and 1024px (lg)
- **Lead Capture**: Form validation, file-based storage, success/error feedback
- **Smooth Scrolling**: CSS scroll-behavior for anchor navigation
- **Auto-play Carousel**: Testimonials rotate every 3 seconds
- **Active Navigation**: IntersectionObserver highlights current section
- **Accessibility**: ARIA labels on icon buttons, semantic HTML, keyboard navigation

### Styling Approach

- **Color Palette**:
  - Primary Blue: `#2563EB` (blue-600)
  - Text: Black, gray-600, gray-900
  - Backgrounds: White, blue-50, gradient overlays
- **Typography**: System fonts with bold headings and regular body text
- **Spacing**: Consistent `py-8 md:py-12` section padding
- **Components**: Rounded corners (`rounded-xl`, `rounded-2xl`), subtle shadows

## AI Usage

### AI-Assisted Development

- Used **Kiro (Claude Sonnet 4.5)** to scaffold all component structures and Tailwind class combinations
- AI generated initial layouts, responsive breakpoints, and component boilerplate
- Manually verified and adjusted:
  - Spacing and padding values
  - Responsive breakpoints (mobile/tablet/desktop)
  - Color values (`#2563EB` blue, gray shades)
  - Section ordering and content hierarchy
  - Typography sizing and font weights
  - Image paths and asset references

### Manual Review & Testing

- API route logic (validation, file I/O, error handling) reviewed and tested manually
- All content in `app/data/mock.ts` was manually verified against actual site requirements
- Form submission flow tested with various input scenarios
- Responsive behavior tested across multiple device sizes
- Carousel timing and navigation tested for smooth UX
- Accessibility features (ARIA labels, keyboard navigation) manually added

## What I Would Improve With More Time

### Backend & Data

- Replace `data/leads.json` storage with **Supabase** or **PostgreSQL** for scalability
- Add email notification on form submission using **Resend API** or **SendGrid**
- Build a `/dashboard` route to view captured leads with filtering, sorting, and export
- Add authentication for dashboard access using **NextAuth.js**

### User Experience

- Add **Framer Motion** scroll animations for section entry and exit
- Implement lazy loading for images below the fold
- Add skeleton loaders for dynamic content
- Improve form validation with **Zod** or **React Hook Form**
- Add toast notifications for better user feedback

### Performance & Optimization

- Add proper image optimization with `next/image` for all assets
- Implement ISR (Incremental Static Regeneration) for testimonials
- Add service worker for offline support
- Optimize bundle size with dynamic imports

### Testing & Quality

- Write unit tests for the API route using **Jest** or **Vitest**
- Add E2E tests with **Playwright** or **Cypress**
- Implement component testing with **React Testing Library**
- Add Lighthouse CI for performance monitoring

### Features

- Multi-language support (i18n)
- Dark mode toggle
- Advanced analytics integration (Google Analytics, Mixpanel)
- A/B testing framework for CTAs
- Live chat integration

## Tech Stack

- **Framework**: Next.js 16.2.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Runtime**: Node.js 18+

## Project Structure

```
.
├── app/
│   ├── api/leads/          # API routes
│   ├── components/         # React components
│   ├── data/              # Static content
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── data/
│   └── leads.json         # Lead storage (gitignored)
├── public/
│   └── image/             # Static assets
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## License

This project is private and proprietary.
