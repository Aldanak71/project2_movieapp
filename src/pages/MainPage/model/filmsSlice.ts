import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilmInitialState, Films } from './types/filmTypes'
import {
  // fetchCommentById,
  fetchFilmById,
  fetchFilms,
} from '../api/filmsActionCreator'

const initialState: FilmInitialState = {
  films: [],
  film: {
    id: 0,
    title: '',
    backdrop_path: '',
    poster_path: '',
    overview: '',
    production_companies: [],
    release_date: '',
    vote_average: 0,
    runtime: 0
  },
  isLoading: false,
  totalPages: 0,
}

const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    removeFilm: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        posts: state.films.filter((el) => el.id !== action.payload),
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchFilms.fulfilled,
        (state, action: PayloadAction<Films[]>) => {
          state.isLoading = false
          state.films = action.payload
          state.totalPages = Math.ceil(100 / 10)
        }
      )
      .addCase(fetchFilms.rejected, (state) => {
        state.isLoading = false
      })
      // Редуссеры для получния поста по id
      .addCase(fetchFilmById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchFilmById.fulfilled,
        (state, action: PayloadAction<Films>) => {
          state.isLoading = false
          state.film = action.payload
        }
      )
      .addCase(fetchFilmById.rejected, (state) => {
        state.isLoading = false
      })
      // // Редуссеры для получния комментария к посту по id
      // .addCase(fetchCommentById.pending, (state) => {
      //   state.isLoading = true
      // })
      // .addCase(
      //   fetchCommentById.fulfilled,
      //   (state, action: PayloadAction<Comments[]>) => {
      //     state.isLoading = false
      //     state.comments = action.payload
      //   }
      // )
      // .addCase(fetchCommentById.rejected, (state) => {
      //   state.isLoading = false
      // })
  },
})

export default filmSlice.reducer
export const { removeFilm } = filmSlice.actions
