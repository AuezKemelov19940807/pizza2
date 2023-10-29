'use client'
import {
  changedValue,
  clearValue,
} from '@/globalRedux/features/search/searchSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
//icons
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

const Search = () => {
  const value = useAppSelector((state) => state.search.value)
  const dispatch = useAppDispatch()
  return (
    <div className="relative flex items-center w-full  xl:w-auto">
      {/* icon */}
      <AiOutlineSearch className="text-2xl text-[#E5E5E5] absolute top-[50%] -translate-y-[50%] left-2" />
      <input
        className="outline-none border rounded-[10px] py-2 px-10 w-full lg:w-auto xl:w-[400px]"
        type="text"
        placeholder="Поиск пицц..."
        value={value}
        onChange={(e) => dispatch(changedValue(e.target.value))}
      />
      <div>
        {/* btn clear */}
        {value.length > 0 && (
          <div>
            <button onClick={() => dispatch(clearValue())}>
              <AiOutlineClose className="text-2xl text-[#E5E5E5] absolute top-[50%] -translate-y-[50%] right-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
