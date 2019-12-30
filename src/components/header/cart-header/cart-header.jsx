import React from 'react';
import cartSvg from '../../../assets/svg/icon-cart-header.svg';
import styles from './cart-header.module.css';
import { navigationRoutes } from '../../../constants';

export const CartHeader = ({ amount }) => {
    return (
        <div className={styles.cartContainer}>
            <div className={styles.cartIcon}>
                <img src={cartSvg} alt='cart' />
                {!!amount && (
                    <div
                        className={styles.cartBabl}
                        style={{ '--products-amount': `${amount}` }}
                    />
                )}
            </div>
            {navigationRoutes.cart}
        </div>
    );
};
