import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';

const GenreListSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <List>
      {skeletons.map(skeleton => (
        <ListItem key={skeleton}>
          <HStack spacing={2} paddingY="5px">
            <Skeleton boxSize="32px" borderRadius="8px" />
            <SkeletonText />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
