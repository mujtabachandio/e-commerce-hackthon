// lib/types.ts

export interface SanityImage {
    asset: { url: string };
    alt: string;
  }
  
  export interface Product {
    name: string;
    slug: { current: string };
    image: SanityImage;
    price: number;
    discountPercentage?: number;
    isFeaturedProduct: boolean;
    description: string;
    stockLevel: number;
    category: string;
  }
  