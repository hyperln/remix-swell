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
  return null
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-3xl font-bold underline">Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
