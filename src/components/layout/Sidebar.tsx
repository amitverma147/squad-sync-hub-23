
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';
import { UserRole } from '@/types';
import { 
  LayoutDashboard, 
  Users, 
  CheckSquare, 
  Calendar, 
  Settings, 
  LogOut, 
  FolderClosed 
} from 'lucide-react';

interface SidebarProps {
  userRole: UserRole;
}

interface NavItem {
  icon: React.ElementType;
  label: string;
  path: string;
  roles: UserRole[];
}

const Sidebar: React.FC<SidebarProps> = ({ userRole }) => {
  const location = useLocation();
  
  // Define navigation items based on user roles
  const navItems: NavItem[] = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', roles: ['admin', 'leader', 'member'] },
    { icon: FolderClosed, label: 'Workspaces', path: '/workspaces', roles: ['admin'] },
    { icon: Users, label: 'Team', path: '/team', roles: ['admin', 'leader'] },
    { icon: CheckSquare, label: 'Tasks', path: '/tasks', roles: ['admin', 'leader', 'member'] },
    { icon: Calendar, label: 'Meetings', path: '/meetings', roles: ['admin', 'leader', 'member'] },
    { icon: Settings, label: 'Settings', path: '/settings', roles: ['admin', 'leader', 'member'] },
  ];

  // Filter nav items based on user role
  const filteredNavItems = navItems.filter(item => item.roles.includes(userRole));

  return (
    <aside className="bg-white dark:bg-gray-800 h-screen w-16 md:w-64 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center md:justify-start">
          <Logo className="md:mr-2" size={window.innerWidth >= 768 ? 'medium' : 'small'} />
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-2">
          {filteredNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center p-2 rounded-lg transition-colors
                    ${isActive 
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  <item.icon className={`h-5 w-5 ${window.innerWidth >= 768 ? 'mr-3' : 'mx-auto'}`} />
                  <span className="hidden md:block">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <Link
          to="/logout"
          className="flex items-center p-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <LogOut className={`h-5 w-5 ${window.innerWidth >= 768 ? 'mr-3' : 'mx-auto'}`} />
          <span className="hidden md:block">Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
