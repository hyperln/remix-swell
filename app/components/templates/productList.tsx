import { fetchProducts, fetchSettings, initSwell } from "~/lib/swell";
import { useLoaderData } from "../atoms/useLoaderData";
import { Collection } from "../organisms/collection";

    

    export async function loader({context}) {
        const swellStoreId = context.SWELL_STORE_ID;
        const swellPublicKey = context.SWELL_PUBLIC_KEY;
      
        initSwell(swellStoreId, swellPublicKey)
      
        const [products] = await Promise.all([
          fetchProducts()
        ])
        return {
          settings,
          products,
        }
      }
      

      export default function ProductList () {
        const {products} = useLoaderData();
        console.log('products :>> ', products);


        return (

            <Collection
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.results.map((product: any) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">

                <img alt={product.name} src={product.images[0].file.url} 
                                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>

            </a>
            ))}
            </div>
          </div>




        );
      }