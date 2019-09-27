import { AppRegistry } from 'react-native';
import React,{Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {Provider} from 'react-redux';
import store from "./src/config/store";
import persist from "./src/config/store";
import { PersistGate } from 'redux-persist/integration/react'
import Main from "./src/Main";
import Routes from './src/components/Routes';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

const {stores, persistor} = persist();

export default class App extends Component<{}> {
  render() {
     
     return (
       
       <Provider store={stores}>
       <PersistGate loading={null} persistor={persistor}>
      <Main/>
      </PersistGate>
    </Provider> 
   
     
    );
    
  }
 
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#00d1a0',
alignItems: 'center',
justifyContent: 'center',
},

});


AppRegistry.registerComponent('myapp', () => App);