import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

const render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
};

store.subscribe(() => {
  render();
  console.log(store.getState().form); // 動作確認のためコンソール出力
});

serviceWorker.unregister();

render();
