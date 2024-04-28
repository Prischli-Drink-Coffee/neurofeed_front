import {
  VStack,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
  TabIndicator,
  Heading,
  Input,
} from '@chakra-ui/react';
import SideMenu from '../components/side_menu';
import Chat from '../components/chat';
import InputChat from '../components/input_chat';
import useWindowDimensions from '../hooks/use_window_dimensions';
import Histogram from '../components/histogram';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useStores } from '../store/store_context';
import { useState } from 'react';

const MainPage = () => {
  const { GlobalVars } = useStores();

  const navigate = useNavigate();
  const [vebinarId, setVebinarId] = useState();
  const { width, height } = useWindowDimensions();
  const [messagesList, updateMessagesList] = useState([
    {
      role: 'Neuro',
      message:
        'Привет, меня попросили узнать твое мнение о прошедшем мероприятии, расскажи о нем пожалуйста;)',
    },
  ]);
  useEffect(() => {
    if (GlobalVars.token == null) {
      navigate('/');
    }
  }, [GlobalVars.token]);

  useEffect(() => {
    GlobalVars.getMe();
  }, []);

  return (
    <VStack
      width={'100%'}
      minH={'100vh'}
      backgroundColor={'black'}
      padding={width <= 1024 ? '1vh 5vw' : '5vh 20vw'}
    >
      <Heading onClick={() => GlobalVars.updateToken(null)}> </Heading>
      <SideMenu />
      <VStack
        width={'100%'}
        borderLeft={width <= 1024 ? '0px' : '2px solid #FFAA00'}
        borderTop={width <= 1024 ? '2px solid #FFAA00' : '0px'}
        padding={'20px'}
        minH={'100%'}
      >
        <Tabs variant="enclosed" width={'100%'}>
          <TabList width={'100%'} gap={'40px'}>
            <Tab color={'#FFAA00'} fontSize={20}>
              ВЗАИМОДЕЙСТВИЕ
            </Tab>
            <Tab color={'#FFAA00'} fontSize={20}>
              ДАННЫЕ
            </Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="#FFAA00"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <Input
                background={'black'}
                padding={'5px 10px'}
                border={'2px solid #FFAA00'}
                color={'white'}
                placeholder="id мероприятия"
                marginTop={'20px'}
                onChange={e => setVebinarId(e.target.value)}
              />

              <Chat messages={messagesList} />
              <InputChat
                updateMessagesList={updateMessagesList}
                messagesList={messagesList}
              />
            </TabPanel>
            {GlobalVars.is_admin ? (
              <TabPanel>
                <Histogram />
              </TabPanel>
            ) : null}
          </TabPanels>
        </Tabs>
      </VStack>
    </VStack>
  );
};

export default MainPage;
