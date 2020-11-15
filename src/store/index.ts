import { createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './modules/rootReducer';

import { ICarState } from './modules/cart/types';


export interface IState {
  cart: ICarState
}

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

export default store;