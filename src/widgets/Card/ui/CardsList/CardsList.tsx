import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from '../Card/Card'
import cls from './CardsList.module.scss'
import { useAppSelector } from 'app/stores/lib/reduxHooks'
import { FilterForm } from 'features/filterByTitle'

interface CardsListProps {
  className?: string
}

export const CardsList = ({ className }: CardsListProps) => {
  const films = useAppSelector((state) => state.filmReducer.films)
  const titleFilter = useAppSelector((state) => state.filterReducer.title)

  const filteredFilms = films.filter((film) => {
    const matchedTItle = film.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())

    return matchedTItle 
  })

  return (
    <div className={classNames(cls.CardsList, {}, [className])}>
      {filteredFilms.map((film) => (
        <Card key={film.id} film={film} />
      ))}
    </div>
  )
}
