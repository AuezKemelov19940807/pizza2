//link next
import Link from 'next/link'
//data
import { categoryItems } from '@/data/data'

import { useAppSelector, useAppDispatch } from '@/hooks/hooks'
import { changeCategoryId } from '@/globalRedux/features/filter/filterSlice'

const Categories = () => {
  const categoryId = useAppSelector((state) => state.filter.categoryId)
  const dispatch = useAppDispatch()

  return (
    <nav>
      {/* list category */}
      <ul className="flex gap-x-3 gap-y-8 flex-wrap ">
        {categoryItems.map((category, index) => {
          return (
            // category
            <li
              key={category}
              onClick={() => dispatch(changeCategoryId(index))}
            >
              <Link
                className={`${
                  categoryId === index
                    ? 'bg-[#282828] text-white hover:bg-[#282828]'
                    : 'bg-[#F9F9F9] hover:bg-[#f5f5f5]'
                } px-6 py-3  rounded-full font-bold  `}
                href="/"
              >
                {category}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Categories
