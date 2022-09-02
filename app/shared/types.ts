export interface Product {
  id: string;
  href: string;
  name: string;
  price: string;
  currency: string;
  slug: string;
  images: {
    file: {
      url: string;
    };
  }[];
}