
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import NotFoundPage from "@/pages/NotFoundPage";
import { useState, useEffect } from "react";
import { UserRole } from "./types";

const queryClient = new QueryClient();

const App = () => {
  const [currentUser, setCurrentUser] = useState<{ name: string; role: UserRole } | null>(null);
  
  useEffect(() => {
    // Check if user is logged in on app start
    const userStr = sessionStorage.getItem('currentUser');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        setCurrentUser(user);
      } catch (error) {
        console.error('Error parsing user data:', error);
        sessionStorage.removeItem('currentUser');
      }
    }
  }, []);

  // This will be used to protect routes
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!currentUser) {
      return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            
            {/* Protected routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <AppLayout userRole={currentUser?.role || 'member'} userName={currentUser?.name || 'User'} />
                </ProtectedRoute>
              }
            >
              <Route path="/dashboard" element={<Dashboard />} />
              {/* Additional routes will go here */}
              <Route path="/workspaces" element={<div className="p-6">Workspaces Page - Coming Soon</div>} />
              <Route path="/team" element={<div className="p-6">Team Management - Coming Soon</div>} />
              <Route path="/tasks" element={<div className="p-6">Tasks Management - Coming Soon</div>} />
              <Route path="/meetings" element={<div className="p-6">Meeting Scheduler - Coming Soon</div>} />
              <Route path="/settings" element={<div className="p-6">User Settings - Coming Soon</div>} />
              <Route path="/logout" element={<div className="p-6">Logging out...</div>} />
            </Route>

            {/* 404 route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
