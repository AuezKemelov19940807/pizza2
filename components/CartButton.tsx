'use client'
//router navigation
import { useRouter } from 'next/navigation'
//icons
import { AiOutlineShoppingCart } from 'react-icons/ai'
//redux
import { useAppSelector } from '@/hooks/hooks'

const CartButton = () => {
  // cart items
  const cartItems = useAppSelector((state) => state.cart.cartItems)
  //router navigation
  const router = useRouter()
  //total count
  const totalCartCount = cartItems.reduce(
    (total, cartItem) => cartItem.count + total,
    0
  )
  //total price
  const totalCartPrice = cartItems.reduce(
    (total, cartItem) => cartItem.price * cartItem.count + total,
    0
  )
  return (
    <div>
      <button type="button" onClick={() => router.push('/cart')}>
        <div className="bg-[#FE5F1E] py-3 px-6 rounded-full flex  h-full items-center gap-x-3.5 text-white">
          {/* total price */}
          <div className="flex items-center gap-x-1">
            <span className="font-extrabold"> {totalCartPrice} </span>
            <span>₸</span>
          </div>
          <span className="block w-[1px] h-[25px] bg-white/10"></span>
          {/* total count */}
          <div className="flex items-center gap-x-1">
            <AiOutlineShoppingCart className="text-lg" />
            <span className="font-extrabold"> {totalCartCount} </span>
          </div>
        </div>
      </button>
    </div>
  )
}

export default CartButton
