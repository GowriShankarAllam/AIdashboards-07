import React, { useRef } from 'react';
import { Upload, Database } from 'lucide-react';
import { useData } from '../context/DataContext';

export const DataUpload: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadData, generateRandomData, loading } = useData();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        await uploadData(file);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Dataset Upload</h2>
      <div className="space-y-4">
        <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
          <Upload className="h-8 w-8 text-gray-400 mb-2" />
          <p className="text-sm text-gray-500 mb-2">Upload your CSV dataset</p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".csv"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={loading}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            Choose File
          </button>
        </div>
        
        <div className="flex items-center justify-center">
          <span className="px-3 text-gray-500">or</span>
        </div>

        <div className="flex justify-center">
          <button
            onClick={generateRandomData}
            disabled={loading}
            className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            <Database className="h-4 w-4 mr-2" />
            Generate Random Data
          </button>
        </div>
      </div>
    </div>
  );
};