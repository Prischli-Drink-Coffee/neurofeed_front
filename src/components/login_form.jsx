import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  VStack,
  Flex,
  Box,
  Image,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { useStores } from '../store/store_context';
import logo from './../images/neuro_feed.png';
import { useNavigate } from 'react-router';

const validationSchema = Yup.object({
  username: Yup.string().min(4).required('Обязательное поле'),
  hashed_pass: Yup.string().min(4).required('Обязательное поле'),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const { GlobalVars } = useStores();
  const formik = useFormik({
    initialValues: {
      username: '',
      hashed_pass: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log(JSON.stringify(values));
      GlobalVars.updateToken('asdalksdaskldlja;sdkjfasdjfk;asdjfl;askdf;jasldfjsadf');
    },
  });
  useEffect(() => {
    if (GlobalVars.token != null) {
      navigate('/main_page');
    }
  }, [GlobalVars.token]);

  return (
    <VStack
      bg="transparent"
      align="center"
      justify="center"
      h="100vh"
      color={'#FFAA00'}
    >
      <Image src={logo} height={'100px'} />
      <Box bg="transparent" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="username">Email</FormLabel>
              <Input
                id="username"
                name="username"
                background={'black'}
                padding={'5px 10px'}
                border={'2px solid #FFAA00'}
                color={'white'}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="hashed_pass"
                name="hashed_pass"
                type="password"
                background={'black'}
                padding={'5px 10px'}
                border={'2px solid #FFAA00'}
                color={'white'}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
            <Button
              type="submit"
              padding={'5px 10px'}
              border={'2px solid #FFAA00'}
              color={'white'}
              alignSelf={'center'}
              _hover={{ background: '#FFAA00' }}
            >
              Войти
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
};
export default LoginForm;
