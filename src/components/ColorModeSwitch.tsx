import { IconButton, useColorMode } from '@chakra-ui/react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Switch Color Mode"
      icon={
        colorMode === 'dark' ? (
          <BsSunFill color="yellow" />
        ) : (
          <BsMoonFill color="black" />
        )
      }
      onClick={toggleColorMode}
      marginLeft={2}
      borderRadius={20}
      // colorScheme={colorMode === 'dark' ? 'yellow' : 'gray'}
    />
  );
};

export default ColorModeSwitch;
