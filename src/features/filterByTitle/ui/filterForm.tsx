import React, { ChangeEvent, FC, FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTitleFilter } from '../module/filterSlice'
import { useAppSelector } from 'app/stores/lib/reduxHooks'


export const FilterForm: FC = () => {
  const { title } = useAppSelector(
    (state) => state.filterReducer
  )
  const dispatch = useDispatch()

  const handleTitleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitleFilter(e.target.value))
  }


  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            value={title}
            type="text"
            placeholder="Filter by title..."
            onChange={handleTitleFilter}
          />
        </div>
      </div>
    </div>
  )
}
