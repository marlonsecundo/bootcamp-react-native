import React, { Component } from 'react';

import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FavoriteItem from './components/FavoriteItem';
import styles from './styles';

export default class Favorites extends Component {
  static navigationOptions = {
    title: 'Meus Favoritos',
  };

  state = {
    favorites: [],
  };

  renderList = () => (
    <FlatList
      data={this.state.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <FavoriteItem favorite={item} />}
    />
  );

  render() {
    const { favorites } = this.state;
    return (
      <View style={styles.container}>
        {!favorites.length ? (
          <Text style={styles.empty}>Nenhum favorito adicionado</Text>
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
