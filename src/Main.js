import React , {Component} from 'react';
import { StyleSheet, Text, View, StatusBar ,TouchableOpacity } from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import store from "./config/store";

import Login from './pages/Login';
import Signup from './pages/Signup';
import {Actions} from 'react-native-router-flux';


import {connect} from "react-redux";
class Main extends Component<{}>{
    
  render() {
  return (
    <Provider store={store}>
    
      <Router>
                <Scene key="root" hideNavBar={true}>
                     <Scene key="login" component={Login} title="Login" initial={true}/> 
                    <Scene key="signup" component={Signup} title="Signup" />
                   
                 </Scene>
            </Router>
   
    </Provider>
  );
  }
}

// export default function App<{}>{
//   render(){
//     return(
//       <View style={styles.container}>
//       <Text>Hi there</Text>
//        </View>

//     )
//   }

// }


const styles = StyleSheet.create({
container: {
    flex: 1,

}



});

export default connect(null,null)(Main);