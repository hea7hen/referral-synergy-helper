
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function LandingHero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary animate-fade-in">
              Introducing ReferralSync
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in [animation-delay:200ms]">
              The <span className="text-primary">Smarter</span> Way to Grow Through Referrals
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-fade-in [animation-delay:400ms]">
              Automate your referral program with AI and watch your business grow exponentially. 
              Turn every customer into a powerful advocate.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:600ms]">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/register">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-16 flex justify-center animate-fade-in [animation-delay:800ms]">
        <div className="relative mx-auto glass-card overflow-hidden rounded-xl border border-gray-200 bg-white/50 shadow-md md:w-[800px]">
          <div className="aspect-[16/9] overflow-hidden rounded-t-xl bg-gray-50">
            <img 
              src="https://framerusercontent.com/images/AqRKfrmVtnXkjpXG7zCgqKFXM.jpg" 
              alt="Dashboard Preview" 
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
