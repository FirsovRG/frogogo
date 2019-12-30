import React from 'react';
import styles from './payment.module.css';
import goldStatusSvg from '../../../assets/svg/icon-gold.svg';
import { texts, symbols } from '../../../constants';

export const Payment = ({ costValue }) => {
    const goldDiscount = Math.floor(costValue * 0.2);
    const accountCashback = costValue + goldDiscount;

    return (
        <div className={styles.paymentBlock}>
            <div className={styles.resultCost}>
                {texts.total_cost}
                <span className={styles.costValue}>
                    {costValue.toLocaleString()} {symbols.rub.unicode}
                </span>
            </div>
            <div className={styles.goldStatus}>
                +20% от <img src={goldStatusSvg} alt='gold status' /> GOLD
                статуса
                <span className={styles.goldDiscount}>
                    {goldDiscount.toLocaleString()} {symbols.rub.unicode}
                </span>
            </div>
            <div className={styles.accountCashback}>
                {texts.account_cashback}
                <span className={styles.accountCashbackValue}>
                    {accountCashback.toLocaleString()} {symbols.rub.unicode}
                </span>
            </div>
            <div className={styles.purchaseButton}>{texts.purchase_button}</div>
        </div>
    );
};
