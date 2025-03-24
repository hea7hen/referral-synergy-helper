
import { Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface CustomerCardProps {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  referralCount: number;
}

export function CustomerCard({ id, name, email, avatarUrl, referralCount }: CustomerCardProps) {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);

  return (
    <div className="glass-card p-4 hover-scale">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground">{email}</p>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-full bg-primary/10 px-2 py-1">
          <Users className="mr-1 h-3 w-3 text-primary" />
          <span className="text-xs font-medium">{referralCount}</span>
        </div>
      </div>
      
      <div className="mt-4 border-t pt-4">
        <Button asChild variant="ghost" size="sm" className="w-full justify-between">
          <Link to={`/dashboard/customers/${id}`}>
            View Details
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
