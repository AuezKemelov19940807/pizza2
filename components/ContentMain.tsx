'use client'
import { useEffect } from 'react'
//hooks
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
//components
import PizzasItems from './PizzasItems'
//redux
import { fetchPizzasItems } from '@/globalRedux/features/pizzas/pizzasSlice'
//loader component
import MyLoader from './MyLoader'
import NotFound from './NotFound'

const ContentMain = () => {
  // filter
  const { categoryId, limit, page } = useAppSelector((state) => state.filter)
  // pizza
  const { items, isLoading } = useAppSelector((state) => state.pizzas)
  // sort
  const { name, type, order } = useAppSelector((state) => state.filter.sort)
  //search
  const search = useAppSelector((state) => state.search.value)
  //dispatch
  const dispatch = useAppDispatch()

  const skeletons = [...new Array(4)].map((_, i) => (
    <MyLoader className="flex" key={i} />
  ))

  useEffect(() => {
    dispatch(
      fetchPizzasItems({
        categoryId,
        type,
        order,
        search,
        limit,
        page,
      })
    )
  }, [categoryId, name, dispatch, type, order, search, limit, page])

  const isDataEmpty = !Array.isArray(items) || items.length < 1 || !items
  const dataFound = isLoading === 'loading' ? '' : isDataEmpty

  return (
    <div className="container mx-auto px-2 xl:px-16">
      <h1 className="xl:text-left text-center font-extrabold text-4xl">
        Все пиццы
      </h1>
      <div className="py-12">
        {isLoading === 'loading' && <div className="flex">{skeletons}</div>}
        {dataFound ? <NotFound /> : <PizzasItems items={items} />}

        {isLoading === 'error' && (
          <div className="p-20 text-center">
            <div className="text-[100px] text-gray-400 font-black ">404</div>
            <div className="text-red-400 text-3xl ">
              Не удается получить доступ к сайту
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContentMain
