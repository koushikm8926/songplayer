import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Alert, Button, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

const ResetPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  
  const handlePasswordReset = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address!');
      return;
    }
    try {
      auth().languageCode = 'ca'; 
      // Send password reset email
      await auth().sendPasswordResetEmail(email);
      Alert.alert('ha enviat un correu electrònic per restablir la contrasenya a la teva adreça de correu electrònic.');
      navigation.navigate('Login'); // Redirect back to login screen after requesting password reset
    } catch (error) {
      console.error(error);
      Alert.alert('Error, no s ha pogut enviar l email de restabliment de contrasenya. Si us plau, intenta-ho més tard');
    }
  };


  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.container}>
       
        <Text style={styles.title}>Restablir Contrasenya</Text>
        <Text style={styles.description}>
         Introdueix el teu correu electrònic i rebràs instruccions 
         per restablir la contrasenya.
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={"black"}
            keyboardType="email-address"
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text.toLowerCase())}
          />
        </View>

      <View style={{justifyContent: 'center',alignItems: 'center',  }}>
          <TouchableOpacity style={styles.Button} onPress={handlePasswordReset}>
            <Text style={{color: 'white'}}>Continuar</Text>
          </TouchableOpacity>
      </View>
    
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView:{
    flex: 1, 
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    marginHorizontal: 22,
    marginVertical: 22,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 12,
    color: "black",
  },
  description: {
    fontSize: 16,
    color: "black",
  },
  inputContainer: {
    width: '100%',
    height: 48,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 22,
    marginTop: 20,
  },
  input: {
    width: '100%',
  },
  Button:{
    backgroundColor: '#5c10b2',
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    width:350, 
  },
});

export default ResetPassword;
