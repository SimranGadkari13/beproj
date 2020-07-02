// import React , {Component} from 'react';
// import { StyleSheet, Text, View, StatusBar ,TouchableOpacity } from 'react-native';
// import {Router, Stack, Scene} from 'react-native-router-flux';
// import {Provider} from 'react-redux';
// import store from "./config/store";
// import Routes from './components/Routes'
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import {Actions} from 'react-native-router-flux';


// import {connect} from "react-redux";
// class Main extends Component<{}>{
    
//   render() {
//   return (
//     // <Provider store={store}>
//     <View style={styles.container}>
//      <Routes/>
//       </View>
//     // </Provider>
//   );
//   }
// }

// // export default function App<{}>{
// //   render(){
// //     return(
// //       <View style={styles.container}>
// //       <Text>Hi there</Text>
// //        </View>

// //     )
// //   }

// // }


// const styles = StyleSheet.create({
// container: {
//     flex: 1,

// }



// });

// export default connect(null,null)(Main);

import React , {Component} from 'react';
import { StyleSheet, Text, View, StatusBar ,TouchableOpacity } from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import store from "./config/store";
import Routes from './components/Routes'
import Login from './pages/Login';
import Signup from './pages/Signup';
import {Actions} from 'react-native-router-flux';


import {connect} from "react-redux";
class Main extends Component<{}>{
    
  render() {
        const {createUser} = this.props;
        console.log(this.props.createUser.isLoggedIn);
  return (

    <View style={styles.container}>
    
            <Routes isLoggedin={this.props.createUser.isLoggedIn} />
          
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

}



});
mapStateToProps = (state) => ({
    createUser:state.authReducer.createUser
});

export default connect(mapStateToProps,null)(Main);
