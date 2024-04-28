import { Textarea, Input, HStack, Button, Stack } from '@chakra-ui/react';
import useWindowDimensions from '../hooks/use_window_dimensions';
import { useState } from 'react';

const InputChat = ({ updateMessagesList, messagesList, disabled = false }) => {
  const { width, height } = useWindowDimensions();
  const [msg, setMsg] = useState('');
  return (
    <Stack
      width={'100%'}
      direction={width <= 1024 ? 'column' : 'row'}
      align={'center'}
      justify={width <= 1024 ? 'center' : 'flex-start'}
    >
      <Textarea
        background={'black'}
        padding={'5px 10px'}
        border={'2px solid #FFAA00'}
        color={'white'}
        width={width <= 1024 ? '100%' : '80%'}
        resize={'none'}
        height={'70px'}
        placeholder="Please enter your text here"
        onChange={e => {
          setMsg(e.target.value);
        }}
      ></Textarea>
      {!disabled ? (
        <Button
          padding={'5px 10px'}
          border={'2px solid #FFAA00'}
          color={'white'}
          alignSelf={'center'}
          _hover={{ background: '#FFAA00' }}
          onClick={() => {
            if (msg != '') {
              let newMessagesList = Array.from(messagesList);
              newMessagesList.push({ role: 'user', message: msg });
              updateMessagesList(newMessagesList);
            }
          }}
        >
          Отправить
        </Button>
      ) : null}
    </Stack>
  );
};

export default InputChat;
