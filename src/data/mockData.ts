
import { User, Workspace, Task, Meeting } from '@/types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Admin',
    email: 'admin@example.com',
    role: 'admin',
    avatar: ''
  },
  {
    id: '2',
    name: 'Sarah Leader',
    email: 'leader@example.com',
    role: 'leader',
    avatar: ''
  },
  {
    id: '3',
    name: 'Mike Member',
    email: 'member@example.com',
    role: 'member',
    avatar: ''
  },
  {
    id: '4',
    name: 'Emily Member',
    email: 'emily@example.com',
    role: 'member',
    avatar: ''
  },
  {
    id: '5',
    name: 'Alex Member',
    email: 'alex@example.com',
    role: 'member',
    avatar: ''
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design new landing page',
    description: 'Create a modern landing page design for the marketing campaign.',
    assignedTo: 'Mike Member',
    deadline: '2025-05-01',
    priority: 'high',
    status: 'ongoing',
    createdAt: '2025-04-01',
    updatedAt: '2025-04-05'
  },
  {
    id: '2',
    title: 'Implement authentication',
    description: 'Set up user authentication with JWT tokens.',
    assignedTo: 'Sarah Leader',
    deadline: '2025-04-25',
    priority: 'high',
    status: 'pending',
    createdAt: '2025-04-02',
    updatedAt: '2025-04-02'
  },
  {
    id: '3',
    title: 'Write API documentation',
    description: 'Document all API endpoints and their parameters.',
    assignedTo: 'Emily Member',
    deadline: '2025-05-10',
    priority: 'medium',
    status: 'scheduled',
    createdAt: '2025-04-03',
    updatedAt: '2025-04-07'
  },
  {
    id: '4',
    title: 'Fix navigation bug',
    description: 'Fix the navigation dropdown menu bug on mobile devices.',
    assignedTo: 'Alex Member',
    deadline: '2025-04-18',
    priority: 'medium',
    status: 'completed',
    createdAt: '2025-03-28',
    updatedAt: '2025-04-10'
  },
  {
    id: '5',
    title: 'Optimize database queries',
    description: 'Improve the performance of database queries on the user profile page.',
    assignedTo: 'Mike Member',
    deadline: '2025-05-05',
    priority: 'low',
    status: 'ongoing',
    createdAt: '2025-04-06',
    updatedAt: '2025-04-08'
  }
];

export const mockMeetings: Meeting[] = [
  {
    id: '1',
    title: 'Weekly Sprint Planning',
    description: 'Plan tasks for the upcoming sprint and review progress from last week.',
    date: '2025-04-20',
    time: '10:00 AM',
    duration: 60
  },
  {
    id: '2',
    title: 'Design Review',
    description: 'Review new design proposals for the mobile app.',
    date: '2025-04-22',
    time: '2:00 PM',
    duration: 45
  },
  {
    id: '3',
    title: 'Stakeholder Update',
    description: 'Present project progress to stakeholders.',
    date: '2025-04-25',
    time: '11:30 AM',
    duration: 90
  }
];

export const mockWorkspaces: Workspace[] = [
  {
    id: '1',
    name: 'Marketing Campaign',
    leader: mockUsers[1], // Sarah Leader
    members: [mockUsers[2], mockUsers[3]], // Mike Member and Emily Member
    tasks: [mockTasks[0], mockTasks[4]], // Landing page design and DB optimization
    meetings: [mockMeetings[1]], // Design Review
    createdAt: '2025-03-15',
    updatedAt: '2025-04-05'
  },
  {
    id: '2',
    name: 'Product Development',
    leader: mockUsers[1], // Sarah Leader
    members: [mockUsers[2], mockUsers[4]], // Mike Member and Alex Member
    tasks: [mockTasks[1], mockTasks[2], mockTasks[3]], // Authentication, API docs, and navigation bug
    meetings: [mockMeetings[0], mockMeetings[2]], // Sprint planning and stakeholder update
    createdAt: '2025-02-10',
    updatedAt: '2025-04-08'
  }
];

export const getTaskCounts = () => {
  let pending = 0;
  let ongoing = 0;
  let scheduled = 0;
  let completed = 0;
  
  mockTasks.forEach(task => {
    switch(task.status) {
      case 'pending':
        pending++;
        break;
      case 'ongoing':
        ongoing++;
        break;
      case 'scheduled':
        scheduled++;
        break;
      case 'completed':
        completed++;
        break;
    }
  });
  
  return { pending, ongoing, scheduled, completed };
};
