
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Meeting } from '@/types';
import { Calendar, Clock } from 'lucide-react';

interface UpcomingMeetingsProps {
  meetings: Meeting[];
}

const UpcomingMeetings: React.FC<UpcomingMeetingsProps> = ({ meetings }) => {
  const formatDate = (date: string | Date) => {
    if (!date) return '';
    
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Meetings</CardTitle>
        <CardDescription>Your scheduled meetings for the upcoming week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {meetings.map((meeting) => (
            <div key={meeting.id} className="glass-card p-4 rounded-lg overflow-hidden">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-base mb-0.5">{meeting.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 line-clamp-2">
                    {meeting.description}
                  </p>
                  <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(meeting.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{meeting.time}</span>
                    </div>
                    <div>{meeting.duration} min</div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {meetings.length === 0 && (
            <div className="text-center py-6 text-gray-500 dark:text-gray-400">
              <Calendar className="h-12 w-12 mx-auto mb-2 opacity-20" />
              <p>No meetings scheduled</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingMeetings;
