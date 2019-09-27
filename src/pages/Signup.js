import React , {Component} from 'react';
import { StyleSheet, Text, View, StatusBar ,TouchableOpacity } from 'react-native';
import Form from '../components/Form';
import Logo from '../components/Logo';
import {Actions} from 'react-native-router-flux';
export default class Signup extends Component{
    login(){
    Actions.pop();
  }
  render() {
  return (
    <View style={styles.container}>
       <Logo/>
       <Form type="Signup"/>
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Already have an account</Text>
        <TouchableOpacity onPress={this.login}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
      </View>
      
    </View>
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
backgroundColor: '#00d1a0',
alignItems: 'center',
justifyContent: 'center',
},
signupTextCont:{
flexGrow: 1,
flexDirection: 'row',
alignItems: 'flex-end',
justifyContent: 'center',
paddingVertical: 16
},

signupText:{
  color:'rgba(255,255,255,0.7)',
  fontSize:16
},
signupButton:{
  color:'#ffffff',
  fontSize:16,
  fontWeight:'500',
}
});

