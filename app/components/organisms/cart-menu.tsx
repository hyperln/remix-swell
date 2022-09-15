import { useEffect, useState } from "react";
import { fetchCart, initSwell } from "~/lib/swell";
import { ShoppingCartIcon as OutlineCartIcon } from '@heroicons/react/24/outline'
import { ShoppingCartIcon as SolidCartIcon } from '@heroicons/react/24/solid'
import { Link } from "@remix-run/react";

export function CartMenu() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    // @ts-ignore
    initSwell(window.ENV.swellStoreId, window.ENV.swellPublicKey)
    const initCart = async () => {
      const c = await fetchCart();
      setCart(c as any)
    }
    initCart()
  }, [])

  console.log('cart :>> ', cart);

  return (
    <div>
      <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <Link to="/cart"
          className="rounded-full p-1 text-gray-700 hover:text-black"
        >
          <span className="sr-only">Cart</span>
          {cart ? (<SolidCartIcon className="h-6 w-6" aria-hidden="true" />) : <OutlineCartIcon className="h-6 w-6" aria-hidden="true" />}

        </Link>
      </div>
    </div>
  )
}

