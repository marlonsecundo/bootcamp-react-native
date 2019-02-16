import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, Button,
} from 'react-native';
import Todo from '~/components/Todo';
import './config/ReactotronConfig';

console.tron.log('Hello World');

export default class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text: 'Hello World',
      });
    }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter < 5;
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  static getDerivedStateFromProps(nextProps, prevState) {
    return { text: nextProps.text };
  }

  handleAddCount = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  state = {
    counter: 0,
    usuario: 'Marlon',
    todos: [{ id: 1, text: 'Fazer café' }, { id: 2, text: 'Estudar o GoNative' }],
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: 'Novo todo' }],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handleAddCount} title="AddCount" />
        <Text>{this.state.counter}</Text>
        <Text>{this.state.usuario}</Text>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Adicionar todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
