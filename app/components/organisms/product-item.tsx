import { Link } from '@remix-run/react';
import type { Product } from '~/shared/types';

interface Props {
  product: Product;
}

export function ProductItem({ product }: Props) {
    const imageUrl = product.images[0].file.url;
    console.log(product.id)

    return (
        <Link to={`/products/${product.slug}`}>
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img alt={product.name} src={imageUrl} className="w-full h-full object-center object-cover group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className='mt-1 text-lg font-medium text-gray-900'>
        {product.price} {product.currency}
      </p>
            <button
                type="submit"
                className="mt-3 flex w-full items-center justify-center rounded-md border  bg-white py-3 px-8 text-base font-medium text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1"
            >
                Add to cart
            </button>
        </Link>
    );
}
