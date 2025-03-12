import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkingProcess from "@/components/WorkingProcess";
import Testimonials from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import Footer from "@/components/footer";
import BlogSection from "@/components/blogs/Blogs";
import ContactFormSection from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WorkingProcess />
      <Testimonials />
      <BlogSection />
      <FAQ />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
