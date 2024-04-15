

import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './productSlice/ProductSlice'
import { shopingCartSlice } from './shopingCartSlice/shopingCartSlice'
import { orderSlice } from './orderSlice/orderSlice'
import { notificationSlice } from './notificationSlice/notificationSlice'

export const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        shopingCart: shopingCartSlice.reducer,
        orders: orderSlice.reducer,
        notification: notificationSlice.reducer
    }
})


