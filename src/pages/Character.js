import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Search from 'react-native-search-box';
import UserAvatar from 'react-native-user-avatar';
import Md5 from 'md5';

import Container from '../components/Container';
import {colors} from '../styles/theme';

//Your api keys go here
import {marvelPrivateApiKey, marvelPublicApiKey} from '../config/apiKeys';

import CharacterDetails from '../components/CharacterDetails';

const Character = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(['init']);
  const [modalVisible, setModalVisible] = useState(false);
  const [character, setCharacter] = useState('');

  const onSearch = searchText => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      setError(false);
      setData([]);
      const ts = Date.now().toString();
      const hash = Md5(ts + marvelPrivateApiKey + marvelPublicApiKey);
      fetch(
        `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&nameStartsWith=${searchText}&apikey=${marvelPublicApiKey}&hash=${hash}`,
      )
        .then(res => res.json())
        .then(json => {
          console.log(json);
          setData([...json.data.results]);
          setLoading(false);
        })
        .catch(err => {
          console.log('err:', err);
          setError(true);
          setLoading(false);
        });
      resolve();
    });
  };

  const openDetails = item => {
    setCharacter(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderCharacterItem = ({item}) => {
    return (
      <Pressable style={styles.itemContainer} onPress={() => openDetails(item)}>
        <UserAvatar
          size={50}
          name={item.name}
          bgColor={colors.primaryColor}
          src={
            item.thumbnail.path + '/standard_medium.' + item.thumbnail.extension
          }
        />
        <Text style={styles.itemText}>{item.name}</Text>
      </Pressable>
    );
  };

  return (
    <Container>
      <View style={styles.searchBarContainer}>
        <Search backgroundColor="black" onSearch={onSearch} />
      </View>
      {data.length === 1 && data[0] === 'init' ? (
        <View style={styles.initContainer}>
          <Text style={styles.initText}>
            Nothing to show yet. Start searching your favorite characters.
          </Text>
        </View>
      ) : loading ? (
        <View style={styles.initContainer}>
          <ActivityIndicator
            style={{alignSelf: 'center'}}
            size="large"
            color={colors.primaryColor}
          />
        </View>
      ) : error ? (
        <Text>Sorry, there's been and error.</Text>
      ) : data.length === 0 ? (
        <View style={styles.initContainer}>
          <Text style={styles.initText}>
            Sorry, there's no character matching the given name.
          </Text>
        </View>
      ) : (
        <View style={styles.contentContainer}>
          <FlatList
            data={data}
            renderItem={renderCharacterItem}
            keyExtractor={item => item.name}
          />
        </View>
      )}
      <Modal
        onRequestClose={() => {}}
        animationType="slide"
        visible={modalVisible}>
        <CharacterDetails closeModal={closeModal} character={character} />
      </Modal>
    </Container>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {},
  initContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  initText: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'white',
    marginLeft: 15,
    marginRight: 15,
  },
  contentContainer: {
    flex: 1,
    marginTop: 5,
  },
  itemContainer: {
    padding: 10,
    flexDirection: 'row',
    borderBottomColor: colors.primaryColor,
    borderBottomWidth: 1,
  },
  itemText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
    marginLeft: 10,
  },
});

export default Character;
