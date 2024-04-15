

import { createSlice } from '@reduxjs/toolkit'

export const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        state: 'idle',
        listNotification: [
            // {
            //     status: false,
            //     id: 1,
            //     id_cart,
            // }
        ],
    },
    reducers: {
        addNotification: (state, action) => {
            state.listNotification.push(action.payload);
        },
        updateStateNotification: (state, action) => {
            let currenNotification = state.listNotification.find(item => item.id == action.payload);
            currenNotification.status = true;
        }
    }
})