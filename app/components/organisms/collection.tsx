import { ReactElement } from "react";
import { fetchProducts, fetchSettings, initSwell } from "~/lib/swell";

interface Props {
    id?: string | ReactElement | ReactElement[];
    name?: ReactElement | ReactElement[];
    href?: ReactElement | ReactElement[];
    imageUrl?: string | ReactElement | ReactElement[];
    price?: string;
  }

export function Collection = ({ id, name, href, imageUrl, price }:Props) {
    ``
    return (

        
        
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {items.results.map((product: any) => (
                <a key={id} href={href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">

                <img alt={name} src={imageUrl 
                                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                                  />
                                  </div>
                                  <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
                                  <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
                                  
                                  </a>
                                  ))}
                                  </div>
                                  </div>
                                  )
                                }