import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useAppDispatch, useAppSelector } from 'app/stores/lib/reduxHooks'
import { setOnlyFaovrite } from 'pages/MainPage/model/filterSlice'
import { FilterForm } from 'features/filterByTitle'

interface NavbarProps {
  className?: string
}

export const apiKey = '2d7fe9381a7344f73b0c649e50f75c40'

export const Navbar = ({ className }: NavbarProps) => {
  const { title } = useAppSelector((state) => state.filterReducer)
  const { films } = useAppSelector((state) => state.filmReducer)

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      Каталог фильмов
      <form>
        <FilterForm />
      </form>
    </div>
  )
}
