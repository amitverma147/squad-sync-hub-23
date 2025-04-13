
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface TasksOverviewProps {
  pending: number;
  ongoing: number;
  scheduled: number;
  completed: number;
}

const TasksOverview: React.FC<TasksOverviewProps> = ({
  pending,
  ongoing,
  scheduled,
  completed
}) => {
  const total = pending + ongoing + scheduled + completed;
  
  const calculatePercentage = (value: number) => {
    if (total === 0) return 0;
    return Math.round((value / total) * 100);
  };

  const pendingPercentage = calculatePercentage(pending);
  const ongoingPercentage = calculatePercentage(ongoing);
  const scheduledPercentage = calculatePercentage(scheduled);
  const completedPercentage = calculatePercentage(completed);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tasks Overview</CardTitle>
        <CardDescription>Distribution of tasks by status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Pending</span>
              <span className="text-muted-foreground">{pending} tasks ({pendingPercentage}%)</span>
            </div>
            <Progress value={pendingPercentage} className="h-2 bg-amber-100" indicatorClassName="bg-amber-500" />
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Ongoing</span>
              <span className="text-muted-foreground">{ongoing} tasks ({ongoingPercentage}%)</span>
            </div>
            <Progress value={ongoingPercentage} className="h-2 bg-blue-100" indicatorClassName="bg-blue-500" />
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Scheduled</span>
              <span className="text-muted-foreground">{scheduled} tasks ({scheduledPercentage}%)</span>
            </div>
            <Progress value={scheduledPercentage} className="h-2 bg-purple-100" indicatorClassName="bg-purple-500" />
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Completed</span>
              <span className="text-muted-foreground">{completed} tasks ({completedPercentage}%)</span>
            </div>
            <Progress value={completedPercentage} className="h-2 bg-green-100" indicatorClassName="bg-green-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TasksOverview;
