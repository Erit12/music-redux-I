import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSong } from "../redux/libraryActions";
import styled from "styled-components";

const LibraryContainer = styled.div`
  flex: 1;
  background-color: #1f2937;
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.highlight};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const SongItem = styled.div`
  padding: ${({ theme }) => theme.spacing.small};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemoveButton = styled.button`
  padding: 6px 12px;
  background-color: ${({ theme }) => theme.colors.danger};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

function Library() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state);

  return (
    <LibraryContainer>
      <Title>Mi Biblioteca</Title>
      {songs.length === 0 ? (
        <p>No has agregado canciones aún.</p>
      ) : (
        songs.map((song) => (
          <SongItem key={song.idAlbum}>
            <p><strong>{song.title}</strong> - {song.artist}</p>
            <RemoveButton onClick={() => dispatch(removeSong(song.idAlbum))}>
              Eliminar
            </RemoveButton>
          </SongItem>
        ))
      )}
    </LibraryContainer>
  );
}

export default Library;