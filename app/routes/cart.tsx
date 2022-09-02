import { QuestionMarkCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
// import { useLoaderData } from "@remix-run/react";
import { fetchCart, fetchProducts, initSwell } from '~/lib/swell';

// export async function loader({ context }) {
//     const swellStoreId = context.SWELL_STORE_ID;
//     const swellPublicKey = context.SWELL_PUBLIC_KEY;

//     initSwell(swellStoreId, swellPublicKey)

//     const [products, cart] = await Promise.all([
//         fetchProducts(),
//         fetchCart()
//     ])
//     return {
//         products,
//         cart,
//     }
// }

// interface Props {
//     cart: Cart[];
//   }

//   interface Cart {
//     id: string;
//     href: string;
//     name: string;
//     price: string;
//     images: {
//       file: {
//         url: string;
//       }
//     }[];
//   }

export default function Cart() {


    useEffect(() => {
        // @ts-ignore
        initSwell(window.ENV.swellStoreId, window.ENV.swellPublicKey)
        const initCart = async () => {
            const c = await fetchCart();
            setCart(c as any)
        }
        initCart()
    }, [])

    const { cart } = useLoaderData();
    console.log(cart);
    // const imageUrl = cart.images[0].file.url;

    return (

        <div>
            <h1>Mr Cart</h1>
            {/* <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
                <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">
                        <h2 id="cart-heading" className="sr-only">
                            Items in your shopping cart
                        </h2>
                        <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {cart.map((item, item) => (
                <li key={item.id} className="flex py-6 sm:py-10">
                    <div className="flex-shrink-0">
                        <img
                            // src={imageUrl}
                            alt={item.name}
                            className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                        />
                    </div>
    
                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                                <div className="flex justify-between">
                                    <h3 className="text-sm">
                                        <a href={item.href} className="font-medium text-gray-700 hover:text-gray-800">
                                            {item.name}
                                        </a>
                                    </h3>
                                </div>
                                <p className="mt-1 text-sm font-medium text-gray-900">{item.price}</p>
                            </div>
    
                            <div className="mt-4 sm:mt-0 sm:pr-9">
                                <label htmlFor={`quantity-${item}`} className="sr-only">
                                    Quantity, {item.name}
                                </label>
                                <select
                                    id={`quantity-${item}`}
                                    name={`quantity-${item}`}
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
    
                                <div className="absolute top-0 right-0">
                                    <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Remove</span>
                                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
    
    
                    </div>
                </li>
            ))}

                        </ul>
                    </section>
                </form>
            </div> */}
        </div>
        //             
        //                 

        //                 
        //                 </ul>
        //             </section>

        //             {/* Order summary */}
        //             <section
        //                 aria-labelledby="summary-heading"
        //                 className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        //             >
        //                 <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        //                     Order summary
        //                 </h2>

        //                 <dl className="mt-6 space-y-4">
        //                     <div className="flex items-center justify-between">
        //                         <dt className="text-sm text-gray-600">Subtotal</dt>
        //                         <dd className="text-sm font-medium text-gray-900">$99.00</dd>
        //                     </div>
        //                     <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        //                         <dt className="flex items-center text-sm text-gray-600">
        //                             <span>Shipping estimate</span>
        //                             <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
        //                                 <span className="sr-only">Learn more about how shipping is calculated</span>
        //                                 <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
        //                             </a>
        //                         </dt>
        //                         <dd className="text-sm font-medium text-gray-900">$5.00</dd>
        //                     </div>
        //                     <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        //                         <dt className="flex text-sm text-gray-600">
        //                             <span>Tax estimate</span>
        //                             <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
        //                                 <span className="sr-only">Learn more about how tax is calculated</span>
        //                                 <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
        //                             </a>
        //                         </dt>
        //                         <dd className="text-sm font-medium text-gray-900">$8.32</dd>
        //                     </div>
        //                     <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        //                         <dt className="text-base font-medium text-gray-900">Order total</dt>
        //                         <dd className="text-base font-medium text-gray-900">$112.32</dd>
        //                     </div>
        //                 </dl>

        //                 <div className="mt-6">
        //                     <button
        //                         type="submit"
        //                         className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        //                     >
        //                         Checkout
        //                     </button>
        //                 </div>
        //             </section>
        //         
        //     </div>
        // </div>
    )
}




