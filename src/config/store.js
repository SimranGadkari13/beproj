// import {AsyncStorage} from "react-native";
// import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import reducers from "../reducers";
// import thunk from "redux-thunk"
// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//  whitelist: ["authReducer", "userReducer"],
// }

// const persistedReducer = persistReducer(persistConfig, reducers)

// export default () => {
//   let store = createStore(persistedReducer, {}, applyMiddleware(thunk));
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

import {AsyncStorage} from "react-native";
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from "../reducers";
import thunk from "redux-thunk"
const persistConfig = {
  key: 'root',
  storage : AsyncStorage,
 whitelist: ["authReducer"]
}

const persistedReducer = persistReducer(persistConfig, reducers);
console.log(persistReducer);
export default () => {
  let store = createStore(persistedReducer, {}, applyMiddleware(thunk));
  console.log(applyMiddleware(thunk));
  let persistor = persistStore(store)
  return { store, persistor }
}
