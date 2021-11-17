import {
  TrackResultContainer,
  Image,
  TextContainer,
  TrackTitle,
  Artist,
  Duration,
} from "./TrackResultStyle";

export default function TrackResult({ track, selectSong, top, isPlaying }) {
  const onClick = () => {
    selectSong(track.id);
  };
  return (
    <TrackResultContainer onClick={onClick} top={top} isPlaying={isPlaying}>
      <Image src={track.albumUrl} alt={track.title} />
      <TextContainer>
        <TrackTitle isPlaying={isPlaying}>{track.title}</TrackTitle>
        <Artist>{track.artist}</Artist>
      </TextContainer>
      <Duration>{track.duration}</Duration>
    </TrackResultContainer>
  );
}
