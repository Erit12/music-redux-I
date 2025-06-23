import styled from "styled-components";

const LibraryContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #e8f4ea;
  border-radius: ${({ theme }) => theme.borderRadius};
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


export { LibraryContainer, Title, SongItem } 