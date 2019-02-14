import React from "react";

import { View, Text } from "react-native";
import PropTypes from "prop-types";

// import styles from './styles';

const Todo = ({ title }) => (
  <View>
    <Text> {title}</Text>
  </View>
);

Todo.defaultProps = {
  title: "Todo padrão"
};

Todo.propTypes = {
  title: PropTypes.string.isRequired
};

export default Todo;
