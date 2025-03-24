
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/use-toast";

const LogoutPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Clear any auth tokens or user data here
    
    // Show toast message
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    
    // Redirect to home page
    navigate("/");
  }, [navigate, toast]);
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-lg">Logging you out...</p>
      </div>
    </div>
  );
};

export default LogoutPage;
