import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

//Page de la liste des utilisateurs pour l'exo navigation
export const User = ({navigation}) => {
  const [users, setUser] = useState([
    {key: '1', nom: 'anneheim', prenom: 'samuel'},
  ]);

  /**
   * Navigation vers la création d'un user
   */
  const handleNavigateNewUser = () => {
    navigation.navigate('FormUser', {setUser: setUser, users: users});
  };

  return (
    <View style={styles.view}>
      <ScrollView>
        <Text>User</Text>
        <FlatList
          data={users}
          renderItem={({item}) => (
            <View>
              <Text style={styles.text}>
                {item.key} : {item.nom} {item.prenom}
              </Text>
            </View>
          )}
        />
        <View style={styles.button}>
          <Button onPress={handleNavigateNewUser} title="add user" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    marginTop: 10,
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
  },
});

export default User;
