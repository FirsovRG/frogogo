import mockData from '../../mockData/user.json';
import * as ActionTypes from '../constants/user';

const initialState = mockData;

export default function(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.INCREASE_PRODUCT_COUNT:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: state.cart.items.map(item =>
                        item.id === action.payload.id
                            ? {
                                  ...item,
                                  amount: ++item.amount
                              }
                            : item
                    ),
                    amount: ++state.cart.amount,
                    sum: state.cart.sum + action.payload.price
                }
            };
        case ActionTypes.DECREASE_PRODUCT_COUNT:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: state.cart.items.map(item =>
                        item.id === action.payload.id
                            ? {
                                  ...item,
                                  amount: --item.amount
                              }
                            : item
                    ),
                    amount: --state.cart.amount,
                    sum: state.cart.sum - action.payload.price
                }
            };
        case ActionTypes.REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: state.cart.items.filter(
                        item => item.id !== action.payload.id
                    ),
                    amount: state.cart.amount - action.payload.amount,
                    sum:
                        state.cart.sum -
                        action.payload.amount * action.payload.price
                }
            };
        case ActionTypes.CLEAR_CART:
            return {
                ...state,
                cart: { ...state.cart, items: [], sum: 0, amount: 0 }
            };
        default:
            return state;
    }
}
