
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Users, Lightbulb, Trophy, Target, ArrowRight } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Sarah has over 10 years of experience in content creation and digital marketing.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Michael leads our technical team, ensuring Blogzy stays at the cutting edge of technology.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Emily Wilson",
      role: "Head of Content",
      bio: "Emily oversees content strategy and quality across the Blogzy platform.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "David Rodriguez",
      role: "Marketing Director",
      bio: "David helps bloggers grow their audience through effective marketing strategies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We're constantly pushing the boundaries of what's possible in blogging.",
      icon: Lightbulb
    },
    {
      title: "Community",
      description: "We believe in the power of connecting writers and readers around shared interests.",
      icon: Users
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our platform to our support.",
      icon: Trophy
    },
    {
      title: "Purpose",
      description: "We're dedicated to helping bloggers achieve their goals and make an impact.",
      icon: Target
    }
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
            <Link to="/blog" className="text-muted-foreground hover:text-primary font-medium">Blog</Link>
            <Link to="/about" className="text-foreground hover:text-primary font-medium">About</Link>
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

      {/* About Hero */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Our Story
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Founded in 2020, Blogzy was created with a simple mission: to make blogging accessible, enjoyable, and rewarding for everyone.
              </p>
              <Button>
                Join Our Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Blogzy office" 
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              At Blogzy, we believe that everyone has a story worth sharing. Our mission is to empower writers of all backgrounds to find their voice, connect with their audience, and make an impact through the power of words.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">What We Do</h3>
              <p className="text-muted-foreground mb-6">
                We provide a state-of-the-art blogging platform that combines powerful tools with an intuitive interface, allowing writers to focus on what they do best: creating compelling content.
              </p>
              <p className="text-muted-foreground mb-6">
                From seasoned bloggers to first-time writers, our platform is designed to help you engage readers, grow your audience, and even monetize your content.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Why We Do It</h3>
              <p className="text-muted-foreground mb-6">
                We're passionate about the transformative power of blogging. We've seen how it can launch careers, build communities, spread important ideas, and create opportunities for people around the world.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team is committed to breaking down the technical barriers that prevent great stories from being told and connecting writers with the readers who need to hear them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-sm">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden shadow-sm">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-primary rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Blogging Journey?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of writers who are sharing their stories and growing their audience with Blogzy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">Get Started</Button>
              <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
            </div>
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
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/tutorials" className="text-muted-foreground hover:text-primary">Tutorials</Link></li>
                <li><Link to="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
                <li><Link to="/support" className="text-muted-foreground hover:text-primary">Support</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
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

export default About;
