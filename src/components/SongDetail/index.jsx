import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";


import { DetailContainer, AlbumTitle, AddButton, SongContainer, PreviousPage} from "./style";
import { useDispatch } from "react-redux";
import { addSong } from "../../redux/libraryActions";

function SongDetail(  ) {
const dispatch = useDispatch();

  const { id } = useParams();
  const url = `https://www.theaudiodb.com/api/v1/json/2/track.php?m=${id}`;

  const { data, loading, error, refetch } = useFetch(url);

  if (loading) return <p>Cargando...</p>;
  if (error) return <div><p>{error}</p><button onClick={refetch}>Reintentar</button></div>;

  const songs =  data ? [...data] : [];

  if (!songs) return <p>No se encontró información del álbum.</p>;
  return (
    <DetailContainer>
      <Link to={`/`}><PreviousPage>Go back</PreviousPage></Link>
      { songs.map((song) => (
        <SongContainer key={song.idTrack}>
          
            <AlbumTitle>Cancion: <strong>{song.strTrack}</strong> - Artista:  {song.strArtist}  -  Album: {song.strAlbum}</AlbumTitle>
            <AddButton onClick={() => dispatch(addSong(song))}>Agregar a mi biblioteca</AddButton> 
          
        </SongContainer>
      ))}


    </DetailContainer>
  );
}

export default SongDetail;