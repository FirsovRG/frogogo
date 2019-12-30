import React from 'react';
import styles from './recommendations.module.css';
import { texts } from '../../constants';
import leftArrowSvg from '../../assets/svg/icon-buttons-slider-left.svg';
import rightArrowSvg from '../../assets/svg/icon-buttons-slider-right.svg';

export const Recommendations = () => {
    return (
        <div className={styles.recommendationsBlock}>
            <div className={styles.recommendationsTitle}>
                {texts.recommendations}
                <span className={styles.showAllButton}>{texts.show_all}</span>
            </div>
            <div className={styles.carouselBlock}>
                <img src={leftArrowSvg} alt='left arrow' className={styles.arrowButton}/>
                <div className={styles.carousel}>

                </div>
                <img src={rightArrowSvg} alt='right arrow' className={styles.arrowButton}/>
            </div>
        </div>
    );
};
