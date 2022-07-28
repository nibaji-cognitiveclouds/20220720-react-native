import React from 'react';
import { View } from 'react-native';

import Home from "./src/components/Home";
import TheModal from './src/components/Modal';
import { AppProvider } from './src/context/AppContext';
import AppStack from './src/navigation/AppStack';


const App = () => {

  return (
    <AppProvider>
      <>
        <AppStack />
        <TheModal />
      </>
    </AppProvider>
  );
};

export default App;
