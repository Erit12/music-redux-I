import Song from "../Song";
import { LibraryContainer, Title } from "./style";
import { useSelector } from "react-redux";


function Library() {

  const songs = useSelector((state) => state.songs);

  return (
    <LibraryContainer >
       <Title>Mi Biblioteca</Title>
      {songs.length === 0 ? (
        <p>No has agregado canciones aún.</p>
      ) : (
        songs.map((song) => <Song key={song.idTrack} song={song} />)
      )}
    </LibraryContainer>
  );
}

export default Library;