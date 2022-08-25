import { useLoaderData } from "@remix-run/react";
import { Cart } from "~/components/organism";
import { fetchProducts, fetchSettings, initSwell } from "~/lib/swell";

export async function loader({context}) {
  const swellStoreId = context.SWELL_STORE_ID;
  const swellPublicKey = context.SWELL_PUBLIC_KEY;

  initSwell(swellStoreId, swellPublicKey)

  const [settings, products] = await Promise.all([
    fetchSettings(),
    fetchProducts(),
  ])
  return {
    settings,
    products,
  }
}

export default function Index() {
  const {settings, products} = useLoaderData();
  console.log('products :>> ', products);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Cart />
      <h1 className="text-3xl font-bold underline">Welcome to {settings.store.name}</h1>
      <p>We have {products.count} products in our fantastic store, have a look at them all below.</p>
      {products.results.map((product: any) => (
        <div key={product.id}>
          <img alt={product.name} src={product.images[0].file.url} />
          <p >{product.name}</p>
        </div>
      ))}
    </div>
  );
}
