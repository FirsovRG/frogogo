import * as ActionTypes from '../constants/user';

export const increaseProductCount = itemId => ({
    type: ActionTypes.INCREASE_PRODUCT_COUNT,
    payload: itemId
});

export const decreaseProductCount = itemId => ({
    type: ActionTypes.DECREASE_PRODUCT_COUNT,
    payload: itemId
});

export const removeProductFromCart = itemId => ({
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: itemId
});

export const clearCart = () => ({
    type: ActionTypes.CLEAR_CART
});

export const setDiscountValue = value => ({
    type: ActionTypes.SET_DISCOUNT_VALUE,
    payload: value
});

export const setDeliveryValue = value => ({
    type: ActionTypes.SET_DELIVERY_VALUE,
    payload: value
});
