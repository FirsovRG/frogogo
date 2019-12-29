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
                    total: state.cart.total + action.payload.price
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
                    total: state.cart.total - action.payload.price
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
                    total:
                        state.cart.total -
                        action.payload.amount * action.payload.price
                }
            };
        case ActionTypes.CLEAR_CART:
            return {
                ...state,
                cart: { ...state.cart, items: [], total: 0, amount: 0 }
            };
        case ActionTypes.SET_DISCOUNT_VALUE:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    discount: action.payload
                }
            };
        case ActionTypes.SET_DELIVERY_VALUE:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    delivery: action.payload
                }
            };
        default:
            return state;
    }
}
