import React from 'react';
// import { Router, Route, IndexRoute } from "react-router-dom";
import ReactDOM from 'react-dom';
// import { createHashHistory } from "history";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

// const app = document.getElementById("root");
// let hashHistory = createHashHistory();

// ReactDOM.render(
//     <Router history={hashHistory}>
//       <Route path="/" component={App}></Route>
//     </Router>,
//     app
//   );

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();