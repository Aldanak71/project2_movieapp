import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import { FC, MouseEvent } from 'react'
import { useAppDispatch } from 'app/stores/lib/reduxHooks'
import { removeFilm } from 'pages/MainPage/model/filmsSlice'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { Films } from 'pages/MainPage'

interface CardProps {
  className?: string
  film: Films
}

export const Card: FC<CardProps> = ({ className, film }) => {
  const router = useNavigate()

  return (
    <>
      <div
        onClick={() => router(`/movies/${film.id}`)}
        className={classNames(cls.Card, {}, [className])}
      >
        <img src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} className={cls.img}/>
        <div className={cls.cardContent}>
          <div className={cls.text_content}>
            <h1>{film.title}</h1>
          </div>
        </div>
      </div>
    </>
  )
}
