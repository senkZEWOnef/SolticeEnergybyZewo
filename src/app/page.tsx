import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/Chat/ChatWidget';
import AdminWidget from '@/components/AdminWidget';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
      <ChatWidget />
      <AdminWidget />
    </main>
  );
}
