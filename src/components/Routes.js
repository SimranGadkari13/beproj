import React , {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';

    export default class Routes extends Component<{}> {
       render() {
        return(
            // <View><Login/></View>
     
            <Router>
                <Scene>
							<Scene key="root" hideNavBar={true} initial={!this.props.isLoggedin} >
								<Scene key="login" component={Login}/>
								<Scene key="signup" component={Signup} title="Register" initial={true}/>
							</Scene>
							<Scene key="app" hideNavBar={true} initial={this.props.isLoggedin} > 
								<Scene key="profile" component={Profile} />
							 </Scene>
					</Scene>
            </Router> 
          
        )
       } 
    }
const styles = StyleSheet.create({
container: {
flexGrow: 1,

alignItems :'center',
justifyContent: 'center',
},
});
