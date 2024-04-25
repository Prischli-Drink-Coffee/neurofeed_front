import React from 'react';
import { VStack, Box, Text, Input, Textarea } from '@chakra-ui/react';

const Chat = ({ messages }) => {
  return (
    <VStack
      width={'100%'}
      align={'flex-start'}
      padding={'20px 0px'}
      height={'100%'}
    >
      <VStack
        align="stretch"
        width={'100%'}
        height={'50vh'}
        overflowY={'scroll'}
      >
        {messages.map((message, index) => (
          <VStack
            key={index}
            spacing={0}
            bgColor={'black'}
            align={'flex-start'}
            width={'100%'}
          >
            <Text fontWeight="bold" color={'#FFAA00'}>
              {message.role === 'Neuro' ? 'ИИ' : 'Пользователь'}
            </Text>
            <Text color={'white'}>{message.message}</Text>
          </VStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default Chat;
