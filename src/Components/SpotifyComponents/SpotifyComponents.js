import { useStore } from "../Store/store";
import Header from "./Header/Header";
import PlaylistTracks from "./PlaylistTracks/PlaylistTracks";
import SearchTracks from "./SearchTracks/SearchTracks";
import SidePanel from "./SidePanel/SidePanel";
import Player from "./Player/Player";

export default function SpotifyComponents() {
  const loggedIn = useStore((state) => state.loggedIn);

  if (loggedIn !== true) return null;
  return (
    <>
      <Player />
      <Header />
      <SidePanel />
      <PlaylistTracks />
      <SearchTracks />
    </>
  );
}
