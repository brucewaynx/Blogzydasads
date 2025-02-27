
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useToast } from "@/hooks/use-toast";
import { Search, ArrowRight, MessageSquare, Heart, User, ChevronRight } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "Thanks for subscribing to our newsletter!",
    });
    
    setEmail("");
  };

  // Featured posts data
  const featuredPosts = [
    {
      id: 1,
      title: "10 Tips for Better Blog Writing",
      excerpt: "Learn how to craft engaging blog posts that captivate your audience from start to finish.",
      author: "Emma Wilson",
      date: "May 15, 2023",
      category: "Writing",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      readTime: "5 min read",
      comments: 24,
      likes: 128
    },
    {
      id: 2,
      title: "The Future of Content Creation in 2023",
      excerpt: "Explore emerging trends in content creation and how they will shape the digital landscape.",
      author: "Alex Johnson",
      date: "June 2, 2023",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      readTime: "7 min read",
      comments: 18,
      likes: 96
    },
    {
      id: 3,
      title: "How to Build a Successful Blog from Scratch",
      excerpt: "A step-by-step guide to creating, growing, and monetizing your blog in today's competitive market.",
      author: "Sarah Parker",
      date: "June 10, 2023",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      readTime: "8 min read",
      comments: 32,
      likes: 145
    },
  ];

  // Recent posts data
  const recentPosts = [
    {
      id: 1,
      title: "SEO Strategies That Actually Work in 2023",
      excerpt: "Discover effective SEO tactics that can help your content rank higher in search results.",
      author: "Mark Robinson",
      date: "July 5, 2023",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      readTime: "6 min read"
    },
    {
      id: 2,
      title: "Creating a Content Calendar That Works",
      excerpt: "Learn how to plan and organize your content to maintain consistency and quality.",
      author: "Lisa Chen",
      date: "July 8, 2023",
      category: "Planning",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "The Psychology Behind Viral Content",
      excerpt: "Understand what makes content go viral and how to create shareable posts for your blog.",
      author: "David Miller",
      date: "July 12, 2023",
      category: "Psychology",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "How to Monetize Your Blog in 2023",
      excerpt: "Explore different strategies to generate income from your blog and maximize your revenue.",
      author: "Jennifer Lee",
      date: "July 18, 2023",
      category: "Monetization",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      readTime: "7 min read"
    },
  ];

  // Categories data
  const categories = [
    "Writing", "Trends", "Strategy", "SEO", "Planning", 
    "Psychology", "Monetization", "Design", "Marketing", "Technology"
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
            <Link to="/" className="text-foreground hover:text-primary font-medium">Home</Link>
            <Link to="/blog" className="text-muted-foreground hover:text-primary font-medium">Blog</Link>
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Find Your Voice, Share Your Story
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A modern platform for bloggers to express ideas, connect with readers, and grow their audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">Get Started</Button>
                <Button size="lg" variant="outline" className="px-8">
                  Explore Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Blogging" 
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-sm">Active Writers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Posts</h2>
            <Link to="/blog" className="text-primary flex items-center hover:underline">
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent>
              {featuredPosts.map((post) => (
                <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="h-full">
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
                    <CardFooter className="p-4 pt-0 flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center mr-2">
                          <User className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-muted-foreground">
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          <span className="text-xs">{post.comments}</span>
                        </div>
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          <span className="text-xs">{post.likes}</span>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-6">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Recent Posts</h2>
            <Link to="/blog" className="text-primary flex items-center hover:underline">
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts.map((post) => (
              <Card key={post.id} className="h-full">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <span className="absolute top-3 left-3 bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                </div>
                <CardHeader className="p-4 pb-0">
                  <CardTitle className="text-lg line-clamp-2 hover:text-primary cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center text-muted-foreground text-sm mt-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex items-center">
                  <div className="flex items-center">
                    <div className="bg-muted rounded-full h-7 w-7 flex items-center justify-center mr-2">
                      <User className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-medium">{post.author}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-10">Popular Categories</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                to={`/category/${category.toLowerCase()}`}
                className="bg-card hover:bg-primary hover:text-primary-foreground transition-colors duration-200 rounded-lg p-4 text-center shadow-sm"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-primary/5 rounded-2xl p-8 lg:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground mb-8">
                Get the latest blog posts and updates delivered directly to your inbox.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow"
                />
                <Button type="submit">Subscribe</Button>
              </form>
              
              <p className="text-sm text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
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
                {categories.slice(0, 5).map((category, index) => (
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

export default Index;
