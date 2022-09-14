import { useLoaderData } from '@remix-run/react';
import { fetchProduct, initSwell } from '~/lib/swell';
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

export async function loader({ params, context }) {
  const swellStoreId = context.SWELL_STORE_ID;
  const swellPublicKey = context.SWELL_PUBLIC_KEY;

  initSwell(swellStoreId, swellPublicKey);
  const product = await fetchProduct(params.slug);
  return {
    product,
  };
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState('');

  const { product } = useLoaderData();
  return (
    <div className='bg-white'>
      <div className='pt-6 pb-16 sm:pb-24'>
        <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8'>
            <div className='lg:col-span-5 lg:col-start-8'>
              <div className='flex justify-between'>
                <h1 className='text-xl font-medium text-gray-900'>{product.name}</h1>
                <p className='text-xl font-medium text-gray-900'>
                  {product.price}
                  {product.currency}
                </p>
              </div>
            </div>

            {/* Image gallery */}
            <div className='mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0 '>
              <h2 className='sr-only'>Images</h2>

              <div className='grid grid-cols-1 '>
                <img className='rounded-md' src={product.images[0].file.url} alt={product.name} />
              </div>
            </div>

            <div className='mt-8 lg:col-span-5'>
              <form>
                <div className='mt-8'>
                  <div className='flex items-center justify-between'>
                    <h2 className='text-sm font-medium text-gray-900'>Sizes</h2>
                  </div>

                  <RadioGroup value={selectedSize} onChange={setSelectedSize} className='mt-2'>
                    <RadioGroup.Label className='sr-only'> Choose a size </RadioGroup.Label>
                    <div className='grid grid-cols-3 gap-3 sm:grid-cols-6'>
                      {product.options.map((option: any) => (
                        <RadioGroup.Option
                          key={option.values[0].id}
                          value={option.values[0].name}
                          className={({ active, checked }: any) =>
                            classNames(
                              active
                                ? ' cursor-pointer  ring-indigo-500'
                                : 'cursor-pointer focus:outline-none',
                              checked
                                ? 'bg-slate-700 border-transparent text-white'
                                : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                              'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                            )
                          }
                        >
                          <RadioGroup.Label as='span'>{option.values[0].name}</RadioGroup.Label>
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <button
                  type='submit'
                  className='mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-slate-700 py-3 px-8 text-base font-medium text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2'
                >
                  Add to cart
                </button>
              </form>

              {/* Product details */}
              <div className='mt-8 border-b border-gray-200'>
                <h2 className='text-m font-medium text-gray-900'>Description</h2>
                <div className='prose prose-base mt-2 text-gray-500' />
                {product.description}
              </div>
              <div className='mt-8 border-b border-gray-200'>
                <h2 className='text-m font-medium text-gray-900'>Shipping Details</h2>
                <div className='prose prose-base mt-2 text-gray-500' />
                {product.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
