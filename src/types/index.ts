
export type UserRole = 'admin' | 'leader' | 'member';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export type TaskStatus = 'pending' | 'ongoing' | 'scheduled' | 'completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  deadline: Date | string;
  priority: 'low' | 'medium' | 'high';
  status: TaskStatus;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Meeting {
  id: string;
  title: string;
  description: string;
  date: Date | string;
  time: string;
  duration: number; // minutes
}

export interface Workspace {
  id: string;
  name: string;
  leader: User;
  members: User[];
  tasks: Task[];
  meetings: Meeting[];
  createdAt: Date | string;
  updatedAt: Date | string;
}
