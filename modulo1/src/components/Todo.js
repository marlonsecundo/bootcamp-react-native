import React, { Component } from "react";

import { View, Text } from "react-native";
import PropTypes from "prop-types";

// import styles from './styles';

export default class Todo extends Component {
  static defaultProps = {
    title: "Todo padrão"
  };

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <View>
        <Text> {this.props.title}</Text>
      </View>
    );
  }
}
