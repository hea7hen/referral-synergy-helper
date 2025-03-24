
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-primary text-white flex items-center justify-center">
            <span className="text-sm font-bold">RS</span>
          </div>
          <span className="font-bold text-lg">ReferralSync</span>
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </Link>
          <Link to="/blog" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Blog
          </Link>
          <Link to="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="ghost" size="sm">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/register">Get Started</Link>
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b animate-slide-in-right">
          <div className="container px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/features" 
              className="text-sm font-medium text-foreground py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="text-sm font-medium text-foreground py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/blog" 
              className="text-sm font-medium text-foreground py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-foreground py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="flex flex-col pt-4 border-t gap-2">
              <Button asChild variant="outline" className="w-full" size="sm">
                <Link 
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              </Button>
              <Button asChild className="w-full" size="sm">
                <Link 
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
