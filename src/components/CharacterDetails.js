import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const CharacterDetails = ({closeModal, character}) => {
  return (
    <View style={styles.detailsContainer}>
      <Pressable style={styles.closeButton} onPress={closeModal}>
        <Text style={styles.textButton}>Close X</Text>
      </Pressable>
      <View style={styles.infoContainer}>
        <Image
          style={styles.characterPicture}
          source={{
            uri: `${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`,
          }}
        />
        <Text style={styles.textName}>{character.name}</Text>
        <Text style={styles.textDescription}>{character.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#000',
  },
  closeButton: {
    backgroundColor: '#ff6565',
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 101,
    height: 41,
    borderWidth: 1,
    borderRadius: 50,
  },
  textButton: {
    color: '#151515',
  },
  infoContainer: {
    alignItems: 'center',
    padding: 20,
  },
  characterPicture: {
    height: 251,
    width: 251,
    borderWidth: 1,
    borderRadius: 10,
  },
  textName: {
    fontSize: 32,
    color: 'white',
    marginTop: 10,
  },
  textDescription: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
});

export default CharacterDetails;
