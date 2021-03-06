import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { quoteReducer } from './redux/reducers';
import './index.css';
import 'react-sharingbuttons/dist/main.css';
import Container from './container/App';

const store = createStore(quoteReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Container />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);


