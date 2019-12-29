import React from 'react';
import styles from './payment.module.css';
import goldStatusSvg from '../../../assets/svg/icon-gold.svg';

export const Payment = ({ costValue }) => {
    const goldDiscount = Math.floor(costValue * 0.2);
    const accountCashback = costValue + goldDiscount;

    return (
        <div className={styles.paymentBlock}>
            <div className={styles.resultCost}>
                Итого к оплате
                <span className={styles.costValue}>
                    {costValue.toLocaleString()} &#8381;
                </span>
            </div>
            <div className={styles.goldStatus}>
                +20% от <img src={goldStatusSvg} alt='gold status' /> GOLD
                статуса
                <span className={styles.goldDiscount}>
                    {goldDiscount.toLocaleString()} &#8381;
                </span>
            </div>
            <div className={styles.accountCashback}>
                На личный счёт вернется
                <span className={styles.accountCashbackValue}>
                    {accountCashback.toLocaleString()} &#8381;
                </span>
            </div>
            <div className={styles.purchaseButton}>Оформить заказ</div>
        </div>
    );
};
