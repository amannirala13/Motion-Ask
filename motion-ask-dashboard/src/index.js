import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from "@chakra-ui/react";
import myTheme from "./myTheme";
import {BrowserRouter} from "react-router-dom";
import {getAnalytics} from "firebase/analytics";
import {FirebaseApp} from "./firebase";
// theme={myTheme}

const analytics = getAnalytics(FirebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ChakraProvider>
          <BrowserRouter>
          <App/>
          </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>
);
reportWebVitals();
