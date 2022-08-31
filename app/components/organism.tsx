import { useEffect, useState } from "react";
import { fetchCart, initSwell } from "~/lib/swell";

export function Cart() {
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
      <p>Cart</p>
      {cart ? (<p>You have a cart</p>) : <p>Cart is empty</p>}
    </div>
  )
}