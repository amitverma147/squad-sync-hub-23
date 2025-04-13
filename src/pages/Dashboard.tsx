
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardStats from '@/components/dashboard/DashboardStats';
import RecentTasks from '@/components/dashboard/RecentTasks';
import TasksOverview from '@/components/dashboard/TasksOverview';
import UpcomingMeetings from '@/components/dashboard/UpcomingMeetings';
import { mockTasks, mockMeetings, mockUsers, getTaskCounts } from '@/data/mockData';
import { UserRole } from '@/types';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  // In a real app, we would fetch this data from an API
  const [currentUser, setCurrentUser] = useState<{ name: string; role: UserRole } | null>(null);
  
  useEffect(() => {
    // Check if user is logged in
    const userStr = sessionStorage.getItem('currentUser');
    if (!userStr) {
      navigate('/login');
      return;
    }
    
    try {
      const user = JSON.parse(userStr);
      setCurrentUser(user);
    } catch (error) {
      console.error('Error parsing user data:', error);
      navigate('/login');
    }
  }, [navigate]);
  
  if (!currentUser) {
    return <div>Loading...</div>;
  }
  
  // Get task statistics
  const { pending, ongoing, scheduled, completed } = getTaskCounts();
  const totalTasks = pending + ongoing + scheduled + completed;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Welcome back, {currentUser.name}</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your team today.
        </p>
      </div>
      
      <DashboardStats
        userRole={currentUser.role}
        teamMembers={mockUsers.filter(u => u.role === 'member').length}
        totalTasks={totalTasks}
        completedTasks={completed}
        upcomingMeetings={mockMeetings.length}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentTasks tasks={mockTasks} />
        <div className="space-y-6">
          <TasksOverview
            pending={pending}
            ongoing={ongoing}
            scheduled={scheduled}
            completed={completed}
          />
          <UpcomingMeetings meetings={mockMeetings} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
