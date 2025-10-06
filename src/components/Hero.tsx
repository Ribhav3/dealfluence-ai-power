import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-primary opacity-10" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Matchmaking</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hire influencers{" "}
              <span className="gradient-primary bg-clip-text text-black">
                without the celebrity budget
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              AI-powered matchmaking platform that helps small businesses connect with micro-influencers for authentic, affordable brand promotion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Find Influencers
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Join as a Creator
              </Button>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-2">Trusted by growing brands</p>
              <p className="text-lg font-semibold">
                <span className="gradient-primary bg-clip-text text-black">100+</span> creators • <span className="gradient-primary bg-clip-text text-black">50+</span> brands already signed up
              </p>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative">
            <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full" />
            <img 
              src={heroImage}
              alt="Influencer collaboration illustration"
              className="relative rounded-3xl shadow-2xl w-full animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
