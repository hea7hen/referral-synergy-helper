
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  showSignInLink?: boolean;
  showSignUpLink?: boolean;
}

export function AuthLayout({
  children,
  title,
  subtitle,
  showSignInLink = false,
  showSignUpLink = false,
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-blue-50 to-white p-4">
      <div className="glass-card w-full max-w-md overflow-hidden p-8 animate-scale-in">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-block mb-6">
            <div className="flex items-center justify-center">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-primary text-white flex items-center justify-center">
                <span className="text-2xl font-bold">RS</span>
              </div>
            </div>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h1>
          <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
        </div>
        
        {children}
        
        <div className="mt-6 text-center text-sm">
          {showSignInLink && (
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-primary hover:text-primary/90 transition-colors">
                Sign in
              </Link>
            </p>
          )}
          
          {showSignUpLink && (
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="font-medium text-primary hover:text-primary/90 transition-colors">
                Sign up
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
