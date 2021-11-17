import create from "zustand";
import { authSlice } from "./authSlice";
import { playlistSlice } from "./playlistSlice";
import { searchSlice } from "./searchSlice";
import { songsSlice } from "./songsSlice";

export const useStore = create((set, get) => ({
  ...authSlice(set, get),
  ...playlistSlice(set, get),
  ...searchSlice(set, get),
  ...songsSlice(set, get),
}));
