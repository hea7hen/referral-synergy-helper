
import { RefreshCw, Users, Link as LinkIcon, Bot, BarChart2, ShieldCheck } from "lucide-react";

export function LandingFeatures() {
  const features = [
    {
      icon: Bot,
      title: "AI Assistant",
      description: "Let our AI assistant handle follow-ups, suggest actions, and optimize your referral strategy."
    },
    {
      icon: Users,
      title: "Mini CRM",
      description: "Keep track of your customers, their referrals, and their engagement with your business."
    },
    {
      icon: LinkIcon,
      title: "Easy Sharing",
      description: "Generate personalized referral links that are easy to share across any platform."
    },
    {
      icon: RefreshCw,
      title: "Automated Workflow",
      description: "Set up automated campaigns and let the system handle the rest."
    },
    {
      icon: BarChart2,
      title: "Detailed Analytics",
      description: "Track performance with comprehensive analytics and actionable insights."
    },
    {
      icon: ShieldCheck,
      title: "Secure Rewards",
      description: "Automatically verify and distribute rewards to your referrers."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-accent/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-[800px]">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in">
              Powerful Features for Growth
            </h2>
            <p className="text-muted-foreground md:text-xl animate-fade-in [animation-delay:200ms]">
              Everything you need to create, manage, and scale your referral program
            </p>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card flex flex-col p-6 h-full animate-fade-in hover-scale"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
