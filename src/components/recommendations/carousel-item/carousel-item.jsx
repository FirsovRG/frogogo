import React from 'react';
import styles from './carousel-item.module.css';
import { symbols } from '../../../constants';

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
                    {itemData.price.toLocaleString() +
                        ` ${symbols.rub.unicode} `}
                </span>
                -
                <span className={styles.discount}>
                    {' ' +
                        discount.toLocaleString() +
                        ` ${symbols.rub.unicode} `}
                </span>
                = {result.toLocaleString() + ` ${symbols.rub.unicode}`}
            </span>
            <span className={styles.itemTitle}>
                {itemData.title} {itemData.name}
            </span>
        </div>
    );
};
