import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FAQ – FCS",
  description: "Foire aux questions – FCS Froid & Agencement",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background flex items-center justify-center pt-32 pb-20 px-4">
        <div className="text-center max-w-lg">
          <span className="text-xs tracking-[0.3em] uppercase text-gold/70 mb-4 block">FAQ</span>
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-foreground uppercase mb-4">
            Foire aux questions
          </h1>
          <p className="text-muted-foreground/60 font-light text-sm leading-relaxed">
            Cette section sera bientôt disponible.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
