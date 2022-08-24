import swell from 'swell-js'

const options = {
  useCamelCase: true
};

export function getSwell(storeId: string, publicKey: string) {
  swell.init(storeId, publicKey, options)
  return swell
}

