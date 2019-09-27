import React , {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
// import Login from './pages/Login';
// import Signup from './pages/Signup';


    export default class Routes extends Component<{}> {
       render() {
        return(
            // <View><Login/></View>
          
            <Router>
                <Scene key="root" >
                     <Scene key="login" component={Login} title="Login"/> 
                    <Scene key="signup" component={Signup} title="Signup" />
                   
                 </Scene>
            </Router> 
        )
       } 
    }
// import { StackNavigator } from "react-navigation";

// import SignUp from "./pages/Signup";
// import SignIn from "./pages/Login";

// export const SignedOut = StackNavigator({
//   SignUp: {
//     screen: SignUp,
//     navigationOptions: {
//       title: "Sign Up"
//     }
//   },
//   SignIn: {
//     screen: SignIn,
//     navigationOptions: {
//       title: "Sign In"
//     }
//   }
// });