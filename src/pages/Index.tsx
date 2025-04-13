
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const userStr = sessionStorage.getItem('currentUser');
    if (userStr) {
      // If logged in, navigate to dashboard
      navigate('/dashboard');
    } else {
      // If not logged in, navigate to login page
      navigate('/login');
    }
  }, [navigate]);

  // Show a loading screen while redirecting
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <Logo size="large" className="mb-6" />
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">SquadSync</h1>
        <p className="text-muted-foreground">Loading your team's workspace...</p>
      </div>
    </div>
  );
};

export default Index;
