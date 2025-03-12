import Navbar from "@/components/Navbar";
import BlogSection from "@/components/blogs/Blogs";
import Footer from "@/components/footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="pt-32 pb-12 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, news, and resources to help you stay ahead in the
              digital world
            </p>
          </div>
        </div>
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
