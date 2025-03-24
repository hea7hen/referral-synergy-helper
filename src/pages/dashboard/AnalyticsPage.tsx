
import { BarChart, BarChart2, LineChart, PieChart, TrendingUp } from "lucide-react";
import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { AnalyticsCard } from "../../components/dashboard/AnalyticsCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

// Recharts components
import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart as ReLineChart, Line, PieChart as RePieChart, Pie, Cell } from "recharts";

const AnalyticsPage = () => {
  // Mock data for charts
  const referralData = [
    { month: "Jan", referrals: 30, conversions: 12 },
    { month: "Feb", referrals: 40, conversions: 18 },
    { month: "Mar", referrals: 45, conversions: 20 },
    { month: "Apr", referrals: 55, conversions: 22 },
    { month: "May", referrals: 65, conversions: 28 },
    { month: "Jun", referrals: 75, conversions: 35 },
    { month: "Jul", referrals: 85, conversions: 42 },
  ];
  
  const channelData = [
    { name: "Email", value: 40 },
    { name: "Social", value: 30 },
    { name: "Direct", value: 20 },
    { name: "Other", value: 10 },
  ];
  
  const COLORS = ["#3b82f6", "#8b5cf6", "#f59e0b", "#84cc16"];
  
  return (
    <DashboardLayout title="Analytics">
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-primary/10 p-2">
            <BarChart2 className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Analytics</h2>
            <p className="text-sm text-muted-foreground">
              Track and analyze your referral program performance
            </p>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <AnalyticsCard
            title="Total Referrals"
            value="324"
            trend={{ value: 12, isPositive: true }}
          />
          <AnalyticsCard
            title="Conversion Rate"
            value="15.2%"
            trend={{ value: 3.5, isPositive: true }}
          />
          <AnalyticsCard
            title="Avg. Reward Value"
            value="$42.50"
            trend={{ value: 7.2, isPositive: true }}
          />
          <AnalyticsCard
            title="CLV Increase"
            value="28%"
            trend={{ value: 2.1, isPositive: true }}
          />
        </div>
        
        <Tabs defaultValue="referrals" className="w-full">
          <TabsList className="w-full md:w-auto">
            <TabsTrigger value="referrals" className="flex items-center">
              <BarChart className="mr-2 h-4 w-4" />
              Referrals
            </TabsTrigger>
            <TabsTrigger value="conversions" className="flex items-center">
              <TrendingUp className="mr-2 h-4 w-4" />
              Conversions
            </TabsTrigger>
            <TabsTrigger value="channels" className="flex items-center">
              <PieChart className="mr-2 h-4 w-4" />
              Channels
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="referrals" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Referral Growth</CardTitle>
                <CardDescription>Monthly referral trends over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ReBarChart data={referralData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="referrals" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </ReBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="conversions" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Conversion Trends</CardTitle>
                <CardDescription>Monthly conversion rate over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ReLineChart data={referralData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="conversions" stroke="#8b5cf6" strokeWidth={2} />
                    </ReLineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="channels" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Referral Channels</CardTitle>
                <CardDescription>Distribution of referrals by channel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RePieChart>
                      <Pie
                        data={channelData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={160}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {channelData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RePieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
