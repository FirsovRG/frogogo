import React from 'react';
import styles from './delivery.module.css';
import { texts, symbols } from '../../../constants';

export const Delivery = ({ deliveryValue }) => {
    return (
        <div className={styles.deliveryBlock}>
            {texts.delivery}
            <span className={styles.deliveryValue}>
                {!deliveryValue
                    ? texts.for_free
                    : `${deliveryValue.toLocaleString()} ${symbols.rub.unicode}`}
            </span>
        </div>
    );
};
