import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import { store } from "./redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const rootNode = document.getElementById('root');

render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  rootNode);

