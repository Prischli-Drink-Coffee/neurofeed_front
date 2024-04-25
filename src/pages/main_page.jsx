import {
  VStack,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
  TabIndicator,
  Heading,
} from '@chakra-ui/react';
import SideMenu from '../components/side_menu';
import Chat from '../components/chat';
import InputChat from '../components/input_chat';
import useWindowDimensions from '../hooks/use_window_dimensions';
import Histogram from '../components/histogram';

const MainPage = () => {
  const { width, height } = useWindowDimensions();
  return (
    <VStack
      width={'100%'}
      minH={'100vh'}
      backgroundColor={'black'}
      padding={width <= 1024 ? '1vh 5vw' : '5vh 20vw'}
    >
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
              <Chat
                messages={[
                  {
                    role: 'Neuro',
                    message:
                      'Этот компонент принимает массив messages, каждый элемент которого содержит объект с двумя полями: role (роль отправителя) и message (текст сообщения). Затем он маппит каждое сообщение и отображает его в блоке, подписывая его ролью отправителя. Сообщения от администратора будут отображаться серым фоном, а сообщения от пользователя - синим фоном.',
                  },
                  {
                    role: 'user',
                    message:
                      'вот смотри ээээээ допустим нейронка спрашивает мол она задает вопрос юзер спрашшивает ой че то погоди у меня мозги поплыли смотри да я часто начинаю с жтого диалог похуй чат бот задает пользователю вопрос допустим алмоапдоапловжалповжлаповап так щас где ты где ты леша где ты допустим был ли информативным хотя нет какая то хуйня проссто тут еще вопросы надо придумать для этой хуйни ллаллаплоадпвап леша блять я все вижу какая ты сука ',
                  },
                  {
                    role: 'Neuro',
                    message:
                      'напиши компонент для отображения чата на react chakra ui в который будет передаваться массив обьектов а он будет их отображать и подписывать кому принадлежит сообщение',
                  },
                  {
                    role: 'user',
                    message:
                      'сукаааааааааааа аыввахзывщаззывхывазывза',
                  },
                ]}
              />
              <InputChat />
            </TabPanel>
            <TabPanel>
              <Histogram />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </VStack>
  );
};

export default MainPage;
