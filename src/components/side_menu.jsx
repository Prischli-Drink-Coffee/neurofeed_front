import { HStack, VStack, Text, Link, Stack, Image } from '@chakra-ui/react';
import useWindowDimensions from '../hooks/use_window_dimensions';
import logo from './../images/neuro_feed.png';
import { useNavigate } from 'react-router';
import { useStores } from '../store/store_context';
const SideMenu = () => {
  const navigate = useNavigate();
  const { GlobalVars } = useStores();
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
      <Text color={'white'}>{GlobalVars.username}</Text>
      <HStack spacing={5}>
        <Link
          onClick={() => navigate('/faq')}
          color={'#FFAA00'}
          fontSize={'20px'}
        >
          FAQ
        </Link>
      </HStack>
      <HStack spacing={5}>
        <Link
          onClick={() => navigate('/suggest')}
          color={'#FFAA00'}
          fontSize={'20px'}
        >
          Предложения
        </Link>
      </HStack>
      <HStack spacing={5}>
        <Link
          onClick={() => navigate('/contacts')}
          color={'#FFAA00'}
          fontSize={'20px'}
        >
          Контакты
        </Link>
      </HStack>
      <Image src={logo} height={'50px'} />
    </Stack>
  );
};

export default SideMenu;
