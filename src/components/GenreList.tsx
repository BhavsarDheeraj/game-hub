import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCropperImageUrl from '../services/image-url';
import GenreListSkeleton from './GenreListSkeleton';

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <GenreListSkeleton />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data.map(genre => (
          <ListItem key={genre.id}>
            <Button
              variant="link"
              onClick={() => onSelectGenre(genre)}
              whiteSpace="normal"
              textAlign="left"
            >
              <HStack spacing={2} paddingY="5px">
                <Image
                  boxSize="32px"
                  borderRadius="8px"
                  src={getCropperImageUrl(genre.image_background)}
                  objectFit="cover"
                />
                <Text
                  fontSize="lg"
                  fontWeight={
                    genre.id === selectedGenre?.id ? 'bold' : 'normal'
                  }
                >
                  {genre.name}
                </Text>
              </HStack>
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
