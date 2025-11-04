# 🚀 Moki Mark - Full Stack Developer Portfolio

A modern, interactive portfolio website showcasing full-stack development skills with cutting-edge animations and user experience features.

![Portfolio Preview](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Moki+Mark+Portfolio)

## ✨ Features

### 🎨 **Modern UI/UX Design**
- **Dark/Light Mode Toggle** - Seamless theme switching with localStorage persistence
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Powered by Framer Motion for fluid interactions
- **Professional Typography** - Geist font family for clean, modern text
- **Enhanced Text Contrast** - Improved visibility with custom font weights and colors

### 🎭 **Advanced Animations & Interactions**
- **Page Transition Animations** - Smooth page transitions with fade and scale effects
- **Scroll Progress Indicator** - Visual progress bar with animated scroll-to-top button
- **Parallax Background Effects** - Floating geometric shapes that respond to scroll
- **Section Reveal Animations** - Elements animate in as they enter viewport
- **Interactive Hover Effects** - Micro-interactions on buttons, cards, and navigation
- **Floating Elements** - Mouse-following animated icons and particles

### 📊 **Dynamic Content**
- **Animated Counters** - Statistics that count up when scrolled into view
- **Skill Progress Bars** - Animated progress bars showing proficiency levels
- **Interactive Project Cards** - Hover effects with preview and code buttons
- **Loading Skeletons** - Smooth loading states for better perceived performance
- **Optimized Card Layouts** - Improved spacing and height management for better content display

### 📝 **Content Sections**
- **Hero Section** - Professional introduction with contact buttons
- **About Section** - Personal story, values, and journey timeline with enhanced visibility
- **Services Section** - Detailed service offerings with features
- **Skills Section** - Technical expertise with animated progress bars and optimized card layouts
- **Experience Section** - Professional background and achievements
- **Projects Section** - Featured work with interactive cards and reduced heights
- **Testimonials Section** - Client feedback with animated stats
- **Blog Section** - Technical insights and articles
- **Contact Section** - Functional contact form with validation

### 🔧 **Technical Features**
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, structured data
- **Performance Optimized** - Next.js Image optimization, lazy loading
- **Accessibility** - ARIA labels, keyboard navigation, screen reader support
- **TypeScript** - Type-safe development with full IntelliSense support
- **Tailwind CSS** - Utility-first styling with custom dark mode support
- **Visitor Analytics** - Comprehensive tracking system with Supabase integration

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Database:** Supabase (for visitor analytics)
- **Deployment:** Vercel/Netlify ready

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2. **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3. **Set up environment variables**
    Create a `.env.local` file in the root directory:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4. **Set up the database**
    Run the SQL script in `visitors_table.sql` in your Supabase SQL editor to create the visitor tracking table.

5. **Run the development server**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

6. **Open your browser**
    Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── About.tsx
│   │   │   ├── BackToTop.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── FloatingElements.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── LoadingSkeleton.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── PageTransition.tsx
│   │   │   ├── ParallaxBackground.tsx
│   │   │   ├── ProjectModal.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── ProjectSearch.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   ├── SectionReveal.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── SkillProgress.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   ├── Tooltip.tsx
│   │   │   └── VisitorTracker.tsx  # New: Visitor analytics component
│   │   ├── lib/
│   │   │   └── supabase.ts         # New: Supabase client and tracking functions
│   │   ├── favicon.ico
│   │   ├── globals.css          # Global styles and Tailwind imports
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Main page component
│   └── .env.local               # Environment variables (create this)
├── public/                      # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── linkedin-profile.jpg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── visitors_table.sql           # New: Database schema for visitor tracking
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── .gitignore
```

## 🎯 Key Components

### PageTransition
Handles smooth page transitions with fade and scale animations.

### ThemeToggle
Dark/light mode toggle with localStorage persistence and system preference detection.

### ScrollProgress
Visual progress indicator with animated scroll-to-top functionality.

### AnimatedCounter
Counts up numbers when they come into view, perfect for statistics.

### SkillProgress
Animated progress bars for skill levels with shine effects.

### SectionReveal
Reveals content sections with customizable animations as they enter viewport.

### FloatingElements
Mouse-responsive floating icons and particles for visual interest.

### VisitorTracker
Tracks comprehensive visitor analytics including geolocation, device info, session data, and user behavior. Automatically collects data on page visits, route changes, and tab visibility.

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js` or modify the CSS custom properties in `globals.css`.

### Content
Edit personal information, projects, and content in the respective component files.

### Animations
Modify animation parameters in Framer Motion components for different effects.

### Analytics
The visitor tracking system automatically collects comprehensive analytics. To customize what data is tracked, modify the `trackVisitor` function in `src/app/lib/supabase.ts`.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out` (for static export) or `.next` (for SSR)

### Manual Deployment
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Moki Mark**
- Email: moki.dev01@gmail.com
- LinkedIn: [linkedin.com/in/markmoki](https://linkedin.com/in/markmoki)
- Portfolio: [markmoki.vercel.app](https://markmoki.vercel.app)

---

⭐ **Star this repo if you found it helpful!**
