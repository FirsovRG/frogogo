import React from 'react';
import styles from './payment.module.css';
import goldStatusSvg from '../../../assets/svg/icon-gold.svg';
import { texts } from '../../../constants';
import { CustomCurrency } from '../../../hoc/custom-currency';

export const Payment = ({ costValue }) => {
    const goldDiscount = Math.floor(costValue * 0.2);
    const accountCashback = costValue + goldDiscount;

    return (
        <div className={styles.paymentBlock}>
            <div className={styles.resultCost}>
                {texts.total_cost}
                <span className={styles.costValue}>
                    <CustomCurrency quantity={costValue} />
                </span>
            </div>
            <div className={styles.goldStatus}>
                +20% от <img src={goldStatusSvg} alt='gold status' /> GOLD
                статуса
                <span className={styles.goldDiscount}>
                    <CustomCurrency quantity={goldDiscount} />
                </span>
            </div>
            <div className={styles.accountCashback}>
                {texts.account_cashback}
                <span className={styles.accountCashbackValue}>
                    <CustomCurrency quantity={accountCashback} />
                </span>
            </div>
            <div className={styles.purchaseButton}>{texts.purchase_button}</div>
        </div>
    );
};
