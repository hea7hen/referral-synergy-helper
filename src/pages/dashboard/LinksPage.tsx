
import { useState } from "react";
import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { ReferralLinkCard } from "../../components/dashboard/ReferralLinkCard";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Plus, Search, Link } from "lucide-react";

const LinksPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data
  const mockReferralLinks = [
    {
      id: "1",
      name: "Summer Campaign",
      url: "https://referralsync.io/r/summer2023",
      clickCount: 243,
      conversionCount: 37,
      createdAt: new Date(2023, 5, 15),
    },
    {
      id: "2",
      name: "Product Launch",
      url: "https://referralsync.io/r/newproduct",
      clickCount: 187,
      conversionCount: 26,
      createdAt: new Date(2023, 7, 10),
    },
    {
      id: "3",
      name: "Holiday Special",
      url: "https://referralsync.io/r/holiday",
      clickCount: 312,
      conversionCount: 45,
      createdAt: new Date(2023, 11, 1),
    },
    {
      id: "4",
      name: "Email Newsletter",
      url: "https://referralsync.io/r/newsletter",
      clickCount: 128,
      conversionCount: 19,
      createdAt: new Date(2023, 8, 20),
    },
    {
      id: "5",
      name: "Social Media",
      url: "https://referralsync.io/r/social",
      clickCount: 421,
      conversionCount: 62,
      createdAt: new Date(2023, 9, 5),
    },
    {
      id: "6",
      name: "Partner Program",
      url: "https://referralsync.io/r/partner",
      clickCount: 175,
      conversionCount: 34,
      createdAt: new Date(2023, 10, 12),
    },
  ];
  
  const filteredLinks = mockReferralLinks.filter((link) =>
    link.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <DashboardLayout title="Referral Links">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-primary/10 p-2">
              <Link className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Referral Links</h2>
              <p className="text-sm text-muted-foreground">
                Create and manage your referral links
              </p>
            </div>
          </div>
          
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Create Link
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search links..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredLinks.map((link) => (
            <ReferralLinkCard key={link.id} {...link} />
          ))}
        </div>
        
        {filteredLinks.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center animate-fade-in">
            <Link className="h-10 w-10 text-muted-foreground/80" />
            <h3 className="mt-4 text-lg font-medium">No links found</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {searchQuery
                ? `No links matching "${searchQuery}"`
                : "Start by creating your first referral link"}
            </p>
            {!searchQuery && (
              <Button className="mt-4">
                <Plus className="mr-2 h-4 w-4" />
                Create Link
              </Button>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default LinksPage;
