import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
