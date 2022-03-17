// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// // import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
// // import userReducer from "./features/users";
// // import store from "./app/store";
// // import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./features/users";
// import { persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// // import { useReducer } from "react";

// import { PersistGate } from "redux-persist/integration/react";
// import thunk from "redux-thunk";
// import { createStore, applyMiddleware } from "redux";

// import { composeWithDevTools } from "redux-devtools-extension";
// import persistReducer from "redux-persist/es/persistReducer";
// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, userReducer);

// // const store = configureStore({
// //   reducer: {
// //     user: userReducer,
// //   },
// // });
// const store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
// let persistor = persistStore(store);
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "./features/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
let persistor = persistStore(store);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
