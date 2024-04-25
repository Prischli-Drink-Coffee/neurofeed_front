import { Textarea } from '@chakra-ui/react';

const InputChat = () => {
  return (
    <Textarea
      background={'black'}
      padding={'5px 10px'}
      border={'2px solid #FFAA00'}
      color={'white'}
      width={'100%'}
      resize={'none'}
      height={'70px'}
      placeholder="Please enter your text here"
    ></Textarea>
  );
};

export default InputChat;
