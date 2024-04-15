import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        status: 'idle',
        listOrder: []
    },
    reducers: {
        addOrderItem: (status, action) => {
            status.listOrder.push(action.payload);
            // console.log("Time: ", action.payload.originalTimeOrder);
            // console.log(status.listOrder);
        }
    }
})