import React , {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Form from '../components/Form';
import Logo from '../components/Logo';
import {Actions} from 'react-native-router-flux';
import {connect} from "react-redux";

// import {logoutUser} from "../actions/auth.actions";
export default class Profile extends Component <{}> {

  render() {
  return (
    <View style={styles.container}>
       
    <Text style={styles.textStyle}>This is a profile page</Text>
      
    </View>
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
textStyle:{
    color:"#fff",
    fontSize: 18
}
});
// class Profile extends Component<{}> {

//   logoutUser = () => {
//       this.props.dispatch(logoutUser());
//   }

// 	render() {
//     const {getUser: {userDetails}} = this.props;

// 		return(
// 			<View style={styles.container}>
// 			     <Text style={styles.textStyle}>This is a profile page for {userDetails ? userDetails.name : ""}</Text>
//            <TouchableOpacity style={styles.button} onPress={this.logoutUser}>
//              <Text style={styles.buttonText}>Logout</Text>
//            </TouchableOpacity>
// 			</View>
// 			)
// 	}
// }

// mapStateToProps = (state) => ({
//     getUser: state.userReducer.getUser
// });

// mapDispatchToProps = (dispatch) => ({
//     dispatch
// });

// export default connect(null, null)(Profile);