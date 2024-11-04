export interface SearchFilters {
  query: string;
  minPrice: string;
  maxPrice: string;
  size: string;
}

export interface VintedItem {
  id: string;
  title: string;
  price: number;
  size: string;
  imageUrl: string;
  url: string;
}