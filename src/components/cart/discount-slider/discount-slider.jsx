import React, { useState } from 'react';
import styles from './discount-slider.module.css';
import Slider from 'rc-slider';
import './slider.css';

export const DiscountSlider = ({ discountValue, setDiscountValue }) => {
    //Здесь используется внутреннее состояние для хранения текущего значения скидки
    //Изменение этого значения обрабатывается в onChange
    //Запись значения в глобальное хранилище обрабатывается в onAfterChange для того, чтобы не отправлять промежуточные значения слайдера в стор
    //Альтернативное решение для избавления от локального состояния - использовать "шаг" слайдера
    const [currentDiscount, setCurrentDiscount] = useState(discountValue);

    return (
        <div className={styles.discountBlock}>
            Передвигая лягушку, выберите сколько рублей с личного счёты вы
            хотите потратить
            <Slider
                min={0}
                max={1000}
                marks={{ 0: '0 \u20BD', 1000: '1 000 \u20BD' }}
                onChange={setCurrentDiscount}
                onAfterChange={setDiscountValue}
            />
            <div className={styles.discount}>
                Используется рублей с личного счёта
                <span className={styles.discountValue}>
                    {currentDiscount.toLocaleString()} &#8381;
                </span>
            </div>
        </div>
    );
};
