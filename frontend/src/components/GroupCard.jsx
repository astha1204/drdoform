import React from 'react';
import { FolderOpen, FileText } from 'lucide-react';

export const GroupCard = ({ group, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-blue-200"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${group.color}`}>
          <FolderOpen className="h-6 w-6 text-white" />
        </div>
        <div className="flex items-center space-x-1 text-gray-500 text-sm">
          <FileText className="h-4 w-4" />
          <span>{group.form_count || 0}</span>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{group.name}</h3>
      <p className="text-gray-600 text-sm line-clamp-2">{group.description}</p>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {group.form_count === 1 ? '1 form' : `${group.form_count || 0} forms`}
        </span>
      </div>
    </div>
  );
};
