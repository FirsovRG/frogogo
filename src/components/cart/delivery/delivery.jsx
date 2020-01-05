import React from 'react';
import styles from './delivery.module.css';
import { texts } from '../../../constants';
import { CustomCurrency } from '../../../hoc/custom-currency';

export const Delivery = ({ deliveryValue }) => {
    return (
        <div className={styles.deliveryBlock}>
            {texts.delivery}
            <span className={styles.deliveryValue}>
                {!deliveryValue ? (
                    texts.for_free
                ) : (
                    <CustomCurrency quantity={deliveryValue} />
                )}
            </span>
        </div>
    );
};
