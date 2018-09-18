import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import Main from './containers/Main';

const enableDevTools =
  process.env.NODE_ENV === 'production'
    ? false
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, enableDevTools);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
