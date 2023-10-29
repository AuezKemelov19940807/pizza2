import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { RootState, AppDispatch } from '@/globalRedux/store'
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector