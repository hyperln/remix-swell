import swell from 'swell-js'

// interface Credentials {
//   storeId: string;
//   publicKey: string;
// }

interface FetchProductsParams {
  limit?: number;
  page?: number;
}

const options = {
  useCamelCase: true
};

// interface iSwell {
//   fetchSettings(): Promise<any>;
//   fetchProducts(options?: FetchProductsParams): Promise<any>;
// }

// export class Swell implements iSwell {
//   private swellJs: any;
//   constructor(storeId: string, publicKey: string) {
//     swell.init(storeId, publicKey, options);
//     this.swellJs = swell;
//   }

//   async fetchSettings() {
//     return this.swellJs.settings.get();
//   }

//   async fetchProducts(options = {limit: 25, page: 1}) {
//     return this.swellJs.products.list(options);
//   }
// }

export function initSwell(storeId: string, publicKey: string) {
  if (!swell.options?.store && !swell.options?.key)
    swell.init(storeId, publicKey, options);
}

const ensureSwellIsInitialised = (...params: any) => {
  if (!swell.options?.store && !swell.options?.key) {
    throw new Error('Swell is not initialised, please ensure to initialise Swell');
  }
}

export async function fetchSettings() {
  ensureSwellIsInitialised()
  return swell.settings.get();
}

export async function fetchProducts(options: FetchProductsParams = { limit: 25, page: 1 }) {
  ensureSwellIsInitialised()
  return swell.products.list(options);
}

export async function fetchProduct(slugOrId: string) {
  ensureSwellIsInitialised()
  return swell.products.get(slugOrId);
}

export async function fetchCart(): Promise<any> {
  ensureSwellIsInitialised()
  return swell.cart.get();
}

export async function addItemToCart({ productId, quantity = 1 }: { productId: string, quantity?: number }) {
  ensureSwellIsInitialised()
  return swell.cart.addItem({ productId, quantity });
}

export async function removeItemFromCart(itemId: string) {
  ensureSwellIsInitialised()
  return swell.cart.removeItem(itemId)
}
