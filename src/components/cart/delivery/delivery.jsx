import React from 'react';
import styles from './delivery.module.css';

export const Delivery = ({ deliveryValue }) => {
    return (
        <div className={styles.deliveryBlock}>
            Доставка
            <span className={styles.deliveryValue}>
                {!deliveryValue
                    ? 'Бесплатно'
                    : `${deliveryValue.toLocaleString()} \u20bd`}
            </span>
        </div>
    );
};
