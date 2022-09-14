import { addItemToCart } from "~/lib/swell";

interface Props {
  product: Product;
}

interface Product {
  id: string;
  href: string;
  name: string;
  price: string;
  images: {
    file: {
      url: string;
    }
  }[];
}

export function ProductItem({ product }: Props) {
  const imageUrl = product.images[0].file.url;

  return (
    <a key={product.id} href={product.href} className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img alt={product.name} src={imageUrl} className="w-full h-full object-center object-cover group-hover:opacity-75" />
      </div>
      <div className="flex justify-between ">
        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>

        <div className="mt-4 sm:mt4">
          <label htmlFor={`quantity-${product}`} className="sr-only">
            Quantity, {product.name}
          </label>
          <select
            id={`quantity-${product}`}
            name={`quantity-${product}`}
            className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
          </select>
        </div>
      </div>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
      <button
        onClick={() => addItemToCart({ productId: product.id })}
        className="mt-3 flex w-full items-center justify-center rounded-md border  bg-white py-3 px-8 text-base font-medium text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1"
      >
        Add to cart
      </button>
    </a>
  );
}

