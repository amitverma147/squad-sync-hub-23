
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { UserRole } from '@/types';
import { 
  Users, 
  CheckSquare, 
  Clock,
  Calendar
} from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, description }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <div className="h-4 w-4 text-muted-foreground">{icon}</div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

interface DashboardStatsProps {
  userRole: UserRole;
  teamMembers: number;
  totalTasks: number;
  completedTasks: number;
  upcomingMeetings: number;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({
  userRole,
  teamMembers,
  totalTasks,
  completedTasks,
  upcomingMeetings
}) => {
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {(userRole === 'admin' || userRole === 'leader') && (
        <StatCard
          title="Team Members"
          value={teamMembers}
          icon={<Users className="h-4 w-4" />}
          description="Active team members"
        />
      )}
      <StatCard
        title="Total Tasks"
        value={totalTasks}
        icon={<CheckSquare className="h-4 w-4" />}
        description="Tasks assigned to your team"
      />
      <StatCard
        title="Completion Rate"
        value={`${completionRate}%`}
        icon={<Clock className="h-4 w-4" />}
        description={`${completedTasks} of ${totalTasks} tasks completed`}
      />
      <StatCard
        title="Upcoming Meetings"
        value={upcomingMeetings}
        icon={<Calendar className="h-4 w-4" />}
        description="Meetings in the next 7 days"
      />
    </div>
  );
};

export default DashboardStats;
