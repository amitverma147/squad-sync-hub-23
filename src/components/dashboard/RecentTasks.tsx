
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Task, TaskStatus } from '@/types';

interface RecentTasksProps {
  tasks: Task[];
}

const RecentTasks: React.FC<RecentTasksProps> = ({ tasks }) => {
  const getStatusColor = (status: TaskStatus) => {
    switch (status) {
      case 'pending':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'scheduled':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'medium':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const formatDeadline = (deadline: string | Date) => {
    if (!deadline) return 'No deadline';
    
    const date = new Date(deadline);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Recent Tasks</CardTitle>
        <CardDescription>Your team's most recent tasks</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-auto max-h-[400px]">
          <table className="w-full">
            <thead className="bg-muted/50 sticky top-0">
              <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                <th className="p-3 text-xs uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">Task</th>
                <th className="p-3 text-xs uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">Assignee</th>
                <th className="p-3 text-xs uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">Deadline</th>
                <th className="p-3 text-xs uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">Status</th>
                <th className="p-3 text-xs uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400">Priority</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-muted/30">
                  <td className="p-3 text-sm">
                    <div className="font-medium">{task.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[200px]">
                      {task.description}
                    </div>
                  </td>
                  <td className="p-3 text-sm">{task.assignedTo}</td>
                  <td className="p-3 text-sm">{formatDeadline(task.deadline)}</td>
                  <td className="p-3 text-sm">
                    <Badge variant="secondary" className={`${getStatusColor(task.status)}`}>
                      {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="p-3 text-sm">
                    <Badge variant="secondary" className={`${getPriorityColor(task.priority)}`}>
                      {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                    </Badge>
                  </td>
                </tr>
              ))}
              
              {tasks.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-3 text-center text-sm text-gray-500 dark:text-gray-400">
                    No tasks found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTasks;
