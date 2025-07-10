'use client';
import { useState } from 'react';

const tabs = ['Availability', 'Students', 'Schedule'];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('Availability');

  const renderContent = () => {
    switch (activeTab) {
      case 'Students':
        return <p>List of assigned students will appear here.</p>;
      case 'Schedule':
        return <p>Teacher's weekly schedule goes here.</p>;
      case 'Availability':
      default:
        return <p>Teacher's availability details will be shown here.</p>;
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex gap-4 border-b mb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${activeTab === tab ? 'border-b-2 border-red-600 text-red-600 font-semibold' : 'text-gray-600'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="text-sm text-gray-600">Currently viewing: <strong>{activeTab}</strong></div>
      <div className="mt-2 text-gray-700 text-sm">
        {renderContent()}
      </div>
    </div>
  );
}
