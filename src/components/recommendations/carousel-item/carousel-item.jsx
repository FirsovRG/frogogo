import React from 'react';
import styles from './carousel-item.module.css';
import { CustomCurrency } from '../../../hoc/custom-currency';

export const CarouselItem = ({ itemData }) => {
    const discount = Math.floor(itemData.price * 0.6);
    const result = itemData.price - discount;

    return (
        <div className={styles.carouselItem}>
            <img
                className={styles.itemImage}
                src={require(`../../../assets/image/${itemData.image}`)}
                alt={itemData.id}
            />
            <span className={styles.itemPrice}>
                <span className={styles.price}>
                    <CustomCurrency quantity={itemData.price} />
                </span>
                {' - '}
                <span className={styles.discount}>
                    <CustomCurrency quantity={discount} />
                </span>
                {' = '} <CustomCurrency quantity={result} />
            </span>
            <span className={styles.itemTitle}>
                {itemData.title} {itemData.name}
            </span>
        </div>
    );
};
