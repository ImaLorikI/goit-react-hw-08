import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    filterNumbers: (state, action) => {
      return action.payload;
    },
  },
});

export const { filterNumbers } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
