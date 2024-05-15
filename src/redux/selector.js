import { createSelector } from "@reduxjs/toolkit";

export const selectProduct = (state) => state.products.products;

// export const selectCartByOrder

export const selectOneProduct = (state, id) => state.products.products.find(item => item._id == id);

export const selectCartItem = (state, uid) => state.shopingCart.cartItems.filter(item => item.status == false);

export const selectCartByUid = (state, uid) => state.shopingCart.cartItems.filter(item => item.uid == uid)


export const selectNotification = (state) => state.notification.listNotification;

export const selectNotificationStatus = (state) => state.notification.listNotification.filter(item => item.status == false);

export const selectListOrder = state => state.orders.listOrder;

// export const selectListOrderHistory = createSelector(selectListOrder, list => list.filter(order => order.status == false));

export const selectOrderSatusTrue = createSelector(selectListOrder, (list) => list.find(order => order.status == true));

export const selectSumPrice = (state, uid) => {
    const listCart = state.shopingCart.cartItems.filter(item => item.uid == uid && item.status == false);
    let sumPrice = 0;
    if (listCart.length != 0) {
        sumPrice = listCart.reduce((sum, cart) => {
            const product = state.products.products.find(item => item._id == cart.id_product && cart.checkBox == true)
            if (product) {
                // console.log(product);

                return sum + (product.price * cart.quantity)
            } else {
                return sum;
            };
        }, 0);
    }
    return sumPrice;
}





export const selectCartItemById = createSelector(
    [selectCartItem, (_, itemId, uid) => itemId],
    (cartItems, itemId) => cartItems.find(cart => cart.id_cart === itemId)
);



