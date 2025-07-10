'use client';
import { ChevronDown, User, Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-red-600 text-white px-6 py-4 shadow-md flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Teacher Management</h1>
      <div className="flex items-center gap-6">
        <button
          className="flex items-center gap-1 hover:text-gray-200 transition focus:outline-none"
          aria-label="Profile Settings"
          onClick={() => alert('Profile clicked')}
        >
          <User size={18} />
          <span>Profile</span>
          <ChevronDown size={18} />
        </button>
        <button
          className="flex items-center gap-1 hover:text-gray-200 transition focus:outline-none"
          aria-label="Settings"
          onClick={() => alert('Settings clicked')}
        >
          <Settings size={18} />
          <span>Settings</span>
        </button>
      </div>
    </nav>
  );
}