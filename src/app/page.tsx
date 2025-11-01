import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';
import FloatingElements from './components/FloatingElements';
import PageTransition from './components/PageTransition';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navigation />
        <ScrollProgress />
        <FloatingElements />
        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
