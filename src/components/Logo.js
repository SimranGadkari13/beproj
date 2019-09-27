import React , {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';


export default class Logo extends Component<{}> {
  render() {
  return (
 <View style={styles.container}>
      {/* <Image
          style={{width: 50, height: 50}}
          source={{require("../images/110287logo.png")}}
        /> */}
        <Image style={{width: 100, height :70}}
        source={require('../images/110287logo.png')}/>
        <Text style = {styles.logoText}>Welcome to My App</Text>
   
  </View>
  );
  }
}



const styles = StyleSheet.create({
container: {
flexGrow: 1,
backgroundColor: '#00d1a0',
alignItems :'center',
justifyContent: 'flex-end',
},
logoText:{
  marginVertical: 15,
  // flex:1,
  fontSize:18,

  color:'rgba(255,255,255,0.7)'

}

});
