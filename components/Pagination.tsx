'use client'

import {
  changedPage,
  decrementPage,
  incrementPage,
} from '@/globalRedux/features/filter/filterSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
//icons
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from 'react-icons/md'
const Pagination = () => {
  const page = useAppSelector((state) => state.filter.page)
  const dispatch = useAppDispatch()
  const pages = [1, 2, 3]
  return (
    <div className="container mx-auto px-2 xl:px-16 pb-10 ">
      <div className="flex items-center justify-center ">
        {/* btn left pagination */}
        <button
          className={`${
            page === pages[0]
              ? 'text-gray-400 pointer-events-none'
              : 'text-[#FE5F1E]'
          }`}
          onClick={() => dispatch(decrementPage())}
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
        {/* list pages */}
        <ul className="flex items-center gap-x-3 px-2 ">
          {pages.map((item) => (
            <li
              className={`cursor-pointer ${
                item === page ? 'bg-[#FE5F1E] text-white ' : ''
              }
           
              w-5 h-5 border-[1px] border-[#FE5F1E] rounded-full flex items-center justify-center text-[12px] text-[#FE5F1E] cursor-none`}
              key={item}
              onClick={() => dispatch(changedPage(item))}
            >
              {item}{' '}
            </li>
          ))}
        </ul>
        {/* btn right pagination */}
        <button
          className={`${
            page === pages[pages.length - 1]
              ? 'text-gray-400 pointer-events-none'
              : 'text-[#FE5F1E]'
          } `}
          onClick={() => dispatch(incrementPage())}
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Pagination
