import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import './common/common.css';
=======
import App from './App';
import Login from './screens/login/Login';
>>>>>>> homepage header done
import * as serviceWorker from './serviceWorker';
import Controller from './screens/Controller';

ReactDOM.render(<Controller />,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
