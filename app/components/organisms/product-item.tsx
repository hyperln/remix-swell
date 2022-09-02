import { Link } from "@remix-run/react";
import { addItemToCart, emptyCart, fetchCart, removeItemFromCart } from "~/lib/swell";
import { CartMenu } from './cart-menu';

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
    // console.log(product.id)

    return (
        <a key={product.id} href={product.href} className="group">
            {/* <Link to={`/product/${product.id}`}> */}
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img alt={product.name} src={imageUrl} className="w-full h-full object-center object-cover group-hover:opacity-75" />
            </div>
            {/* </Link > */}
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            <button
                onClick={() => addItemToCart({ productId: product.id })}
                className="mt-3 flex w-full items-center justify-center rounded-md border  bg-white py-3 px-8 text-base font-medium text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1"
            >
                Add to cart
            </button>
            <button
                onClick={() => removeItemFromCart({ productId: product.id })}
                className="mt-3 flex w-full items-center justify-center rounded-md border  bg-white py-3 px-8 text-base font-medium text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1"
            >
                Remove from cart
            </button>
        </a>
    );
}

