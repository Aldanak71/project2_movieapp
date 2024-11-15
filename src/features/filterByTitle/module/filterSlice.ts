import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface FilterState {
  title: string
}

const initialState: FilterState = {
  title: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
            setTitleFilter: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
    },
  },
)

export const {reducer: filterReducer} = filterSlice
export const { setTitleFilter } = filterSlice.actions