import { useCallback, useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { spotifyApi } from "../../Api/SpotifyApi";
import { useStore } from "../../Store/store";
import { PlayerContainer, styles } from "./PlayerStyles";

export default function Player() {
  const songs = useStore((state) => state.songs);
  const [open, setOpen] = useState(false);
  const [play, setPlay] = useState(false);

  const playerCB = useCallback((state) => {
    if (!state.isPlaying) setPlay(false);
  }, []);

  useEffect(() => {
    if (!songs.length) return;
    setPlay(true);
  }, [songs]);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <PlayerContainer open={open}>
      <SpotifyPlayer
        token={spotifyApi.getAccessToken()}
        play={play}
        callback={playerCB}
        showSaveIcon
        syncExternalDevice
        uris={songs.length ? songs : null}
        styles={styles}
      />
    </PlayerContainer>
  );
}
