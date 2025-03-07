import React, { createContext, useContext, useState, useCallback } from 'react';
import Papa from 'papaparse';

interface DataContextType {
  data: any[];
  setData: (data: any[]) => void;
  uploadData: (file: File) => Promise<void>;
  generateRandomData: () => void;
  loading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const uploadData = useCallback(async (file: File) => {
    setLoading(true);
    return new Promise<void>((resolve, reject) => {
      Papa.parse(file, {
        complete: (results) => {
          setData(results.data);
          setLoading(false);
          resolve();
        },
        error: (error) => {
          setLoading(false);
          reject(error);
        },
        header: true,
        dynamicTyping: true,
      });
    });
  }, []);

  const generateRandomData = useCallback(() => {
    setLoading(true);
    const randomData = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      revenue: Math.floor(Math.random() * 10000),
      customers: Math.floor(Math.random() * 100),
      orders: Math.floor(Math.random() * 50),
      category: ['Electronics', 'Clothing', 'Food', 'Books'][Math.floor(Math.random() * 4)],
    }));
    setData(randomData);
    setLoading(false);
  }, []);

  return (
    <DataContext.Provider value={{ data, setData, uploadData, generateRandomData, loading }}>
      {children}
    </DataContext.Provider>
  );
};