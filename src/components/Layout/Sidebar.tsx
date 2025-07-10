'use client';
import { useState } from 'react';
import { LayoutDashboard, Users, CalendarDays } from 'lucide-react';

export default function Sidebar() {
  const [active, setActive] = useState('Dashboard');

  const items = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Users, label: 'Teachers' },
    { icon: Users, label: 'Students' },
    { icon: CalendarDays, label: 'Schedule' },
  ];

  return (
    <aside className="hidden md:block bg-gray-900 text-white w-64 min-h-screen py-6 px-4">
      <ul className="space-y-2">
        {items.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className={`flex items-center gap-3 cursor-pointer p-2 rounded transition ${active === label ? 'bg-red-600' : 'hover:bg-gray-800'}`}
            onClick={() => setActive(label)}
          >
            <Icon size={20} />
            <span className="text-lg">{label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}