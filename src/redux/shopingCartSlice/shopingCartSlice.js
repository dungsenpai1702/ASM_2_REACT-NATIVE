

// import { createSlice } from '@reduxjs/toolkit'

// export const shopingCartSlice = createSlice({
//     name: 'shopingCarts',
//     initialState: {
//         status: 'idle',
//         cartItems: [

//         ]
//     },
//     reducers: {
//         addCart: (state, action) => {
//             state.cartItems.push(action.payload);
//         },
//         updateCart: (state, action) => {
//             let currentCart = state.cartItems.find(cart => cart.id_cart == action.payload.id);

//             if (action.payload.checkBox !== undefined) {
//                 currentCart.checkBox = action.payload.checkBox;
//             }
//             if (action.payload.quantity) {
//                 currentCart.quantity = action.payload.quantity;
//             }
//             // currentCart.price = action.payload.price;

//             // console.log("currentCart:", currentCart);
//         },
//         updateCartSatus: (state, action) => {
//             console.log("List ID: ", action.payload);
//             state.cartItems = state.cartItems.map(cart => {
//                 if (action.payload.some(id => id === cart.id_cart && cart.checkBox === true)) {
//                     cart.status = true; // Cập nhật trạng thái của mục nếu thỏa mãn điều kiện
//                     return cart
//                 }
//                 return cart
//             });

//         },
//         deleteCart: (state, action) => {
//             state.cartItems = state.cartItems.filter(item => item.id_cart != action.payload)

//         },
//         deleteAll: (state, action) => {
//             state.cartItems = state.cartItems.filter(item => item.status == true);
//         }
//     }
// })

import { createSlice } from '@reduxjs/toolkit';

export const shopingCartSlice = createSlice({
    name: 'shopingCarts',
    initialState: {
        status: 'idle',
        cartItems: []
    },
    reducers: {
        addCart: (state, action) => {

            state.cartItems.push(action.payload);
        },
        updateCart: (state, action) => {
            const { id, checkBox, quantity } = action.payload;
            const currentCart = state.cartItems.find(cart => cart.id_cart === id);

            if (checkBox !== undefined) {
                currentCart.checkBox = checkBox;
            }
            if (quantity) {
                currentCart.quantity = quantity;
            }
        },
        updateCartSatus: (state, action) => {
            const { listIdCart, id } = action.payload;
            console.log("List ID: ", listIdCart);
            state.cartItems = state.cartItems.map(cart => {
                if (listIdCart.some(id => id === cart.id_cart && cart.checkBox === true)) {
                    return { ...cart, status: true, id_order: id };
                }
                return cart;
            });
        },
        deleteCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id_cart !== action.payload);
        },
        deleteAll: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.status === true);
        }
    }
});
