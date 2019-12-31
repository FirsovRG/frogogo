import React from 'react';
import styles from './footer.module.css';
import { footerNavigation, texts, contacts } from '../../constants/index';
import masterCardSvg from '../../assets/svg/logo-footer-mastercard.svg';
import visaSvg from '../../assets/svg/logo-footer-visa.svg';
import mirSvg from '../../assets/svg/logo-footer-mir.svg';
import phoneSvg from '../../assets/svg/icon-footer-phone.svg';
import emailSvg from '../../assets/svg/icon-footer-email.svg';
import fbIconSvg from '../../assets/svg/icon-footer-facebook.svg';
import instaIconSvg from '../../assets/svg/icon-footer-instagram.svg';
import vkIconSvg from '../../assets/svg/icon-footer-vk.svg';
import okIconSvf from '../../assets/svg/icon-footer-ok.svg';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer>
            <div className={styles.footerNavigation}>
                {Object.keys(footerNavigation).map(key => (
                    <div className={styles.navBlock}>
                        <span className={styles.title}>
                            {footerNavigation[key].title}
                        </span>
                        <ul className={styles.navItemsList}>
                            {Object.keys(footerNavigation[key].links).map(
                                (link, index) => (
                                    <li key={index}>
                                        <NavLink to=''>
                                            {footerNavigation[key].links[link]}
                                        </NavLink>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                ))}
                <div className={styles.navBlock}>
                    <span className={styles.title}>
                        {texts.payment_methods}
                    </span>
                    <div className={styles.navItemsList}>
                        <div className={styles.paymentMethods}>
                            <img src={masterCardSvg} alt='mastercard' />
                            <img src={visaSvg} alt='visa' />
                            <img src={mirSvg} alt='mir' />
                        </div>
                        <div className={styles.paymentMethodsText}>
                            <span>{texts.cash_payment}</span>
                            <span>{texts.online_payment}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.navBlock}>
                    <span className={styles.title}>{texts.our_contacts}</span>
                    <div className={styles.navItemsList}>
                        <div className={styles.contacts}>
                            <img src={phoneSvg} alt='phone' />
                            {contacts.phone}
                        </div>
                        <div className={styles.contacts}>
                            <img src={emailSvg} alt='email' />
                            {contacts.email}
                        </div>
                        <div className={styles.social}>
                            <img src={fbIconSvg} alt='facebook' />
                            <img src={instaIconSvg} alt='instagram' />
                            <img src={vkIconSvg} alt='vk' />
                            <img src={okIconSvf} alt='ok' />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
