
import { BarChart, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function AnalyticsCard({ 
  title, 
  value, 
  description, 
  icon, 
  trend, 
  className 
}: AnalyticsCardProps) {
  return (
    <div className={cn("glass-card p-6 animate-scale-in", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
          {icon || <BarChart className="h-4 w-4 text-primary" />}
        </div>
      </div>
      <div className="mt-2">
        <p className="text-3xl font-bold">{value}</p>
        {trend && (
          <div className="mt-1 flex items-center gap-1 text-xs">
            {trend.isPositive ? (
              <>
                <ArrowUp className="h-3 w-3 text-green-500" />
                <span className="text-green-500">{trend.value}%</span>
              </>
            ) : (
              <>
                <ArrowDown className="h-3 w-3 text-red-500" />
                <span className="text-red-500">{trend.value}%</span>
              </>
            )}
            <span className="text-muted-foreground">vs last period</span>
          </div>
        )}
        {description && (
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
