import React from 'react';
import styles from './cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { CartListItem } from './cart-list-item';
import {
    increaseProductCount,
    decreaseProductCount,
    removeProductFromCart,
    clearCart
} from '../../redux/actions/user';
import { DiscountSlider } from './discount-slider';

export const Cart = () => {
    const { items, amount, sum } = useSelector(state => state.userReducer.cart);
    const dispatch = useDispatch();
    const increaseItemCount = item => {
        if (item.amount < item.left) {
            dispatch(increaseProductCount(item));
        }
    };
    const decreaseItemCount = item => {
        if (item.amount > 1) {
            dispatch(decreaseProductCount(item));
        }
    };
    const deleteItem = item => {
        dispatch(removeProductFromCart(item));
    };
    const clearUserCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className={styles.cartLayout}>
            <div className={styles.cartContainer}>
                <div className={styles.cartTitle}>
                    Вот что в вашей корзине{' '}
                    <span
                        className={styles.clearCartButton}
                        onClick={clearUserCart}
                    >
                        Очистить корзину
                    </span>
                </div>
                <div className={styles.cartList}>
                    {items.map(item => (
                        <CartListItem
                            key={item.id}
                            itemData={item}
                            increaseItemCount={() => increaseItemCount(item)}
                            decreaseItemCount={() => decreaseItemCount(item)}
                            deleteItem={() => deleteItem(item)}
                        />
                    ))}
                </div>
                <div className={styles.cartListSum}>
                    {amount} товара на сумму{' '}
                    <span className={styles.itemsCost}>
                        {sum.toLocaleString()} &#8381;
                    </span>
                </div>
                <DiscountSlider />
            </div>
        </div>
    );
};
