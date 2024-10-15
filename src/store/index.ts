import {
  configureStore,
  createSlice,
  createAction,
  PayloadAction,
  ActionReducerMapBuilder,
  Slice,
  EnhancedStore,
} from "@reduxjs/toolkit";
import { TypedActionCreator } from "@reduxjs/toolkit/dist/mapBuilders";

export type Movie = string;
export type Song = string;
export type AppDispatch = { payload: any; type: string };
export type RootState = ReturnType<typeof store.getState>;

export const reset: TypedActionCreator<string> = createAction("app/action");

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

const songsSlice: Slice = createSlice({
  name: "song",
  initialState: <Song[]>[],
  reducers: {
    addSong(state, action: PayloadAction<Song>) {
      state.push(action.payload);
    },
    removeSong(state, action: PayloadAction<Song>) {
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

const store: EnhancedStore = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
