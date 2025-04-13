
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { UserRole } from '@/types';

interface AppLayoutProps {
  userRole: UserRole;
  userName: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ userRole, userName }) => {
  return (
    <div className="h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900">
      <Sidebar userRole={userRole} />
      <div className="flex-grow overflow-hidden">
        <TopBar userName={userName} />
        <main className="p-6 h-[calc(100vh-4rem)] overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
