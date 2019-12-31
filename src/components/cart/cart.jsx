import React, { useCallback, useState, useEffect } from 'react';
import styles from './cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { CartListItem } from './cart-list-item';
import {
    increaseProductCount,
    decreaseProductCount,
    removeProductFromCart,
    clearCart,
    setDiscountValue,
    setDeliveryValue
} from '../../redux/actions/user';
import { DiscountSlider } from './discount-slider';
import { Delivery } from './delivery';
import { Payment } from './payment/payment';
import { texts, symbols } from '../../constants';
import { num2str } from '../../utils';

export const Cart = () => {
    const { items, amount, total, discount, delivery } = useSelector(
        state => state.userReducer.cart
    );

    const dispatch = useDispatch();

    const [resultCost, setResultCost] = useState(total);

    useEffect(() => {
        const value = total - discount;
        const deliveryValue = value >= 1000 ? 0 : 299;

        setResultCost(value >= 0 ? value : 0);
        dispatch(setDeliveryValue(deliveryValue));
    }, [total, discount, delivery, dispatch]);

    const increaseItemCount = useCallback(
        item => {
            if (item.amount < item.left) {
                dispatch(increaseProductCount(item));
            }
        },
        [dispatch]
    );

    const decreaseItemCount = useCallback(
        item => {
            if (item.amount > 1) {
                dispatch(decreaseProductCount(item));
            }
        },
        [dispatch]
    );

    const deleteItem = useCallback(
        item => {
            dispatch(removeProductFromCart(item));
        },
        [dispatch]
    );

    const clearUserCart = useCallback(() => {
        dispatch(clearCart());
    }, [dispatch]);

    const setDiscount = useCallback(
        value => {
            dispatch(setDiscountValue(value));
        },
        [dispatch]
    );

    return (
        <div className={styles.cartLayout}>
            <div className={styles.cartContainer}>
                <div className={styles.cartTitle}>
                    {texts.cart_title}
                    <span
                        className={styles.clearCartButton}
                        onClick={clearUserCart}
                    >
                        {texts.clear_cart}
                    </span>
                </div>
                <div className={styles.cartList}>
                    {items.map(item => (
                        <CartListItem
                            key={item.id}
                            itemData={item}
                            increaseItemCount={() => increaseItemCount(item)}
                            decreaseItemCount={() => decreaseItemCount(item)}
                            deleteItem={() => deleteItem(item)}
                        />
                    ))}
                </div>
                <div className={styles.cartListSum}>
                    {num2str(amount, ['товар', 'товара', 'товаров']) + ' '}
                    {texts.product_count}
                    <span className={styles.itemsCost}>
                        {total.toLocaleString()} {symbols.rub.unicode}
                    </span>
                </div>
                <DiscountSlider
                    disabled={!amount}
                    discountValue={discount}
                    setDiscountValue={setDiscount}
                />
                <Delivery deliveryValue={delivery} />
                <Payment costValue={resultCost} />
            </div>
        </div>
    );
};
