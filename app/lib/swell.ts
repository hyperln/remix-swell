import swell from 'swell-js'

interface Credentials {
  storeId: string;
  publicKey: string;
}

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

const ensureSwellIsInitialised = (fn: any) => (...params: any) => {
  if (!swell.options?.store && !swell.options?.key) {
    throw new Error('Swell is not initialised, please ensure to initialise Swell');
  }
  return fn(...params);
}

export const fetchSettings = ensureSwellIsInitialised(
  async function fetchSettings() {
    return swell.settings.get();
  }
)

export const fetchProducts = ensureSwellIsInitialised(
  async function fetchProducts(options: FetchProductsParams = {limit: 25, page: 1}) {
    return swell.products.list(options);
  }
)

export const fetchProduct = ensureSwellIsInitialised(
  async function fetchProduct(slugOrId: string) {
    return swell.products.get(slugOrId);
  }
)

export const fetchCart = ensureSwellIsInitialised(
  async function fetchCart() {
    return swell.cart.get();
  }
)
