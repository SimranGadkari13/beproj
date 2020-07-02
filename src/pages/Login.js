import React , {Component} from 'react';
import { StyleSheet, Text, View, StatusBar,TouchableOpacity } from 'react-native';
import Form from '../components/Form';
import Logo from '../components/Logo';
import {Actions} from 'react-native-router-flux';
import Loader from "../components/Loader";
import {connect} from "react-redux";
import {compose} from "redux";
import { Field, reduxForm } from 'redux-form';

import InputText from "../components/InputText";
// import {loginUser} from "../actions/auth.actions";
export default class Login extends Component <{}> {
  signup(){
    Actions.signup();
  }
  render() {
  return (
    <View style={styles.container}>
       <Logo/>
       <Form type="Login"/>
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Don't have an account yet? </Text>
        <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity>
      </View>
      
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

// class Login extends Component<{}> {

// 	signup() {
// 		Actions.signup()
// 	}

//   loginUser = async (values) => {
//       try {
//           const response =  await this.props.dispatch(loginUser(values));
//           console.log(response);
//           if (!response.success) {
//               throw response;
//           }
//       } catch (error) {
//           let errorText;
//           if (error.message) {
//               errorText = error.message
//           }
//           errorText = error.responseBody;
//           Alert.alert(
//             'Login Error!',
//             errorText,
//             [
//               {
//                 text: 'Cancel',
//                 onPress: () => console.log('Cancel Pressed'),
//                 style: 'cancel',
//               },
//             ]
//           );
//       }
//   }

//   onSubmit = (values) => {
//       this.loginUser(values);
//   }

//   renderTextInput = (field) => {
//         const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
//         return (
//             <View>
//               <InputText
//                   onChangeText={onChange}
//                   maxLength={maxLength}
//                   placeholder={placeholder}
//                   keyboardType={keyboardType}
//                   secureTextEntry={secureTextEntry}
//                   label={label}
//                   {...restInput} />
//             {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
//             </View>
//         );
//   }

// 	render() {
//     const { handleSubmit, loginUser} = this.props;
//     console.log(loginUser);
// 		return(
// 			<View style={styles.container}>
//         {(loginUser && loginUser.isLoading) && <Loader />}
// 				<Logo/>
//         <Field
//             name="email"
//             placeholder="Email"
//             component={this.renderTextInput} />
//         <Field
//             name="password"
//             placeholder="Password"
//             secureTextEntry={true}
//             component={this.renderTextInput} />
//         <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
// 				<View style={styles.signupTextCont}>
// 					<Text style={styles.signupText}>Do not have an account yet?</Text>
// 					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
// 				</View>
// 			</View>
// 			)
// 	}
// }

// const validate = (values) => {
//     const errors = {};
//     if(!values.name) {
//         errors.name = "Name is required"
//     }
//     if(!values.email) {
//         errors.email = "Email is required"
//     }
//     if(!values.password) {
//         errors.password = "Name is required"
//     }
//     return errors;
// };

// mapStateToProps = (state) => ({
//     loginUser: state.authReducer.loginUser
// })

// mapDispatchToProps = (dispatch) => ({
//     dispatch
// });

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   reduxForm({
//     form: "login",
//     validate
//   })
// )(Login);