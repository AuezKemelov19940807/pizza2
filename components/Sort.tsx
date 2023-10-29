'use client'
import { useState, useEffect, useRef } from 'react'
//data
import { sortItems } from '@/data/data'
//icons
import { BiSolidDownArrow } from 'react-icons/bi'
//link next
import Link from 'next/link'
//hooks
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
//redux
import { changeSort } from '@/globalRedux/features/filter/filterSlice'

const Sort = () => {
  const dispatch = useAppDispatch()

  //ref
  const ref = useRef<HTMLDivElement>(null)
  //state popup
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false)
  //filter name
  const { name } = useAppSelector((state) => state.filter.sort)

  //pupup outside btn
  const handleOutsideClick = (event: MouseEventInit) => {
    const _event = event as PopupClick

    const path = _event.path || (_event.composedPath && _event.composedPath())
    if (ref.current && !path.includes(ref.current)) {
      setIsOpenPopup(false)
    }
  }
  //btn document body
  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
    return () => document.body.removeEventListener('click', handleOutsideClick)
  }, [])

  return (
    <div ref={ref}>
      <div className="relative">
        <div
          className="flex items-center gap-x-1 cursor-pointer"
          onClick={() => setIsOpenPopup(!isOpenPopup)}
        >
          {/* icon arrow  */}
          <BiSolidDownArrow
            className={`${
              isOpenPopup && 'rotate-180'
            } text-sm cursor-pointer transition-all duration-300`}
          />
          {/* text */}
          <span className="font-bold select-none hidden sm:flex">
            Сортировка по:{' '}
          </span>
          {/* name */}
          <span className="text-[#FE5F1E] cursor-pointer select-none border-b border-[#FE5F1E] border-dashed">
            {name}
          </span>
        </div>
        {isOpenPopup && (
          <div className="absolute top-8 right-0 bg-white  rounded-[10px] shadow-xl p-5 z-10">
            {/* sort list */}
            <ul className="flex flex-col gap-y-5">
              {sortItems.map((sortItem, index) => {
                return (
                  <li
                    key={`${index}_${name}`}
                    onClick={() => {
                      setIsOpenPopup(false)
                      dispatch(changeSort(sortItem))
                    }}
                    className={`${
                      name === sortItem.name ? 'text-[#FE5F1E] font-bold' : ''
                    }`}
                  >
                    <Link href="/">{sortItem.name}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sort
