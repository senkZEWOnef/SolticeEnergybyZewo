import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProductsPreview from '@/components/ProductsPreview';
import ContactSection from '@/components/ContactSection';
import OfficesSection from '@/components/OfficesSection';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/Chat/ChatWidget';
import AdminWidget from '@/components/AdminWidget';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ProductsPreview />
      <ContactSection />
      <OfficesSection />
      <Footer />
      <ChatWidget />
      <AdminWidget />
    </main>
  );
}
