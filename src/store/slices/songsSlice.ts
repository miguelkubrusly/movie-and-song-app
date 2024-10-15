import {
  createSlice,
  Slice,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { reset } from "../actions";

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

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
