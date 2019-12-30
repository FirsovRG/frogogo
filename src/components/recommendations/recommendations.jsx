import React from 'react';
import styles from './recommendations.module.css';
import { texts } from '../../constants';
import leftArrowSvg from '../../assets/svg/icon-buttons-slider-left.svg';
import rightArrowSvg from '../../assets/svg/icon-buttons-slider-right.svg';
import {
    CarouselProvider,
    Slider,
    ButtonBack,
    ButtonNext,
    Slide
} from 'pure-react-carousel';
import { useSelector } from 'react-redux';
import { CarouselItem } from './carousel-item';

export const Recommendations = () => {
    const { items } = useSelector(state => state.goodsReducer);
    return (
        <div className={styles.recommendationsBlock}>
            <div className={styles.recommendationsTitle}>
                {texts.recommendations}
                <span className={styles.showAllButton}>{texts.show_all}</span>
            </div>
            <div className={styles.carouselBlock}>
                <CarouselProvider
                    className={styles.carousel}
                    totalSlides={items.length}
                    infinite
                    visibleSlides={3}
                >
                    <ButtonBack className={styles.carouselButton}>
                        <img src={leftArrowSvg} alt='left arrow' />
                    </ButtonBack>

                    <Slider
                        classNameTray={styles.carouselSliderTray}
                        className={styles.carouselSlider}
                    >
                        {items.map((item, index) => (
                            <Slide index={index} key={item.id}>
                                <CarouselItem itemData={item} />
                            </Slide>
                        ))}
                    </Slider>

                    <ButtonNext className={styles.carouselButton}>
                        <img src={rightArrowSvg} alt='right arrow' />
                    </ButtonNext>
                </CarouselProvider>
            </div>
        </div>
    );
};
