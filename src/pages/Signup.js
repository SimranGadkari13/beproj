// import React , {Component} from 'react';
// import { StyleSheet, Text, View, StatusBar ,TouchableOpacity } from 'react-native';
// import Form from '../components/Form';
// import Logo from '../components/Logo';
// import {Actions} from 'react-native-router-flux';
// import {Field
// export default class Signup extends Component{
//     login(){
//     Actions.pop();
//   }
//   render() {
//   return (
//     <View style={styles.container}>
//        <Logo/>
//        <Form type="Signup"/>
//       <View style={styles.signupTextCont}>
//         <Text style={styles.signupText}>Already have an account</Text>
//         <TouchableOpacity onPress={this.login}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
//       </View>
      
//     </View>
//   );
//   }
// }


// const styles = StyleSheet.create({
// container: {
// flex: 1,
// backgroundColor: '#00d1a0',
// alignItems: 'center',
// justifyContent: 'center',
// },
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
// });






import React , {Component} from 'react';
import { StyleSheet, Text, View, StatusBar ,TouchableOpacity } from 'react-native';
import Form from '../components/Form';
import Logo from '../components/Logo';
import {Actions} from 'react-native-router-flux';
import { Field, reduxForm } from 'redux-form';
import InputText from '../components/InputText';
import {connect} from "react-redux";
import {compose} from 'redux';
import {createNewUser} from "../actions/auth.actions";
import Loader from '../components/Loader';
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
},
button:{
    backgroundColor:"#00CED1",
    borderRadius:25, 
    width:300, 
    marginVertical: 10,
    paddingVertical:13
},
buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
},
errorText:{
  color :"#ffffff",
  fontSize:14,
  paddingHorizontal:16,
  paddingBottom:4
}
});
class Signup extends Component<{}>{
    login(){
    Actions.login();
  }
 
  createNewUser = (values) => {
   this.props.dispatch(createNewUser(values))
  }
  onSubmit = (values) => {
    this.createNewUser(values);
    console.log(values)
  }
 

  // }
  //  createNewUser = (values) => {
  //   this.props.dispatch(createNewUser(values));
  // }
  renderTextInput = (field) => {
        const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
        return (
            <View>
              <InputText
                  onChangeText={onChange}
                  maxLength={maxLength}
                  placeholder={placeholder}
                  keyboardType={keyboardType}
                  secureTextEntry={secureTextEntry}
                  label={label}
                  {...restInput} />
                  {(touched && error) && <Text style ={styles.errorText}>{error}</Text>}
     
            </View>
        );
  }
  render() {
      const { handleSubmit, createUser } = this.props;
  return (
    <View style={styles.container}>
       {createUser.isLoading && <Loader />}
       {/* <Loader/> */}
       <Logo/>
      
       {/* <Form type="Signup" onAuthButtonPress={this.createNewUser}/> */}
       <Field name="name"  placeholder="Name" component={this.renderTextInput} />
       <Field name="email"  placeholder="Email" component={this.renderTextInput} />
       <Field name="password"  placeholder="Password" component={this.renderTextInput} secureTextEntry={true}/>
        <TouchableOpacity style={styles.button} onPress ={handleSubmit(this.onSubmit)} >
        <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Already have an account?</Text>
        <TouchableOpacity onPress={this.login}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
      </View>
      
    </View>
  );
  }
}



const validate = (values) => {
  const errors ={};
    if (!values.name){
      errors.name ="Name is required"
    }
    
    if (!values.email){
      errors.email ="Email is required"
    }
    
    if (!values.password){
      errors.password ="Password is required"
    }
    return errors;
  
}

mapStateToProps = (state) => ({
    createUser: state.authReducer.createUser
});
mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: "register",
    validate
  })
)(Signup);
// class Signup extends Component<{}> {

//   goBack() {
//       Actions.pop();
//   }

//   createNewUser = async (values) => {
//       try {
//           const response =  await this.props.dispatch(createNewUser(values));
//           if (!response.success) {
//               throw response;
//           }
//       } catch (error) {
//           const newError = new ErrorUtils(error, "Signup Error");
//           newError.showAlert();
//       }
//   }

//   onSubmit = (values) => {
//       this.createNewUser(values);
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
//     const { handleSubmit, createUser} = this.props;
// 		return(
// 			<View style={styles.container}>
//         {createUser.isLoading && <Loader />}
// 				<Logo/>
//         <Field
//             name="name"
//             placeholder="Name"
//             component={this.renderTextInput} />
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
//           <Text style={styles.buttonText}>Signup</Text>
//         </TouchableOpacity>
// 				<View style={styles.signupTextCont}>
// 					<Text style={styles.signupText}>Already have an account?</Text>
// 					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
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
//     createUser: state.authReducer.createUser
// })

// mapDispatchToProps = (dispatch) => ({
//     dispatch
// });

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   reduxForm({
//     form: "register",
//     validate
//   })
// )(Signup);


