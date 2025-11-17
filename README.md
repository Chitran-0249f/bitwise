# BIMWise Consultants Website

A professional company website for BIMWise Consultants built with Next.js 15, TypeScript, and Tailwind CSS. The design is inspired by modern engineering consultancy websites with a focus on clean aesthetics and user experience.

## Features

### Pages
- **Home**: Complete landing page with hero section, about, services overview, diverse sectors, stats, BIM benefits, projects showcase, and CTA
- **About**: Detailed company information, mission, vision, values, and why choose us
- **Services**: Comprehensive service listings including BIM Modelling, Advanced BIM, and Quantity Surveying
- **Projects**: Showcase of completed projects with detailed information
- **Team**: Introduction to core team members with their expertise
- **Contact**: Contact form with business information and map section

### Components
- Responsive navigation with dropdown menus
- Hero section with automatic carousel
- Service cards with icons
- Stats counter section
- Project showcase carousel
- Comprehensive footer with service links
- Professional color scheme (Green and Navy Blue)

### Design Highlights
- **Color Scheme**:
  - Primary: Green (#7CB342) - represents growth and innovation
  - Secondary: Navy Blue (#1A237E) - represents professionalism and trust
- **Typography**: Inter font family for clean, modern look
- **Responsive**: Fully responsive design for all screen sizes
- **Animations**: Smooth transitions and hover effects
- **Icons**: Lucide React for consistent iconography

## Technology Stack

- **Framework**: Next.js 15.5.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd company_website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
company_website/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── team/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── DiverseSectors.tsx
│   ├── StatsSection.tsx
│   ├── BIMBenefits.tsx
│   ├── ProjectsShowcase.tsx
│   └── CTASection.tsx
├── public/
│   └── images/
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── package.json
└── README.md
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: {
    DEFAULT: "#7CB342",
    dark: "#558B2F",
    light: "#9CCC65",
  },
  secondary: {
    DEFAULT: "#1A237E",
    dark: "#0D1642",
    light: "#283593",
  },
}
```

### Content
- Update company information in `components/Footer.tsx`
- Modify services in `components/ServicesSection.tsx`
- Add/edit projects in `app/projects/page.tsx`
- Update team members in `app/team/page.tsx`

### Images
Add your images to the `public/images/` directory and update image references in components.

## Services Covered

### Core Services
- Design Consulting Services
- BIM/VDC Consulting Services
- Value Engineering
- 3D Laser Scanning & Scan to BIM Modelling
- Professional Staff Deputation
- Professional QS, BOQ & Cost Estimations
- Computer Aided Facility Management (CAFM)
- Sustainability (GSAS Consultancy)
- BIM/GIS/FM Integration

### BIM Modelling Services
- Architectural/Structure/MEP Modelling
- Coordination & Clash Detection
- LOD 300, 400, 500 Models
- BIM Execution Plans
- Asset Management & COBie
- 2D Shop Drawings & As-Built Drawings

### Advanced BIM Services
- 4D Construction Simulations
- 5D Cost Management
- 6D Sustainability Analysis
- 7D Facility Management
- VR/AR Walkthroughs
- Digital Twin Technology

## Contact Information

**BIMWise Consultants**

Address: #336, First Floor, Kotli, Post Office- Suchan Kotli, Near Hisar Road (NH9), Sirsa, Haryana - 125055, India

Phone: +91-9560683700

Email: bd@bimwiseconsultants.com

## License

© 2025 BIMWise Consultants. All rights reserved.
