import type { MetaFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Links } from "./components/atoms/links";
import { LiveReload } from "./components/atoms/liveReload";
import { Meta } from "./components/atoms/meta";
import { Outlet } from "./components/atoms/outlet";
import { Scripts } from "./components/atoms/scripts";
import { ScrollRestoration } from "./components/atoms/scrollRestoration";
import { useLoaderData } from "./components/atoms/useLoaderData";
import { Layout } from "./components/templates/layout";
import styles from "./styles/app.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "PSBArt",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({context}) {
  const swellStoreId = context.SWELL_STORE_ID;
  const swellPublicKey = context.SWELL_PUBLIC_KEY;
  return json({
    ENV: {
      swellStoreId,
      swellPublicKey,
    },
  })
}

export default function App() {
  const data = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
        <Outlet />
        </Layout>
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(
              data.ENV
            )}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
