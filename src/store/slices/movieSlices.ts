import {
  createSlice,
  Slice,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { reset } from "../actions";

const moviesSlice: Slice = createSlice({
  name: "movie",
  initialState: <Movie[]>[],
  reducers: {
    addMovie(state, action: PayloadAction<Movie>) {
      state.push(action.payload);
    },
    removeMovie(state, action: PayloadAction<Movie>) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder: ActionReducerMapBuilder<Song[]>) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
