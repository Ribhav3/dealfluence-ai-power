import { UserPlus, Search, MessageCircle, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account as a business or creator in under 2 minutes",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Search,
    title: "Get Matched",
    description: "Our AI finds the perfect influencers for your brand or the best deals for creators",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageCircle,
    title: "Connect & Negotiate",
    description: "Use AI-powered tools to craft pitches and finalize collaboration terms",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Rocket,
    title: "Launch Campaign",
    description: "Execute your collaboration and track results in real-time",
    color: "from-teal-500 to-green-500",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How it{" "}
            <span className="gradient-primary bg-clip-text text-black">
              works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From signup to successful collaboration in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-green-500 opacity-20" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center space-y-4">
                <div className="relative mx-auto w-48 h-48 flex items-center justify-center">
                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-lg shadow-lg z-10">
                    {index + 1}
                  </div>
                  
                  {/* Icon circle */}
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl hover:scale-110 transition-transform`}>
                    <Icon className="w-16 h-16 text-black" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
