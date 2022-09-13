export interface Product {
  id: string;
  href: string;
  name: string;
  price: string;
  currency: string;
  slug: string;
  description: string;
  options: {
    value: {
      size: string;
    };
  }[];
  images: {
    file: {
      url: string;
    };
  }[];
}
