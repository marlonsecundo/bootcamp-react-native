import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, StatusBar, Text, TextInput, TouchableOpacity, SafeAreaView,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoriteActions from '~/store/actions/favorites';

import styles from './styles';

class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
    favoritesCount: PropTypes.number.isRequired,
  };

  state = {
    repositoryInput: '',
  };

  addRepository = () => {
    if (!this.state.repositoryInput.length) return;

    this.props.addFavoriteRequest(this.state.repositoryInput);
  };

  navigateToFavorites = () => {
    this.props.navigation.navigate('Favorites');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.content}>
          <Text style={styles.title}>Gitmark</Text>
          <Text style={styles.description} />

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="usuario/repositorio"
              underlineColorAndroid="transparent"
              value={this.state.repositoryInput}
              onChangeText={(repo) => {
                this.setState({ repositoryInput: repo });
              }}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={this.addRepository}
              activeOpacity={0.6}
            >
              <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigateToFavorites}>
            <Text style={styles.footerLink}>Meus Favoritos ({this.props.favoritesCount})</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  favoritesCount: state.favorites.length,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
