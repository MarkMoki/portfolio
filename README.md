# 🚀 Moki Mark - Full Stack Developer Portfolio

A modern, interactive portfolio website showcasing full-stack development skills with cutting-edge animations and user experience features.

![Portfolio Preview](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Moki+Mark+Portfolio)

## ✨ Features

### 🎨 **Modern UI/UX Design**
- **Dark/Light Mode Toggle** - Seamless theme switching with localStorage persistence
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Powered by Framer Motion for fluid interactions
- **Professional Typography** - Geist font family for clean, modern text

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

### 📝 **Content Sections**
- **Hero Section** - Professional introduction with contact buttons
- **About Section** - Personal story, values, and journey timeline
- **Services Section** - Detailed service offerings with features
- **Skills Section** - Technical expertise with animated progress bars
- **Experience Section** - Professional background and achievements
- **Projects Section** - Featured work with interactive cards
- **Testimonials Section** - Client feedback with animated stats
- **Blog Section** - Technical insights and articles
- **Contact Section** - Functional contact form with validation

### 🔧 **Technical Features**
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, structured data
- **Performance Optimized** - Next.js Image optimization, lazy loading
- **Accessibility** - ARIA labels, keyboard navigation, screen reader support
- **TypeScript** - Type-safe development with full IntelliSense support
- **Tailwind CSS** - Utility-first styling with custom dark mode support

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
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

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── components/          # Reusable UI components
│       │   ├── AnimatedCounter.tsx
│       │   ├── Blog.tsx
│       │   ├── Contact.tsx
│       │   ├── Education.tsx
│       │   ├── Experience.tsx
│       │   ├── FloatingElements.tsx
│       │   ├── Hero.tsx
│       │   ├── LoadingSkeleton.tsx
│       │   ├── Navigation.tsx
│       │   ├── PageTransition.tsx
│       │   ├── ParallaxBackground.tsx
│       │   ├── Projects.tsx
│       │   ├── ScrollProgress.tsx
│       │   ├── SectionReveal.tsx
│       │   ├── Services.tsx
│       │   ├── SkillProgress.tsx
│       │   ├── Skills.tsx
│       │   ├── Testimonials.tsx
│       │   ├── ThemeToggle.tsx
│       │   └── About.tsx
│       ├── globals.css          # Global styles and Tailwind imports
│       ├── layout.tsx           # Root layout with metadata
│       └── page.tsx             # Main page component
├── public/                      # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
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

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js` or modify the CSS custom properties in `globals.css`.

### Content
Edit personal information, projects, and content in the respective component files.

### Animations
Modify animation parameters in Framer Motion components for different effects.

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
- Portfolio: [markmoki.vercel.app.app](https://markmoki.vercel.app.app)

---

⭐ **Star this repo if you found it helpful!**
