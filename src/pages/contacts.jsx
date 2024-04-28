import { HStack, VStack, Link, Button } from '@chakra-ui/react';
import useWindowDimensions from '../hooks/use_window_dimensions';
import { useNavigate } from 'react-router';

const Contacts = () => {
  const { width, height } = useWindowDimensions();
  const navigate = useNavigate();
  return (
    <VStack width={'100%'} minH={'100vh'} align={'center'} justify={'center'} backgroundColor={'black'}>
      <VStack
        width={width <= 1024 ? '100%' : '40vh'}
        border={'2px solid #FFAA00'}
        padding={'20px'}
      >
        <Link href="https://t.me/Vladis_Rave" color={'#FFAA00'}>
          Telegram
        </Link>
        <Link
          href="https://vk.com/durov?ysclid=lvj3v8h0vv933131269"
          color={'#FFAA00'}
        >
          VKontakte
        </Link>
        <Button
          padding={'5px 10px'}
          border={'2px solid #FFAA00'}
          color={'white'}
          alignSelf={'center'}
          _hover={{ background: '#FFAA00' }}
          onClick={() => navigate('/main_page')}
        >
          Назад
        </Button>
      </VStack>
    </VStack>
  );
};

export default Contacts;
