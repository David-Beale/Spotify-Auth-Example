import { useEffect, useState } from "react";
import { spotifyApi } from "../../Api/SpotifyApi";
import { useStore } from "../../Store/store";
import Playlist from "./Playlist/Playlist";
import { SidePanelContainer } from "./SidePanelStyle";

const likedSongs = { name: "Liked Songs", id: "liked" };

export default function SidePanel() {
  const [open, setOpen] = useState(false);
  const selectedPlaylist = useStore((state) => state.selectedPlaylist);

  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    setOpen(true);
    (async () => {
      const playlists = await spotifyApi.getPlaylists();
      setPlaylists([likedSongs, ...playlists]);
    })();
  }, []);

  return (
    <SidePanelContainer open={open}>
      {playlists.map((playlist) => (
        <Playlist
          key={playlist.id}
          playlist={playlist}
          selected={selectedPlaylist === playlist.id}
        />
      ))}
    </SidePanelContainer>
  );
}
