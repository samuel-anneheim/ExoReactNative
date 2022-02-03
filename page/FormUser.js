import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

//Page de la liste des utilisateurs pour l'exo navigation
export const FormUser = ({route, navigation}) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  let {setUser, users} = route.params;

  /**
   * Modification du state prenom lors de la modification de l'input prenom
   * @param {void} e event
   */
  const handleChangePrenom = e => {
    setPrenom(e);
  };

  /**
   * Modification du state nom lors de la modification de l'input nom
   * @param {void} e event
   */
  const handleChangeNom = e => {
    setNom(e);
  };

  /**
   * Validation du formulaire et insertion de l'utilisateur qui retourne la page user
   */
  const handleSubmit = () => {
    const key = users.length + 1;
    const newUser = {key: `${key}`, nom: nom, prenom: prenom};
    setUser([...users, newUser]);
    navigation.goBack();
  };

  return (
    <View>
      <Text>Ajout User</Text>
      <TextInput onChangeText={handleChangePrenom} placeholder="Prenom" />
      <TextInput onChangeText={handleChangeNom} placeholder="Nom" />
      <View>
        <Button title="envoyer" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default FormUser;
