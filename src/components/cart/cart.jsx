import React from 'react';
import styles from './cart.module.css';
import { useSelector } from 'react-redux';
import { CartListItem } from './cart-list-item';

export const Cart = () => {
    const { items } = useSelector(state => state.userReducer.cart);

    return (
        <div className={styles.cartLayout}>
            <div className={styles.cartContainer}>
                <div className={styles.cartTitle}>
                    Вот что в вашей корзине{' '}
                    <span className={styles.clearCartButton}>
                        Очистить корзину
                    </span>
                </div>
                <div className={styles.cartList}>
                    {items.map(item => (
                        <CartListItem key={item.id} itemData={item}/>
                    ))}
                </div>
            </div>
        </div>
    );
};
