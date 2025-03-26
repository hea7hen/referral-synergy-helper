
import { Home, Users, Link as LinkIcon, BarChart3, Settings, Zap, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";

interface DashboardSidebarProps {
  open: boolean;
  onToggle: () => void;
}

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "AI Assistant",
    href: "/dashboard/assistant",
    icon: MessageSquare,
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Referral Links",
    href: "/dashboard/links",
    icon: LinkIcon,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Integrations",
    href: "/dashboard/integrations",
    icon: Zap,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function DashboardSidebar({ open, onToggle }: DashboardSidebarProps) {
  const location = useLocation();
  
  return (
    <aside 
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex flex-col border-r bg-background transition-all duration-300 ease-in-out",
        open ? "w-64" : "w-16"
      )}
    >
      <div className="flex h-16 items-center border-b px-4 justify-between">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-primary text-white flex items-center justify-center">
            <span className="text-sm font-bold">RS</span>
          </div>
          {open && (
            <span className="font-bold text-lg text-foreground animate-fade-in">
              ReferralSync
            </span>
          )}
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onToggle}
          className="ml-auto"
          aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
        >
          {open ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>
      
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-1 px-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "group flex h-10 items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                location.pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                !open && "justify-center px-0"
              )}
              title={!open ? item.title : undefined}
            >
              <item.icon className={cn("h-5 w-5", !open && "h-6 w-6")} />
              {open && <span className="ml-3">{item.title}</span>}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="mt-auto p-4 border-t">
        {open ? (
          <Button variant="outline" className="w-full" size="sm">
            <LinkIcon className="mr-2 h-4 w-4" />
            Create Referral Link
          </Button>
        ) : (
          <Button variant="outline" size="icon" className="mx-auto" title="Create Referral Link">
            <LinkIcon className="h-4 w-4" />
          </Button>
        )}
      </div>
    </aside>
  );
}
