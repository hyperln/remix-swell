import { useLoaderData } from "@remix-run/react";
import { getSwell } from "~/lib/swell";

export async function loader({context}) {
  const swellStoreId = context.SWELL_STORE_ID;
  const swellPublicKey = context.SWELL_PUBLIC_KEY;
  const swell = getSwell(swellStoreId, swellPublicKey);
  const [settings, products] = await Promise.all([
    swell.settings.get(),
    swell.products.get()
  ])
  console.log('settings :>> ', settings);
  console.log('products :>> ', products);
  return {
    settings,
    products
  }
}

export default function Index() {
  const {settings, products} = useLoaderData()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-3xl font-bold underline">Welcome to {settings.store.name}</h1>
      <p>We have {products.count} products in our fantastic store, have a look at them all below.</p>
      {products.results.map((product: any) => (<p key={product.id}>{product.name}</p>))}
    </div>
  );
}
