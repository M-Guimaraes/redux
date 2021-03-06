import { Reducer } from 'redux';
import produce from 'immer';

import { ICarState } from './types';

const INITIAL_STATE: ICarState = {
  items: []
};

const cart: Reducer<ICarState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(item =>
          item.product.id === product.id,
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          })
        }

        break;
      };
      default: {
        return draft;
      }
    }
  });

  return INITIAL_STATE
}

export default cart;