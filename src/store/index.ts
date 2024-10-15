import { configureStore, createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movie",
  initialState: <any>[],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    resetMovies(state, action) {
      return [];
    },
  },
});

const songsSlice = createSlice({
  name: "song",
  initialState: <any>[],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    resetSongs(state, action) {
      return [];
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

export { store };
export const { addSong, removeSong, resetSongs } = songsSlice.actions;
export const { addMovie, removeMovie, resetMovies } = moviesSlice.actions;
