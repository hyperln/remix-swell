import { CollectionItem } from "../organisms/collection-item";

export function ProductList({ products }) {


  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.results.map((product: any) => (
            <CollectionItem
              key={product.id}
              id={product.id}
              href={product.href}
              name={product.name}
              price={product.price}
              imageUrl={product.images[0].file.url}
            />
          ))}
        </div>
      </div>
    </div>

  );
}


