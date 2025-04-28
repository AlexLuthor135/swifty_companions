import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert} from 'react-native';
import styles from '../styles/LoginScreenStyle'

export default function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const handleSubmit = () => {
    if (login.trim() === '') {
      Alert.alert('Validation', 'Please enter a login');
      return ;
    }
    navigation.navigate('Profile', { userLogin: login });
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Swifty Companion</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter student's login"
        value={login}
        onChangeText={setLogin}
      />
      <Button title="Search" onPress={handleSubmit} />
    </View>
  );
}