export const songsSlice = (set) => ({
  songs: [],
  currentSong: null,
  setCurrentSong: (currentSong) => set(() => ({ currentSong })),
});
