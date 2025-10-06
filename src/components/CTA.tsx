import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("You're on the waitlist! We'll be in touch soon.", {
        description: "Get ready for early access to Adbandhu",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-5" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-12 md:p-16 text-center space-y-8 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to{" "}
              <span className="gradient-primary bg-clip-text text-black">
                get started?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of businesses and creators already using Adbandhu to build authentic partnerships
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-base"
                required
              />
              <Button type="submit" variant="hero" size="lg" className="group">
                Join Waitlist
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                For Businesses
              </Button>
              <Button variant="outline" size="lg">
                For Creators
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Launching soon • No credit card required • Free to join
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
