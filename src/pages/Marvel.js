import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import Container from '../components/Container';

const Marvel = ({navigation}) => {
  const navigate = () => {
    navigation.navigate('Character');
  };

  return (
    <Container>
      <Image
        style={styles.logo}
        source={require('../../assets/captainamericashield.png')}
      />
      <Text style={styles.welcomeText}>
        Welcome to the the Marvel Gallery, here you can find all your favorite
        Marvel characters. All the data is provided by the Marvel API.
      </Text>
      <Pressable onPress={navigate} style={styles.button}>
        <Text style={styles.buttonText}>Search characters ></Text>
      </Pressable>
    </Container>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    color: '#fff',
    padding: 20,
    fontSize: 20,
  },
  logo: {
    height: 120,
    width: 120,
    marginTop: 20,
    alignSelf: 'center',
  },
  button: {
    marginTop: 40,
    backgroundColor: '#eaeaea',
    alignSelf: 'center',
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default Marvel;
