import { Outlet, useLoaderData } from '@remix-run/react';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import { CurrencyDollarIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline';
import { ProductItem } from '../organisms/product-item';
import {  fetchProducts } from '~/lib/swell';
import { json, LoaderFunction } from '@remix-run/cloudflare';


interface Props {
  product: Product;
}
interface Product {
  id: string;
  href: string;
  name: string;
  price: string;
  description: string;
  images: {
    file: {
      url: string;
    };
  }[];

//   details: [
//     'Only the best materials',
//     'Ethically and locally made',
//     'Pre-washed and pre-shrunk',
//     'Machine wash cold with similar colors'
//   ];
// }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// }
// export const loader = async () => {
//     return json(await fetchProducts());
// };
// const data = useLoaderData();
//     return (
//       <ul>
//         {data.map((product) => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//     );

// export function loader({ params } : any) {
//     const id = params.productId;
//   }

//   export function action({ params }: any) {
//     const id = params.productId;
//   }

// type LoaderData = {
//   products: Product[];
// };
// export const loader: LoaderFunction = async ({ request }) => {
//   const products = await fetchProducts();
//   return json({ products });
// };

export default function productPage({ product }: Props) {

  const { products } = useLoaderData<LoaderData>();
  return (
    <div className="flex flex-wrap gap-6">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

  return (
      <div className='bg-white'>
        <div className='pt-6 pb-16 sm:pb-24'>
          <div className='mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8'>
              <div className='lg:col-span-5 lg:col-start-8'>
                <div className='flex justify-between'>
                  <h1 className='text-xl font-medium text-gray-900'>{product.name}</h1>
                  <p className='text-xl font-medium text-gray-900'>{product.price}</p>
                </div>

                <div className='mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0'>
                  <h2 className='sr-only'>Images</h2>

                  <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8'>
                    <img key={product.id} src={imageUrl} alt={product.name} />

                    {/* {product.image.map((image) => (
                      <img
                        key={product.id}
                        src={imageUrl}
                        alt={product.name}
                        className='w-full h-full object-center object-cover group-hover:opacity-75'
                      />
                    ))} */}
                  </div>
                </div>
              </div>
              <div className='mt-8 lg:col-span-5'>
                <div className='mt-10'>
                  <h2 className='text-sm font-medium text-gray-900'>Description</h2>

                  <div
                    className='prose prose-sm mt-4 text-gray-500'
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>

                {/* <div className='prose prose-sm mt-4 text-gray-500'>
                  <ul role='list'>
                    {product.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
