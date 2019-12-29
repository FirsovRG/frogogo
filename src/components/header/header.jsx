import React from 'react';
import styles from './header.module.css';
import addPromocodSvg from '../../assets/svg/icon-addpromocod-header.svg';
import goldStatusSvg from '../../assets/svg/icon-gold-header.svg';
import arrowDownSvg from '../../assets/svg/icon-header-arr-down.svg';
import logoSvg from '../../assets/svg/logo-frogogo-header.svg';
import { Navigation } from './navigation';
import { NavLink } from 'react-router-dom';
import { CartHeader } from './cart-header';
import { useSelector } from 'react-redux';

export const Header = () => {
    const {
        firstName,
        personalAccount: { availableDiscount },
        cart: { amount }
    } = useSelector(state => state.userReducer);

    return (
        <header>
            <div className={styles.headerTopControls}>
                <NavLink to='' className={styles.addPromocod}>
                    <img src={addPromocodSvg} alt='add promocod' /> Ввести
                    промокод
                </NavLink>
                <NavLink to='' className={styles.goldStatus}>
                    <img src={goldStatusSvg} alt='gold status' /> GOLD статус
                </NavLink>
                <div className={styles.account}>
                    {firstName}, ваш счёт{' '}
                    <span className={styles.amount}>
                        {availableDiscount.toLocaleString()} &#8381;{' '}
                        <img src={arrowDownSvg} alt='arrow down' />
                    </span>
                </div>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.logo}>
                    <img src={logoSvg} alt='logo' />
                </div>
                <Navigation />
                <CartHeader amount={amount} />
            </div>
        </header>
    );
};
