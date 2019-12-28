import React from 'react';
import styles from './cart-list-item.module.css';
import { ReactComponent as ColorPick } from '../../../assets/svg/icon-color-product-01.svg';

const specificationsRender = specObj => {
    switch (specObj.name) {
        case 'color':
            return (
                <>
                    {specObj.key}
                    <ColorPick
                        style={{ fill: `${specObj.value}`, marginLeft: '10px' }}
                    />
                </>
            );
        default:
            return null;
    }
};

export const CartListItem = ({ itemData }) => {
    //Импорт изображения товара нужен только для локальных файлов, с локальными путями, прописанными в json
    //В реальной ситуации, когда ссылка на изображение будет приходить с бэка, такой импорт будет не нужен
    const itemImg = require(`../../../assets/image/${itemData.image}`);

    return (
        <div className={styles.listItem}>
            <div className={styles.itemTitle}>
                {itemData.title} {itemData.name}
                <div className={styles.deleteItemButton} />
            </div>
            <div className={styles.itemBody}>
                <img
                    src={itemImg}
                    alt='item pic'
                    className={styles.itemImage}
                />
                <div className={styles.itemControls}>
                    <div className={styles.specifications}>
                        {itemData.specifications &&
                            specificationsRender(itemData.specifications)}
                    </div>
                    <div className={styles.itemCounter}>
                        <div className={styles.minus} />
                        <div className={styles.itemsAmount}>
                            {itemData.amount}
                        </div>
                        <div className={styles.plus} />
                    </div>
                    <div className={styles.remainingItems}>
                        {itemData.left <= 5 && (
                            <span>Осталось {itemData.left} шт.</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
