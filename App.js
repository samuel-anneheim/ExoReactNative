import React from 'react';
import {StyleSheet, View} from 'react-native';
import Calculatrice from './page/Calculatrice';
import FlexExo from './page/FlexExo';
import HomeNavigate from './page/HomeNavigate';

// Les exos sont commentaient il n'y a plus qu'à décommenter le composant nécessaire

const App = () => {
  return (
    <View style={styles.body}>
      <HomeNavigate />

      {/** exo calculatrice */}
      {/* <Calculatrice /> */}

      {/** Exo flexBox */}
      {/* <FlexExo /> */}
    </View>

    //calculatrice
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;
