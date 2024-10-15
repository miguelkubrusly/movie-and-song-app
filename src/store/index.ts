import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { moviesReducer, addMovie, removeMovie } from "./slices/movieSlices";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { reset } from "./actions";

const store: EnhancedStore = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };
