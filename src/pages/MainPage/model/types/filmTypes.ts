export interface Films {
  id: number
  title: string
  backdrop_path: string
  overview: string
  poster_path: string
  release_date: string
  vote_average: number
  runtime: number
  production_companies: ProdCountries[]
}

interface ProdCountries {
  id: number
  logo_path: string
  name: string
}

// export interface Comments {
//   id: number
//   name: string
//   body: string
//   email: string
// }

export interface FilmInitialState {
  films: Films[]
  film: Films
  isLoading: boolean
  totalPages: number
}
