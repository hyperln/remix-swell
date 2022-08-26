import { useLoaderData } from "~/components/atoms/useLoaderData";
import ProductList from "~/components/templates/productList";
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
    <ProductList/>

  );
}
