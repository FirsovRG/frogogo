import React from 'react';
import styles from './Header.module.css';
import addPromocodSvg from '../../Assets/svg/icon-addpromocod-header.svg';
import goldStatusSvg from '../../Assets/svg/icon-gold-header.svg';
import logoSvg from '../../Assets/svg/logo-frogogo-header.svg';
import { Navigation } from '../Navigation/';
import { NavLink } from 'react-router-dom';
import { Cart } from '../Cart';

export const Header = () => {
	return (
		<header>
			<div className={styles.headerTopControls}>
				<NavLink to='' className={styles.addPromocod}>
					<img src={addPromocodSvg} alt='add promocod' /> Ввести промокод
				</NavLink>
				<NavLink to='' className={styles.goldStatus}>
					<img src={goldStatusSvg} alt='gold status' /> GOLD статус
				</NavLink>
				<div className={styles.account}>
					Денис, ваш счёт <span className={styles.amount}>1 000 Р</span>
				</div>
			</div>
			<div className={styles.mainContent}>
				<div className={styles.logo}>
					<img src={logoSvg} alt='logo' />
				</div>
				<Navigation />
				<Cart />
			</div>
		</header>
	);
};
