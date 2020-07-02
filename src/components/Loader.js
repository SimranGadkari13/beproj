import React , {Component} from 'react';
import { StyleSheet, Text, View , ActivityIndicator} from 'react-native';

export default class Loader extends Component <{}> {
 
  render() {
  return (
    <View style={styles.container}>
       
    <ActivityIndicator color="#ffffff" size="large"/>
      
    </View>
  );
  }
}




const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "rgba(0,0,0,0.4)",
position: "absolute",
width: "100%",
height: "100%",
zIndex: 99,
// alignItems:"center",
justifyContent:"center"
},
// signupTextCont:{
// flexGrow: 1,
// flexDirection: 'row',
// alignItems: 'flex-end',
// justifyContent: 'center',
// paddingVertical: 16
// },

// signupText:{
//   color:'rgba(255,255,255,0.7)',
//   fontSize:16
// },
// signupButton:{
//   color:'#ffffff',
//   fontSize:16,
//   fontWeight:'500',
// }
});
