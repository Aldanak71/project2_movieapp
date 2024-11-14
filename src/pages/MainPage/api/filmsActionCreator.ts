import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Films } from '../model/types/filmTypes'
import { apiKey } from 'widgets/Navbar/ui/Navbar'

export const fetchFilms = createAsyncThunk(
  'post/fetchPosts',
  async (_, thunkApi) => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/popular',
        {
          params: {
            api_key: apiKey,
          },
        }
      )
      console.log(response.data.results)

      return response.data.results
    } catch (e: any) {
      console.log(e.message)
    }
  }
)

export const fetchFilmById = createAsyncThunk(
  'post/fetchFilmById',
  async (id: number, thunkApi) => {
    try {
      const response = await axios.get<Films>(
        `https://api.themoviedb.org/3/movie/` + id, 
        {
          params: {
            api_key: apiKey
          }
        }
      )
      console.log(response.data)
      return response.data
    } catch (e: any) {
      console.log(e.message)
    }
  }
)

// export const fetchCommentById = createAsyncThunk(
//   'post/fetchCommentById',
//   async (id: number, thunkApi) => {
//     try {
//       const response = await axios.get<Comments[]>(
//         `https://jsonplaceholder.typicode.com/posts/${id}/comments`
//       )
//       return response.data
//     } catch (e: any) {
//       console.log(e.message)
//     }
//   }
// )
