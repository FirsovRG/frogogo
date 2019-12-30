import React from 'react';
import styles from './cart-list-item.module.css';
import { ReactComponent as ColorPick } from '../../../assets/svg/icon-color-product-01.svg';
import { texts, symbols } from '../../../constants';

const SpecificationsRender = ({ specObj }) => {
    switch (specObj.name) {
        case 'color':
            return (
                <ColorPick
                    style={{ fill: `${specObj.value}`, marginLeft: '10px' }}
                />
            );
        case 'size':
            return <span className={styles.itemSpecSize}>{specObj.value}</span>;
        default:
            return null;
    }
};

export const CartListItem = ({
    itemData,
    increaseItemCount,
    decreaseItemCount,
    deleteItem
}) => {
    //Импорт изображения товара нужен только для локальных файлов, с локальными путями, прописанными в json
    //В реальной ситуации, когда ссылка на изображение будет приходить с бэка, такой импорт будет не нужен
    const itemImg = require(`../../../assets/image/${itemData.image}`);

    //Из скриншота не совсем понятно, как высчитывается сумма, которую можно оплатить с личного счёта.
    //Для примера, пусть с Л.С. можно оплатить до 60% стоимости товара
    const discountPrice = Math.floor(itemData.price * 0.6).toLocaleString();

    return (
        <div className={styles.listItem}>
            <div className={styles.itemTitle}>
                {itemData.title} {itemData.name}
                <div className={styles.deleteItemButton} onClick={deleteItem} />
            </div>
            <div className={styles.itemBody}>
                <img
                    src={itemImg}
                    alt='item pic'
                    className={styles.itemImage}
                />
                <div className={styles.itemControls}>
                    <div className={styles.specifications}>
                        {itemData.specifications && (
                            <>
                                <span>{itemData.specifications.key}</span>
                                <SpecificationsRender
                                    specObj={itemData.specifications}
                                />
                            </>
                        )}
                    </div>
                    <div className={styles.itemCounter}>
                        <div
                            className={styles.minus}
                            onClick={decreaseItemCount}
                        />
                        <div className={styles.itemsAmount}>
                            {itemData.amount}
                        </div>
                        <div
                            className={styles.plus}
                            onClick={increaseItemCount}
                        />
                    </div>
                    <div className={styles.remainingItems}>
                        {itemData.left <= 5 && (
                            <span>
                                {texts.remains} {itemData.left} шт.
                            </span>
                        )}
                    </div>
                </div>
                <div className={styles.itemPrice}>
                    <div className={styles.priceRow}>
                        {texts.fullPrice}
                        <span className={styles.fullPrice}>
                            {itemData.price.toLocaleString() + ' '}
                            {symbols.rub.unicode}
                        </span>
                    </div>
                    <div className={styles.priceRow}>
                        {texts.available_account_price}
                        <span className={styles.discountPrice}>
                            {discountPrice} {symbols.rub.unicode}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
