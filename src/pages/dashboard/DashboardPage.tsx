
import { BarChart2, Link as LinkIcon, Users } from "lucide-react";
import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { AnalyticsCard } from "../../components/dashboard/AnalyticsCard";
import { AiAssistant } from "../../components/dashboard/AiAssistant";
import { CustomerCard } from "../../components/dashboard/CustomerCard";
import { ReferralLinkCard } from "../../components/dashboard/ReferralLinkCard";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  // Mock data
  const mockCustomers = [
    {
      id: "1",
      name: "John Smith",
      email: "john.smith@example.com",
      avatarUrl: "",
      referralCount: 12,
    },
    {
      id: "2",
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      avatarUrl: "",
      referralCount: 8,
    },
    {
      id: "3",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      avatarUrl: "",
      referralCount: 5,
    },
  ];
  
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
  ];
  
  return (
    <DashboardLayout title="Dashboard">
      <div className="grid gap-6">
        <div className="grid gap-6 md:grid-cols-3">
          <AnalyticsCard
            title="Total Referrals"
            value="324"
            icon={<Users className="h-4 w-4 text-primary" />}
            trend={{ value: 12, isPositive: true }}
          />
          <AnalyticsCard
            title="Conversion Rate"
            value="15.2%"
            icon={<BarChart2 className="h-4 w-4 text-primary" />}
            trend={{ value: 3.5, isPositive: true }}
          />
          <AnalyticsCard
            title="Active Links"
            value="12"
            icon={<LinkIcon className="h-4 w-4 text-primary" />}
            trend={{ value: 2, isPositive: false }}
          />
        </div>
        
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold tracking-tight">AI Assistant</h2>
            </div>
            <AiAssistant />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold tracking-tight">Recent Customers</h2>
              <Button asChild variant="outline" size="sm">
                <Link to="/dashboard/customers">View all</Link>
              </Button>
            </div>
            <div className="grid gap-4">
              {mockCustomers.map((customer) => (
                <CustomerCard key={customer.id} {...customer} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Active Referral Links</h2>
            <Button asChild variant="outline" size="sm">
              <Link to="/dashboard/links">View all</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {mockReferralLinks.map((link) => (
              <ReferralLinkCard key={link.id} {...link} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
