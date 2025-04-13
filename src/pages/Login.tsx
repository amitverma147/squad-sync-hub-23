
import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { mockUsers } from '@/data/mockData';

const Login: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    // In a real application, you would make an API call to authenticate the user
    const user = mockUsers.find(u => u.email === email);
    
    if (user) {
      // Mock successful login - in a real app, you'd verify the password
      toast({
        title: 'Login successful',
        description: `Welcome back, ${user.name}!`,
      });
      
      // Store user in session (in a real app, you'd store the JWT)
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      
      // Redirect to dashboard
      navigate('/dashboard');
    } else {
      toast({
        title: 'Login failed',
        description: 'Invalid email or password.',
        variant: 'destructive',
      });
    }
  };

  const handleSignup = (name: string, email: string, password: string) => {
    // In a real application, you would make an API call to register the user
    toast({
      title: 'Registration successful',
      description: 'Your account has been created. You can now log in.',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        <AuthForm onLogin={handleLogin} onSignup={handleSignup} />
      </div>
    </div>
  );
};

export default Login;
