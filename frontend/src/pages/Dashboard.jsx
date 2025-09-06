import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { GroupCard } from '../components/GroupCard';
import { FormsList } from '../components/FormsList';
import { mockGroups } from '../lib/MockData';
import { Plus, FolderPlus } from 'lucide-react';

export const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setGroups(mockGroups);
      setLoading(false);
    }, 500);
  }, []);

  const createSampleGroups = () => {
    const colors = [
      'bg-blue-600',
      'bg-indigo-600',
      'bg-purple-600',
      'bg-pink-600',
      'bg-red-600',
      'bg-orange-600',
      'bg-yellow-600',
      'bg-green-600',
      'bg-teal-600',
      'bg-cyan-600'
    ];

    const newGroups = [
      {
        id: Date.now().toString(),
        name: 'Marketing Campaigns',
        description: 'Forms for marketing campaigns and lead generation',
        color: colors[Math.floor(Math.random() * colors.length)],
        user_id: 'user1',
        created_at: new Date().toISOString(),
        form_count: 0
      },
      {
        id: (Date.now() + 1).toString(),
        name: 'HR & Recruitment',
        description: 'Job applications and employee feedback forms',
        color: colors[Math.floor(Math.random() * colors.length)],
        user_id: 'user1',
        created_at: new Date().toISOString(),
        form_count: 0
      }
    ];

    setGroups(prev => [...newGroups, ...prev]);
  };

  if (selectedGroup) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <FormsList group={selectedGroup} onBack={() => setSelectedGroup(null)} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Your Form Groups</h2>
            <p className="text-gray-600 mt-1">Organize your forms into groups for better management</p>
          </div>
          <button
            onClick={createSampleGroups}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Plus className="h-4 w-4" />
            <span>Add Groups</span>
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : groups.length === 0 ? (
          <div className="text-center py-12">
            <FolderPlus className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h3 className="text-xl font-medium text-gray-900 mb-4">No groups yet</h3>
            <p className="text-gray-600 mb-8 max-w-sm mx-auto">
              Create your first group to start organizing your forms. Groups help you categorize and manage related forms together.
            </p>
            <button
              onClick={createSampleGroups}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-medium"
            >
              Create Sample Groups
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {groups.map((group) => (
              <GroupCard
                key={group.id}
                group={group}
                onClick={() => setSelectedGroup(group)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
