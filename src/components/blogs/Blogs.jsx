"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "./BlogCard";
import "../FAQ.css";
import Link from "next/link";
// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "10 Ways Digital Transformation Can Boost Your Business Growth",
    excerpt:
      "Discover how implementing digital transformation strategies can revolutionize your business operations and drive substantial growth in today's competitive market.",
    category: "Digital Transformation",
    author: "Sarah Johnson",
    authorRole: "Digital Strategist",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "Mar 15, 2023",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "The Future of Cybersecurity: Trends to Watch in 2023",
    excerpt:
      "Stay ahead of cyber threats with our comprehensive analysis of emerging cybersecurity trends that will shape the digital landscape in the coming year.",
    category: "Cybersecurity",
    author: "Michael Chen",
    authorRole: "Security Expert",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "Feb 28, 2023",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "How AI is Revolutionizing Data Analytics",
    excerpt:
      "Explore the transformative impact of artificial intelligence on data analytics and how businesses can leverage these technologies to gain competitive advantages.",
    category: "Data Analytics",
    author: "Emily Rodriguez",
    authorRole: "AI Specialist",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "Feb 12, 2023",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Building Mobile Apps That Users Love",
    excerpt:
      "Learn the essential principles of user-centered design and development that will help you create mobile applications with exceptional user experiences.",
    category: "Mobile Development",
    author: "David Kim",
    authorRole: "UX Designer",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "Jan 25, 2023",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "The Role of Cloud Computing in Modern Business",
    excerpt:
      "Understand how cloud computing is transforming business operations, reducing costs, and enabling scalability for companies of all sizes.",
    category: "Cloud Solutions",
    author: "Jessica Taylor",
    authorRole: "Cloud Architect",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "Jan 10, 2023",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "Implementing Agile Methodologies for Project Success",
    excerpt:
      "Discover how agile methodologies can improve project outcomes, team collaboration, and client satisfaction in software development and beyond.",
    category: "Project Management",
    author: "Robert Wilson",
    authorRole: "Agile Coach",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "Dec 18, 2022",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false,
  },
];

export default function BlogSection() {
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [activeCategory, setActiveCategory] = useState("All");
  const [blogPosts, setBlogPosts] = useState([]);

  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => Math.min(prev + 3, filteredPosts.length));
  };

  useEffect(() => {
    async function getBlogs() {
      try {
        const response = await fetch(`/api/blog`);
        const data = await response.json();
        console.log(data);
        setBlogPosts(data.posts);
      } catch (err) {
        console.error(err, 10188);
      }
    }
    getBlogs();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="blogs" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-sub">Latest Insights & News</h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold text-muted-foreground leading-tight sm:leading-normal max-w-full sm:max-w-3xl sm:text-left">
              Stay updated with the latest trends, insights, and news in
              technology and digital innovation written by our members.
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setActiveCategory(category);
                setVisiblePosts(3);
              }}
              className="rounded-full"
              style={{
                background:
                  activeCategory === category ? `hsl(221.2 83.2% 53.3%)` : "",
                color: activeCategory === category ? "white" : "",
                cursor: "pointer",
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post (if any) */}
        {filteredPosts.some((post) => post.featured) &&
          activeCategory === "All" && (
            <div className="mb-16">
              {filteredPosts
                .filter((post) => post.featured)
                .slice(0, 1)
                .map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="grid md:grid-cols-2 gap-8 bg-muted/30 rounded-2xl overflow-hidden shadow-lg">
                      <div className="relative h-64 md:h-auto">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="mb-4">
                          <span
                            className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full"
                            style={{
                              background: `hsl(221.2 83.2% 53.3%)`,
                              color: "white",
                            }}
                          >
                            Featured
                          </span>
                          <span
                            className="inline-block ml-2 bg-muted text-muted-foreground text-sm font-medium px-3 py-1 rounded-full"
                            style={{
                              backgroundColor: "#101d28",
                              color: "#fff",
                            }}
                          >
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center mb-6">
                          <div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span className="mr-3">{post.date}</span>
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        <Link href={`/blog/${filteredPosts[0]?.id}`}>
                          <Button
                            className="w-fit group"
                            style={{
                              background: `hsl(221.2 83.2% 53.3%)`,
                              color: "white",
                              cursor: "pointer",
                              // backgroundColor: "#101d28",
                              // color: "#fff",
                            }}
                          >
                            Read Article
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          )}

        {/* Blog Posts Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredPosts
            .filter((post) => !post.featured || activeCategory !== "All")
            .slice(0, visiblePosts)
            .map((post, index) => (
              <BlogCard key={post._id} post={post} index={index} />
            ))}
        </motion.div>

        {/* Load More Button */}
        {visiblePosts <
          filteredPosts.filter(
            (post) => !post.featured || activeCategory !== "All"
          ).length && (
          <div className="mt-12 text-center">
            <Link href={"/blog"}>
              <Button
                onClick={loadMorePosts}
                variant="outline"
                size="lg"
                className="group"
                style={{
                  background: `hsl(221.2 83.2% 53.3%)`,
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Show All Blogs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
