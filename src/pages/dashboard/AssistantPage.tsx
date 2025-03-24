
import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { AiAssistant } from "../../components/dashboard/AiAssistant";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Brain, MessageSquareText, PlusCircle, ZapIcon } from "lucide-react";

const AssistantPage = () => {
  return (
    <DashboardLayout title="AI Assistant">
      <div className="grid gap-6">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100 shadow-sm animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2 h-5 w-5 text-primary" />
              AI Assistant
            </CardTitle>
            <CardDescription>
              Your personal AI assistant helps you manage your referral program by providing insights, 
              automating tasks, and optimizing your campaigns.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="text-lg">Analytics Insights</CardTitle>
              <CardDescription>Get AI-powered insights about your referral campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                <ZapIcon className="mr-2 h-4 w-4" />
                Generate Insights
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="text-lg">Follow-up Tasks</CardTitle>
              <CardDescription>Let AI suggest and create follow-up tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Tasks
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="text-lg">Message Templates</CardTitle>
              <CardDescription>Generate personalized messages for your referrers</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                <MessageSquareText className="mr-2 h-4 w-4" />
                Generate Templates
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold tracking-tight mb-4">Chat with AI Assistant</h2>
          <AiAssistant />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AssistantPage;
