import React from 'react';
import { ChakraBaseProvider, theme } from '@chakra-ui/react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/main_page';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import LoginPage from './pages/login_page';
import RootStore from './store/root_store';
import { RootStoreContext } from './store/store_context';
import Contacts from './pages/contacts';
import Faq from './pages/faq';
import Suggest from './pages/suggestions';

const router = createHashRouter([
  {
    element: <LoginPage />,
    path: '/',
  },
  {
    element: <MainPage />,
    path: '/main_page',
  },
  {
    element: <Contacts />,
    path: '/contacts',
  },
  {
    element: <Faq />,
    path: '/faq',
  },
  {
    element: <Suggest />,
    path: '/suggest',
  },
]);

function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <ChakraBaseProvider>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: 'black',
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#FFAA00',
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 40,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <RouterProvider router={router} />
      </ChakraBaseProvider>
    </RootStoreContext.Provider>
  );
}

export default App;
