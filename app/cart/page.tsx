'use client'
import Image from 'next/image'
//icons
import { HiMinusSm, HiPlusSm, HiOutlineX } from 'react-icons/hi'
import { useAppSelector, useAppDispatch } from '@/hooks/hooks'

//redux
import {
  clearCart,
  decrementCartItem,
  removeItemFromCart,
  incrementCartItem,
} from '@/globalRedux/features/cart/cartSlice'
//router navigation
import { useRouter } from 'next/navigation'
import EmptyCart from '@/components/EmptyCart'

const Cart = () => {
  //router
  const router = useRouter()
  //dispatch
  const dispatch = useAppDispatch()
  //cart items
  const { cartItems } = useAppSelector((state) => state.cart)
  //cart total count
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
    <div className="max-w-[948px] mx-auto px-2 xl:px-16">
      <div className="flex justify-between items-center  py-5">
        {/* title */}
        <div className="text-2xl font-bold">Корзина</div>
        {totalCartCount > 0 && (
          <button
            className="text-gray-400"
            onClick={() => dispatch(clearCart())}
          >
            Очистить корзину
          </button>
        )}
      </div>
      {/* cart list */}
      {totalCartCount ? (
        <ul>
          {cartItems.map((item) => {
            const { imageUrl, id, price, type, size, name, count } = item
            return (
              <div key={id}>
                <div className="border-t py-5">
                  <div className="flex items-center">
                    <div className="flex items-center flex-1 gap-x-4">
                      {/* image */}
                      <div>
                        <Image
                          src={imageUrl}
                          width={80}
                          height={80}
                          alt="pizza"
                        />
                      </div>
                      <div>
                        {/* name */}
                        <div className="text-xl font-bold">{name}</div>
                        {/* type & size */}
                        <div className="text-gray-400">
                          {' '}
                          <span>
                            {type === 0 ? 'тонкое' : 'традиционное'} тесто,{' '}
                          </span>
                          {size}
                          <span> см </span>{' '}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between">
                      <div className="flex items-center gap-x-3">
                        {/* decrememt cart */}
                        <button
                          className="w-8 h-8 border-2 border-[#FE5F1E] flex items-center justify-center rounded-full group hover:bg-[#FE5F1E] transition-all duration-300 "
                          onClick={() =>
                            dispatch(decrementCartItem({ cartItemId: id }))
                          }
                        >
                          <HiMinusSm className="text-xl text-[#FE5F1E] group-hover:text-white " />
                        </button>
                        <span className="text-xl font-bold">{count}</span>
                        {/* increment cart */}
                        <button
                          className="w-8 h-8 border-2 border-[#FE5F1E] flex items-center justify-center rounded-full group hover:bg-[#FE5F1E] transition-all duration-300 "
                          onClick={() =>
                            dispatch(incrementCartItem({ cartItemId: id }))
                          }
                        >
                          <HiPlusSm className="text-xl text-[#FE5F1E] group-hover:text-white " />
                        </button>
                      </div>
                      {/* price */}
                      <div className="text-xl font-bold">
                        <span>{price * count}</span> <span>₸</span>
                      </div>
                      <div>
                        {/* remove cart */}
                        <button
                          className="w-8 h-8 border flex items-center justify-center rounded-full group hover:bg-black transition-all duration-300 "
                          onClick={() =>
                            dispatch(removeItemFromCart({ cartItemId: id }))
                          }
                        >
                          <HiOutlineX className=" text-gray-400 group-hover:text-white " />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </ul>
      ) : (
        <EmptyCart />
      )}

      <div>
        <div>
          {/* total count && total price */}
          {totalCartCount > 0 && (
            <div className="flex items-center justify-between mt-5 text-xl">
              {/* total count */}
              <div className="">
                <span>Всего пицц:</span>
                <span className="font-bold"> {totalCartCount} шт</span>
              </div>
              {/* total price */}
              <div>
                <span>Сумма заказа: </span>
                <span className="font-bold">{totalCartPrice} ₸</span>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-10 pb-10">
            {/* btn menu */}
            <button
              className="px-10 py-4 border rounded-full  flex items-center justify-center group hover:bg-black transition-all duration-300"
              onClick={() => router.push('/')}
            >
              {' '}
              <span className="text-gray-400 font-bold group-hover:text-white ">
                Вернуться назад
              </span>{' '}
            </button>
            {/* pay  */}
            {totalCartPrice > 0 && (
              <button className="px-10 py-4 border rounded-full  flex items-center justify-center bg-[#FE5F1E]   group hover:bg-[rgb(228,69,6)] transition-all duration-300 ">
                <span className="text-white">Оплатить сейчас</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
