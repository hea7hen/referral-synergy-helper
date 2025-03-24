
import { useState } from "react";
import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { CustomerCard } from "../../components/dashboard/CustomerCard";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Plus, Search, Upload, Users } from "lucide-react";

const CustomersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
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
    {
      id: "4",
      name: "Sophia Garcia",
      email: "sophia.garcia@example.com",
      avatarUrl: "",
      referralCount: 15,
    },
    {
      id: "5",
      name: "William Johnson",
      email: "william.johnson@example.com",
      avatarUrl: "",
      referralCount: 3,
    },
    {
      id: "6",
      name: "Olivia Martinez",
      email: "olivia.martinez@example.com",
      avatarUrl: "",
      referralCount: 7,
    },
  ];
  
  const filteredCustomers = mockCustomers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <DashboardLayout title="Customers">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-primary/10 p-2">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Customers</h2>
              <p className="text-sm text-muted-foreground">
                Manage your customers and their referral activity
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button variant="outline" size="sm">
              <Upload className="mr-2 h-4 w-4" />
              Import Customers
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Customer
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCustomers.map((customer) => (
            <CustomerCard key={customer.id} {...customer} />
          ))}
        </div>
        
        {filteredCustomers.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center animate-fade-in">
            <Users className="h-10 w-10 text-muted-foreground/80" />
            <h3 className="mt-4 text-lg font-medium">No customers found</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {searchQuery
                ? `No customers matching "${searchQuery}"`
                : "Start by adding your first customer"}
            </p>
            {!searchQuery && (
              <Button className="mt-4">
                <Plus className="mr-2 h-4 w-4" />
                Add Customer
              </Button>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CustomersPage;
