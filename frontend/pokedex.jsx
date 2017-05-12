import React from 'react';
import ReactDOM from 'react-dom';
import { receiveDetail, fetchDetail } from './actions/detail_actions';
import * as APIUtil from './util/api_util';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store}/>, root);
});

window.receiveDetail = receiveDetail;
window.fetchDetail = fetchDetail;
