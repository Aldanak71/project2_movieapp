import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MainPage.module.scss'
import { CardsList } from 'widgets/Card'
import { useEffect, useState } from 'react'
import { fetchFilms } from '../api/filmsActionCreator'
import { useAppDispatch, useAppSelector } from 'app/stores/lib/reduxHooks'
import { FilterForm } from 'features/filterByTitle'
// import { Pagination } from 'widgets/Pagination'

interface MainPageProps {
  clasName?: string
}

export const MainPage = ({ clasName }: MainPageProps) => {
  // const [currentPage, setCurrentPage] = useState<number>(1)
  const { isLoading } = useAppSelector((state) => state.filmReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFilms())
  }, [dispatch])


  return (
    <div className="container">
      <div className={classNames(cls.MainPage, {}, [clasName])}>
        {isLoading ? (
          <div className={cls.loader}>Загрузка...</div>
        ) : (
          <>
            <CardsList />
            {/* <Pagination setCurrentPage={setCurrentPage} /> */}
          </>
        )}
      </div>
    </div>
  )
}
