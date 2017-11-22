import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Dimensions, 
         TextInput,
         Button,
         } from 'react-native';
import MainScreenNavigator from "./app/components/navigators/mainNav";
import { Provider } from 'react-redux';
import configureStore from './app/store/store';

export default class App extends React.Component {
  render() {
    const store = configureStore();
    return (
    <Provider store={store}>
      <MainScreenNavigator/>
    </Provider>
    );
  }
}

const Window = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
