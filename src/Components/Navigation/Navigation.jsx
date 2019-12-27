import React from 'react';
import styles from './navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
	return (
		<ul className={styles.navigation}>
			<li className={styles.navigationLink}>
				<NavLink to='/'>Коллекции</NavLink>
			</li>
			<li className={styles.navigationLink}>
				<NavLink to='/'>GOLD Коллекции</NavLink>
			</li>
			<li className={styles.navigationLink}>
				<NavLink to='/'>Пополнить счёт?</NavLink>
			</li>
			<li className={styles.navigationLink}>
				<NavLink to='/'>Поддержка</NavLink>
			</li>
		</ul>
	);
};
