import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './Containers/App'
import * as serviceWorker from './serviceWorker';
import Reducer from './Store/Reducer';

const Store = createStore(Reducer);

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();