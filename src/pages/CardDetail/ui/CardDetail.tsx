import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CardDetail.module.scss'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'app/stores/lib/reduxHooks'
import {
  fetchFilmById,
} from 'pages/MainPage/api/filmsActionCreator'
import { Link } from 'react-router-dom'
import { routePaths } from 'shared/config/routeConfig/routeConfig'

interface CardDetailProps {
  clasName?: string
}

export const CardDetail = ({ clasName }: CardDetailProps) => {
  const { id } = useParams<{ id: string }>()
  const { film, isLoading } = useAppSelector((state) => state.filmReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmById(Number(id)))
    }
  }, [dispatch, id])

  return (
    <>
      <Link className={cls.backLink} to={routePaths.main}>
        Назад к каталогу
      </Link>
      <div className="container">
        {isLoading ? (
          <div className={cls.loader}>Загрузка поста...</div>
        ) : (
          <div className={classNames(cls.CardDetail, {}, [clasName])}>
            <div className={cls.postContent}>
              <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} className={cls.img}/>
              <div className={cls.textContent}>
                <div className={cls.title}>{film.title}</div>
                <div>{film.overview}</div>
                <div className={cls.rating}><span>Rating:</span> {film.vote_average}</div>
                <div className={cls.runtime}><span>Runtime:</span> {film.runtime}</div>

                <div className={cls.relase}><span>Relase date:</span> {film.release_date}</div>
                
                <div className={cls.prodComp}>
                  Production companies:
                </div>
                {film.production_companies.map((filmm) => (
                  <>
                    <div>
                      {filmm.logo_path ? 
                         <img src={`https://image.tmdb.org/t/p/w50${filmm.logo_path}`} alt={filmm.name} /> 
                         : null
                      }
                    </div>
                  </>
                ))}

              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
