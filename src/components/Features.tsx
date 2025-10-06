import { Target, MessageSquare, Handshake, TrendingUp, BarChart3, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Target,
    title: "Smart AI Matchmaking",
    description: "Get matched with relevant influencers based on your niche, target audience, and budget using advanced AI algorithms.",
  },
  {
    icon: MessageSquare,
    title: "Auto-Generated Pitch Templates",
    description: "AI helps you craft the perfect pitch message and collaboration offers that convert.",
  },
  {
    icon: Handshake,
    title: "Built-in Deal Assistant",
    description: "Negotiate and finalize deals with our built-in assistant supporting paid, barter, and affiliate arrangements.",
  },
  {
    icon: BarChart3,
    title: "Creator Profile Analytics",
    description: "View detailed engagement stats, audience demographics, and performance metrics for every creator.",
  },
  {
    icon: TrendingUp,
    title: "Campaign Dashboard",
    description: "Track all your active deals, monitor performance, and measure ROI from a single dashboard.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "From signup to your first collab in minutes. No complex onboarding, just results.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 gradient-subtle">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything you need to{" "}
            <span className="gradient-primary bg-clip-text text-black">
              succeed
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for modern businesses and creators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 hover:-translate-y-1"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
