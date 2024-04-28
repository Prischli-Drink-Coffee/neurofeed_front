import { HStack, VStack, Link, Button, Text } from '@chakra-ui/react';
import useWindowDimensions from '../hooks/use_window_dimensions';
import { useNavigate } from 'react-router';

const Suggest = () => {
  const { width, height } = useWindowDimensions();
  const navigate = useNavigate();
  return (
    <VStack
      width={'100%'}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      backgroundColor={'black'}
    >
      <VStack
        width={width <= 1024 ? '100%' : '40vh'}
        border={'2px solid #FFAA00'}
        padding={'20px'}
      >
        <Text color={'#FFAA00'} textAlign={'flex-start'}>
          Все предложения и отзывы направляйте нашему менеджеру! Наши
          программисты не колл центр чтобы всем отвечать!{' '}
        </Text>
        <Link href="https://t.me/Vladis_Rave" color={'#FFAA00'}>
          Telegram
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

export default Suggest;
