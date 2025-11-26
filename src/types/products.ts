export interface Product {
  id: string;
  name: string;
  power: string;
  description: string;
  category: 'batteries' | 'panels' | 'inverters' | 'accessories';
  price: string;
  rating?: number;
  specifications: {
    capacity: string;
    outlets: string[];
    cycles: string;
    chargeTime: string;
    display: string;
    usage: string;
    portability: string;
    maintenance: string;
    [key: string]: string | string[]; // Allow additional specifications
  };
  features: string[];
  tagline: string;
  image: string;
  createdAt: Date;
  updatedAt?: Date;
  createdBy: string; // User ID who created the product
  isActive: boolean;
  stock?: number;
  dimensions?: string;
  weight?: string;
  warranty?: string;
  certifications?: string[];
}

export interface ProductFormData {
  name: string;
  power: string;
  description: string;
  category: Product['category'];
  price: string;
  rating: number;
  tagline: string;
  image: string;
  features: string[];
  stock: number;
  dimensions: string;
  weight: string;
  warranty: string;
  certifications: string[];
  specifications: {
    capacity: string;
    outlets: string;
    cycles: string;
    chargeTime: string;
    display: string;
    usage: string;
    portability: string;
    maintenance: string;
  };
}

export interface ProductFilters {
  category: string;
  priceRange: [number, number];
  minRating: number;
  inStock: boolean;
  searchTerm: string;
}