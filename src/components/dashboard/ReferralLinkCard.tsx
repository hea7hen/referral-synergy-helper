
import { Copy, ExternalLink, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { useToast } from "../../hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface ReferralLinkCardProps {
  id: string;
  name: string;
  url: string;
  clickCount: number;
  conversionCount: number;
  createdAt: Date;
}

export function ReferralLinkCard({
  id,
  name,
  url,
  clickCount,
  conversionCount,
  createdAt,
}: ReferralLinkCardProps) {
  const { toast } = useToast();
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Link copied",
      description: "The referral link has been copied to your clipboard.",
    });
  };
  
  return (
    <div className="glass-card p-4 hover-scale">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Created {createdAt.toLocaleDateString()}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More options</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={handleCopyLink}>
              <Copy className="mr-2 h-4 w-4" />
              Copy link
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ExternalLink className="mr-2 h-4 w-4" />
              Open in new tab
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="mt-4 rounded-md bg-muted p-2">
        <div className="flex items-center text-xs">
          <span className="truncate">{url}</span>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto h-6 w-6"
            onClick={handleCopyLink}
          >
            <Copy className="h-3 w-3" />
            <span className="sr-only">Copy</span>
          </Button>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between text-sm">
        <div>
          <p className="text-muted-foreground">Clicks</p>
          <p className="font-medium">{clickCount}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Conversions</p>
          <p className="font-medium">{conversionCount}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Rate</p>
          <p className="font-medium">
            {clickCount > 0
              ? `${((conversionCount / clickCount) * 100).toFixed(1)}%`
              : "0%"}
          </p>
        </div>
      </div>
    </div>
  );
}
