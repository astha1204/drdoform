import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, FileText, Calendar, Edit } from 'lucide-react';
import { mockForms } from '../lib/mockData';

export const FormsList = ({ group, onBack }) => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const groupForms = mockForms.filter((form) => form.group_id === group.id);
      setForms(groupForms);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [group.id]);

  const createSampleForm = () => {
    const newForm = {
      id: Date.now().toString(),
      title: 'New Sample Form',
      description: 'A newly created form template',
      group_id: group.id,
      user_id: 'user1',
      created_at: new Date().toISOString(),
      fields: [
        { id: '1', label: 'Name', type: 'text', required: true, placeholder: 'Enter your name' },
        { id: '2', label: 'Email', type: 'email', required: true, placeholder: 'Enter your email' },
        { id: '3', label: 'Message', type: 'textarea', required: false, placeholder: 'Your message' },
      ],
    };

    setForms((prev) => [newForm, ...prev]);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to groups</span>
        </button>
        <button
          onClick={createSampleForm}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus className="h-4 w-4" />
          <span>New Form</span>
        </button>
      </div>

      {/* Group Info */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className={`p-3 rounded-lg ${group.color}`}>
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{group.name}</h2>
            <p className="text-gray-600">{group.description}</p>
          </div>
        </div>

        {/* Forms */}
        {forms.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No forms yet</h3>
            <p className="text-gray-600 mb-6">Get started by creating your first form in this group.</p>
            <button
              onClick={createSampleForm}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Create First Form
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {forms.map((form) => (
              <div
                key={form.id}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-gray-900 truncate">{form.title}</h4>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{form.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(form.created_at).toLocaleDateString()}</span>
                  </div>
                  <span>{form.fields.length} fields</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
