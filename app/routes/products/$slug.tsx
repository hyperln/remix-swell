import { useLoaderData, useParams } from '@remix-run/react';
import { fetchProduct, initSwell } from '~/lib/swell';

export async function loader({params, context}) {
  const swellStoreId = context.SWELL_STORE_ID;
  const swellPublicKey = context.SWELL_PUBLIC_KEY;

  initSwell(swellStoreId, swellPublicKey)


  const product = await fetchProduct(params.slug)

  return {
    product
  }
}

export default function ProductPage() {
  const { product } = useLoaderData();
  console.log('product :>> ', product);
  return (
    <div>
      <h3>Product {product?.name}</h3>
      <img src={product.images[0].file.url} alt={product.name} />
    </div>
  );
}
