import { combineReducers } from 'redux';
import {Alert} from 'react-native';
// const initialState ={
 
//      isError: false,
//        errors:null,
//       isLoggedIn: true,
//       token:null
// }

const createUser = (state= {} , action) => {

    switch(action.type) {
        case "CREATE_USER_LOADING":
          return {
              isLoading: true,
              token:null,
              isError: false,
              isSuccess: false,
              errors: null,
              isLoggedIn:false,
            
          }


          case "CREAT_USER_SUCCESS":
          return {
              isLoading: false,
              token: action.token,
              isError: false,
              isSuccess: true,
              errors: null,
              isLoggedIn: false,
         
          }
        
          case "CREAT_USER_FAIL":
          return {
              isLoading: false,
              token:null,
              isError: true,
              isSuccess: false,
              errors: action.payload,
              isLoggedIn: false,
            
          }
          default:
          return state;
}
}

export default combineReducers({    
    createUser
});