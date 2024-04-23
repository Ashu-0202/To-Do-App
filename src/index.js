import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-p2japy5pbkz2xcdu.us.auth0.com';
const clientId = 'rg9WrVCqobvHU89UMcIoJ25i13AFgA1i';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
