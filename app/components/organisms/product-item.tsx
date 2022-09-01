import { Link } from '@remix-run/react';

interface Props {
  product: Product;
}

interface Product {
  id: string;
  href: string;
  name: string;
  price: string;
  currency: string;
  images: {
    file: {
      url: string;
    };
  }[];
}

export function ProductItem({ product }: Props) {
  const imageUrl = product.images[0].file.url;
  return (
    <Link to={`/product/${product.id}`}>
      <a key={product.id} href={product.href} className='group'>
        <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
          <img
            alt={product.name}
            src={imageUrl}
            className='w-full h-full object-center object-cover group-hover:opacity-75'
          />
        </div>
        <h3 className='mt-4 text-sm text-gray-700'>{product.name}</h3>
        <p className='mt-1 text-lg font-medium text-gray-900'>
          {product.price} {product.currency}
        </p>
      </a>
    </Link>
  );
}
