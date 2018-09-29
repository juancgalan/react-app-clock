import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers'
import { start } from './Actions';


WebFont.load({
  google: {
    families: ['Bungee', 'Bungee Shade', 'sans-serif']
  }
});

const store = createStore(rootReducer);
start(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
