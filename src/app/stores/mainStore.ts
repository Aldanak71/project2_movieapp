import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { filterReducer } from 'features/filterByTitle'
import filmReducer from 'pages/MainPage/model/filmsSlice'

const rootState = combineReducers({
  filmReducer,
  filterReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootState,
  })
}

export type RootState = ReturnType<typeof rootState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispath = AppStore['dispatch']
