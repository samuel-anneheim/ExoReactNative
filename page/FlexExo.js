import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

//Page de l'exo sur les flexbox
export const FlexExo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://image.freepik.com/icones-gratuites/maison-habitation_318-1861.jpg?w=826',
          }}
        />
        <Image
          style={styles.logo}
          source={{
            uri: 'https://image.freepik.com/icones-gratuites/maison-habitation_318-1861.jpg?w=826',
          }}
        />
        <Image
          style={styles.logo}
          source={{
            uri: 'https://image.freepik.com/icones-gratuites/maison-habitation_318-1861.jpg?w=826',
          }}
        />
      </View>
      <View style={styles.containerContent}>
        <View style={styles.sideBar}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://image.freepik.com/icones-gratuites/maison-habitation_318-1861.jpg?w=826',
            }}
          />
          <Image
            style={styles.logo}
            source={{
              uri: 'https://image.freepik.com/icones-gratuites/maison-habitation_318-1861.jpg?w=826',
            }}
          />
          <Image
            style={styles.logo}
            source={{
              uri: 'https://image.freepik.com/icones-gratuites/maison-habitation_318-1861.jpg?w=826',
            }}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Mise en page flexbox</Text>
          <Image
            style={styles.image}
            source={{
              uri: 'https://amsilabs.com/wp-content/uploads/2020/03/developpeur-react-native-mission-freelance-et-remote.jpg',
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerContent: {
    flexDirection: 'row',
    flex: 13,
  },
  sideBar: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content: {
    marginTop: 10,
    alignItems: 'center',
    flex: 7,
  },
  logo: {
    width: 40,
    height: 40,
  },
  image: {
    width: 135,
    height: 150,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
});

export default FlexExo;
