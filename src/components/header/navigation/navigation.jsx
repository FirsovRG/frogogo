import React from 'react';
import styles from './navigation.module.css';
import { NavLink } from 'react-router-dom';
import { navigationRoutes } from '../../../constants';

export const Navigation = () => {
    return (
        <ul className={styles.navigation}>
            <li className={styles.navigationLink}>
                <NavLink to='/'>{navigationRoutes.collections}</NavLink>
            </li>
            <li className={styles.navigationLink}>
                <NavLink to='/'>{navigationRoutes.gold_collections}</NavLink>
            </li>
            <li className={styles.navigationLink}>
                <NavLink to='/'>{navigationRoutes.fill_account}</NavLink>
            </li>
            <li className={styles.navigationLink}>
                <NavLink to='/'>{navigationRoutes.support}</NavLink>
            </li>
        </ul>
    );
};
