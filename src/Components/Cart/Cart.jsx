import React from 'react';
import cartSvg from '../../Assets/svg/icon-cart-header.svg';
import cartBablSvg from '../../Assets/svg/icon-cart-babl-header.svg';
import styles from './Cart.module.css';

export const Cart = () => {
	return (
		<div className={styles.cartContainer}>
			<div className={styles.cartIcon}>
				<img src={cartSvg} alt='cart' />
				<img src={cartBablSvg} alt='count' className={styles.cartBabl} />
			</div>
			Корзина
		</div>
	);
};
