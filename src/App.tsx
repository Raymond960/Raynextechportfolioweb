import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tools from './components/Tools';
import Portfolio from './components/Portfolio';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0A2342] flex flex-col selection:bg-[#FF6B35] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Tools />
        <Portfolio />
        <Certification />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
