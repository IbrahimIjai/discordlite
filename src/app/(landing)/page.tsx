import Header from "@/components/layout/Header";
import Heros from "@/views/publicroutes/Heros";
import Features from "@/views/publicroutes/Features";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <Heros />
      <Features />
      <Footer />
    </div>
  );
}
