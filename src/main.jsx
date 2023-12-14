// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// // import { store } from './store/store.js';
// import { Provider } from "react-redux";
// import { store, persistor } from "./persist/persist.js";
// import { PersistGate } from "redux-persist/integration/react";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   // <React.StrictMode>
//     <PersistGate loading={null} persistor={persistor}>
//   <Provider store={store}>
//       <App />
//   </Provider>
//     </PersistGate>
//   // </React.StrictMode>,
// );
// index.js or App.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./persist/persist";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
