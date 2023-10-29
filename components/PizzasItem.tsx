'use client'
import { useState } from 'react'
//image next
import Image from 'next/image'
//icons
import { HiPlusSm } from 'react-icons/hi'
//data
import { sizesArr, typesArr } from '@/data/data'
//hooks dispatch
import { useAppDispatch } from '@/hooks/hooks'
import { addItemToCart } from '@/globalRedux/features/cart/cartSlice'

const PizzasItem = ({ pizza }: IPizzasItemProps) => {
  const dispatch = useAppDispatch()
  //destructure pizza
  const { id, name, price, types, sizes, imageUrl, count } = pizza
  //state type
  const [isTypeActive, setIsTypeActive] = useState<number>(types[0])
  //state size
  const [isSizeActive, setIsSizeActive] = useState<number>(sizes[0])
  //state count
  const [isActiveCount, setIsActiveCount] = useState(0)

  const newItemCart = {
    id,
    imageUrl,
    name,
    type: types[isTypeActive],
    size: isSizeActive,
    price: price,
    count: count,
  }

  return (
    <div>
      <div className="flex flex-col items-center h-full">
        {/* image */}
        <div className="relative min-w-full w-[260px] h-[260px]">
          <Image
            className="object-contain flex items-center justify-center"
            src={imageUrl}
            fill
            priority
            alt="pizza"
          />
        </div>
        {/* name */}
        <div className="text-center font-black text-xl mb-5 flex-auto">
          {name}
        </div>
        {/* types & sizes & price & btn */}
        <div className="max-w-[400px] w-full ">
          {/* types & sizes */}
          <div className="bg-[#F3F3F3] rounded-[10px] p-1 ">
            {/* types */}
            <div className="mb-1">
              <ul className="flex items-center justify-between gap-x-2">
                {typesArr.map((item, index) => {
                  //destructure item
                  const { id, name } = item
                  return (
                    <li
                      className={`${isTypeActive === index ? 'bg-white' : ''} ${
                        types.includes(index)
                          ? ''
                          : 'text-gray-400 pointer-events-none cursor-none'
                      }  py-1 flex items-center justify-center flex-[50%] rounded-[5px] text-sm font-bold cursor-pointer select-none`}
                      key={id}
                      onClick={() => setIsTypeActive(index)}
                    >
                      {name}
                    </li>
                  )
                })}
              </ul>
            </div>
            {/* sizes */}
            <div>
              <ul className="flex justify-between gap-x-2">
                {sizesArr.map((size) => {
                  return (
                    <li
                      className={`${isSizeActive === size ? 'bg-white' : ''} ${
                        sizes.includes(size)
                          ? ''
                          : 'text-gray-400 cursor-none pointer-events-none'
                      } basis-1/3 flex items-center justify-center  rounded-[5px] py-1 font-bold text-sm cursor-pointer select-none`}
                      key={size}
                      onClick={() => setIsSizeActive(size)}
                    >
                      {size} см.
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          {/* price & btn */}
          <div className="mt-5 flex items-center justify-between ">
            {/* price */}
            <div className="font-bold text-[18px]">от {price} ₸</div>
            {/* btn */}
            <div>
              <button
                className="border-solid border-[1px] rounded-full border-[#FE5F1E] py-2.5 px-3 font-bold flex items-center bg-white group hover:bg-[rgb(254,95,30)] transition-all duration-300"
                onClick={() => {
                  setIsActiveCount(isActiveCount + 1)
                  dispatch(addItemToCart(newItemCart))
                }}
              >
                <span>
                  <HiPlusSm className="text-[#FE5F1E] text-2xl group-hover:text-white" />
                </span>
                <span className="pr-1 text-[#FE5F1E] group-hover:text-white">
                  Добавить
                </span>
                {isActiveCount > 0 && (
                  <span className="w-5 h-5  text-white bg-[#FE5F1E] rounded-full flex  items-center justify-center text-[11px] group-hover:text-[#FE5F1E] group-hover:bg-white ">
                    {isActiveCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PizzasItem
