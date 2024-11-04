import React from 'react';
import { VintedItem } from '../types';

interface ResultsListProps {
  items: VintedItem[];
  loading: boolean;
}

export const ResultsList: React.FC<ResultsListProps> = ({ items, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No items found. Try adjusting your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-xl font-bold text-blue-600 mt-2">€{item.price}</p>
            <p className="text-sm text-gray-500 mt-1">{item.size}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              View on Vinted
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};