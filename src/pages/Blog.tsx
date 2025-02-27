
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, User, Filter, ChevronDown } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Better Blog Writing",
      excerpt: "Learn how to craft engaging blog posts that captivate your audience from start to finish.",
      author: "Emma Wilson",
      date: "May 15, 2023",
      category: "Writing",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Future of Content Creation in 2023",
      excerpt: "Explore emerging trends in content creation and how they will shape the digital landscape.",
      author: "Alex Johnson",
      date: "June 2, 2023",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "How to Build a Successful Blog from Scratch",
      excerpt: "A step-by-step guide to creating, growing, and monetizing your blog in today's competitive market.",
      author: "Sarah Parker",
      date: "June 10, 2023",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      readTime: "8 min read"
    },
    {
      id: 4,
      title: "SEO Strategies That Actually Work in 2023",
      excerpt: "Discover effective SEO tactics that can help your content rank higher in search results.",
      author: "Mark Robinson",
      date: "July 5, 2023",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Creating a Content Calendar That Works",
      excerpt: "Learn how to plan and organize your content to maintain consistency and quality.",
      author: "Lisa Chen",
      date: "July 8, 2023",
      category: "Planning",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "The Psychology Behind Viral Content",
      excerpt: "Understand what makes content go viral and how to create shareable posts for your blog.",
      author: "David Miller",
      date: "July 12, 2023",
      category: "Psychology",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      readTime: "5 min read"
    },
  ];

  // Categories data
  const categories = [
    "All", "Writing", "Trends", "Strategy", "SEO", 
    "Planning", "Psychology", "Monetization"
  ];
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="border-b sticky top-0 z-10 bg-background">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">Blogzy</Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-primary font-medium">Home</Link>
            <Link to="/blog" className="text-foreground hover:text-primary font-medium">Blog</Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary font-medium">About</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary font-medium">Contact</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Search className="h-5 w-5" />
            </Button>
            <Button>Sign In</Button>
          </div>
        </div>
      </header>

      {/* Blog Header */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of articles, tips, and insights about blogging, content creation, and digital marketing.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" className="flex gap-2">
                Latest
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="h-full">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <span className="absolute top-3 left-3 bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                </div>
                <CardHeader className="p-4 pb-0">
                  <CardTitle className="text-xl line-clamp-2 hover:text-primary cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center text-muted-foreground text-sm mt-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex items-center">
                  <div className="flex items-center">
                    <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center mr-2">
                      <User className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 mt-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Blogzy</h3>
              <p className="text-muted-foreground mb-4">
                A modern platform for bloggers to express ideas, connect with readers, and grow their audience.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.slice(1, 6).map((category, index) => (
                  <li key={index}>
                    <Link to={`/category/${category.toLowerCase()}`} className="text-muted-foreground hover:text-primary">
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                <li><Link to="/cookies" className="text-muted-foreground hover:text-primary">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© 2023 Blogzy. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
