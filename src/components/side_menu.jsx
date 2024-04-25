import { HStack, VStack, Text, Link, Stack } from '@chakra-ui/react';
import useWindowDimensions from '../hooks/use_window_dimensions';
const SideMenu = () => {
  const { width, height } = useWindowDimensions();
  return (
    <Stack
      position={width <= 1024 ? 'initial' : 'fixed'}
      left={'10vw'}
      bg="transparent"
      width={width <= 1024 ? '100%' : '10vw'}
      spacing={4}
      padding={4}
      height={width <= 1024 ? '5vh' : '80vh'}
      align={width <= 1024 ? 'center' : 'flex-end'}
      justify={width <= 1024 ? 'flex-end' : 'auto'}
      direction={width <= 1024 ? 'row' : 'column'}
    >
      <HStack spacing={5}>
        <Link href="#" color={'#FFAA00'} fontSize={'20px'}>
          FAQ
        </Link>
      </HStack>
      <HStack spacing={5}>
        <Link href="#" color={'#FFAA00'} fontSize={'20px'}>
          Предложения
        </Link>
      </HStack>
      <HStack spacing={5}>
        <Link href="#" color={'#FFAA00'} fontSize={'20px'}>
          Контакты
        </Link>
      </HStack>
    </Stack>
  );
};

export default SideMenu;
