import React, { useState } from 'react';
import styles from './discount-slider.module.css';
import Slider from 'rc-slider';
import './slider.css';
import { texts, symbols } from '../../../constants';
import { CustomCurrency } from '../../../hoc/custom-currency';

export const DiscountSlider = ({
    discountValue,
    setDiscountValue,
    disabled
}) => {
    //Здесь используется внутреннее состояние для хранения текущего значения скидки
    //Изменение этого значения обрабатывается в onChange
    //Запись значения в глобальное хранилище обрабатывается в onAfterChange для того, чтобы не отправлять промежуточные значения слайдера в стор
    //Альтернативное решение для избавления от локального состояния - использовать "шаг" слайдера
    const [currentDiscount, setCurrentDiscount] = useState(discountValue);

    return (
        <div className={styles.discountBlock}>
            {texts.discount_slider_preview}
            <Slider
                disabled={disabled}
                min={0}
                max={1000}
                marks={{
                    0: `0 ${symbols.rub.unicode}`,
                    1000: `1 000 ${symbols.rub.unicode}`
                }}
                onChange={setCurrentDiscount}
                onAfterChange={setDiscountValue}
            />
            <div className={styles.discount}>
                {texts.used_discount}
                <span className={styles.discountValue}>
                    <CustomCurrency quantity={currentDiscount} />
                </span>
            </div>
        </div>
    );
};
