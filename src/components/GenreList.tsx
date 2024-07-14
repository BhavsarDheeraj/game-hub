import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCropperImageUrl from '../services/image-url';

const GenreList = () => {
  const { data: genres } = useGenres();

  return (
    <List>
      {genres.map(genre => (
        <ListItem key={genre.id}>
          <HStack spacing={2} paddingY="5px">
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={getCropperImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
