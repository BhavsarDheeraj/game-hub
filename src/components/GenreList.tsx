import { Button, HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCropperImageUrl from '../services/image-url';
import GenreListSkeleton from './GenreListSkeleton';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <GenreListSkeleton />;

  return (
    <List>
      {data.map(genre => (
        <ListItem key={genre.id}>
          <Button variant="link" onClick={() => onSelectGenre(genre)}>
            <HStack spacing={2} paddingY="5px">
              <Image
                boxSize="32px"
                borderRadius="8px"
                src={getCropperImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
