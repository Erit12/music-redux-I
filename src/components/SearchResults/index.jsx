import { Link } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import { addSong } from "../redux/libraryActions";
import useFetch from "../../hooks/useFetch";


import { ResultsContainer, ResultTitle, SongBlock, AlbumTitle } from "./style";

function SearchResults({ searchTerm}) {
  //const dispatch = useDispatch();

  const url = searchTerm
    ? `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${searchTerm}`
    : null;
  const { data, loading, error, refetch } = useFetch(url);

  if (loading) return <p>Cargando...</p>;
  if (error) return <div><p>{error}</p><button onClick={refetch}>Reintentar</button></div>;
  

  const albums =  data ? [...data] : [];

  const albumList = albums.map((album) => ({
    idAlbum: album.idAlbum,   
    title: album.strAlbum,
    artist: album.strArtist,
    strintYearReleased: album.intYearReleased
  }));

  return (
    <ResultsContainer>
      <ResultTitle>Resultados de Búsqueda</ResultTitle>
      { albumList.map((album) => (
        <SongBlock key={album.idAlbum}>
          <Link to={`/song/${album.idAlbum}`}>
            <AlbumTitle><strong>{album.title}</strong> - {album.artist}</AlbumTitle>
          </Link>
          </SongBlock>
      ))}
    </ResultsContainer>
  );
}

export default SearchResults;
