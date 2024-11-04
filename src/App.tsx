import React, { useState } from 'react';
import { SearchForm } from './components/SearchForm';
import { ResultsList } from './components/ResultsList';
import { SearchFilters, VintedItem } from './types';
import { Toaster, toast } from 'react-hot-toast';

function App() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    minPrice: '',
    maxPrice: '',
    size: '',
  });
  const [items, setItems] = useState<VintedItem[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      // Note: This is a mock implementation
      // In a real application, you would need to implement the actual API call
      // to Vinted's API or use a proxy server
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockItems: VintedItem[] = [
        {
          id: '1',
          title: 'Sample Item 1',
          price: 25.99,
          size: 'M',
          imageUrl: 'https://via.placeholder.com/300',
          url: 'https://www.vinted.com',
        },
        // Add more mock items as needed
      ];
      
      setItems(mockItems);
      toast.success('Search completed successfully!');
    } catch (error) {
      toast.error('Failed to search items. Please try again.');
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Vinted Search Bot</h1>
          <p className="mt-2 text-gray-600">Find the best deals on Vinted</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <SearchForm
              filters={filters}
              onFilterChange={setFilters}
              onSearch={handleSearch}
            />
          </div>
          <div className="lg:col-span-3">
            <ResultsList items={items} loading={loading} />
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;