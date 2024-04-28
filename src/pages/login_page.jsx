import { HStack, VStack } from '@chakra-ui/react';
import LoginForm from '../components/login_form';


const LoginPage = () => {
  return (
    <VStack
      width={'100%'}
      minH={'100vh'}
      backgroundColor={'black'}
      align="center"
      justify={'center'}
    >
        <LoginForm/>
    </VStack>
  );
};

export default LoginPage;
