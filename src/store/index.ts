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
    // resetMovies(state, action) {
    //   console.log(state, action);
    //   return [];
    // },
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
    // resetAll(state, action) {
    //   action.payload();
    //   return [];
    // },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

export { store };
export const { addSong, removeSong /* resetAll */ } = songsSlice.actions;
export const { addMovie, removeMovie /* resetMovie */ } = moviesSlice.actions;
