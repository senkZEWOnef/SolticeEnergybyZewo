import Header from '@/components/Header';
import Products from '@/components/Products';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/Chat/ChatWidget';
import AdminWidget from '@/components/AdminWidget';

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Products />
      <Footer />
      <ChatWidget />
      <AdminWidget />
    </main>
  );
}