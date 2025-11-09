import React from 'react';
import { useAuth } from '../hooks/useAuth';
import ProtectedRoute from '../components/ProtectedRoute';

const CreateContent = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Post</h1>
      <div className="text-center py-8 text-gray-500">
        ✨ Create amazing deals here!
      </div>
    </div>
  );
};

const Create = () => {
  return (
    <ProtectedRoute>
      <CreateContent />
    </ProtectedRoute>
  );
};

export default Create;
