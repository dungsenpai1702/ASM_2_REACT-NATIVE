
import { createSlice } from '@reduxjs/toolkit'

const img = require('../../assets/img_home/img_product/image1.png')

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        status: 'idle',
        products: [
            {
                _id: 1,
                name: "Green Plant 1",
                description: "Cool green grass",
                price: 50000,
                image: [img, img, img, img],
                type: "Cây Trồng",
                plantType: "Ưa sáng",
                origin: "Vietnam",
                size: "small",
                quantity: 45
            },
            {
                _id: 2,
                name: "Green Plant 2",
                description: "Fresh green leaves",
                price: 45000,
                image: [img, img, img, img],
                type: "Cây Trồng",
                plantType: "Ưa tối",
                origin: "Vietnam",
                size: "medium",
                quantity: 45
            },
            {
                _id: 3,
                name: "Green Plant 3",
                description: "Cool shady green leaves",
                price: 55000,
                image: [img, img, img, img],
                type: "Cây Trồng",
                plantType: "Ưa sáng",
                origin: "Vietnam",
                size: "large",
                quantity: 45
            },
            {
                _id: 4,
                name: "Green Plant 4",
                description: "Deep green leaves",
                price: 60000,
                image: [img, img, img, img],
                type: "Cây Trồng",
                plantType: "Ưa tối",
                origin: "Vietnam",
                size: "medium",
                quantity: 45
            },
            {
                _id: 5,
                name: "Green Plant 5",
                description: "Cool green grass",
                price: 48000,
                image: [img, img, img, img],
                type: "Cây Trồng",
                plantType: "Ưa sáng",
                origin: "Vietnam",
                size: "small",
                quantity: 45
            },
            {
                _id: 6,
                name: "Plant Pot 1",
                description: "Beautiful plant pot",
                price: 20000,
                image: [img, img, img, img],
                type: "Chậu Cây",
                plantType: null,
                origin: "China",
                size: "small",
                quantity: 45
            },
            {
                _id: 7,
                name: "Plant Pot 2",
                description: "Cute small plant pot",
                price: 25000,
                image: [img, img, img, img],
                type: "Chậu Cây",
                plantType: null,
                origin: "China",
                size: "medium",
                quantity: 45
            },
            {
                _id: 8,
                name: "Plant Pot 3",
                description: "Large beautiful plant pot",
                price: 30000,
                image: [img, img, img, img],
                type: "Chậu Cây",
                plantType: null,
                origin: "China",
                size: "large",
                quantity: 45
            },
            {
                _id: 9,
                name: "Plant Pot 4",
                description: "Fashionable plant pot",
                price: 22000,
                image: [img, img, img, img],
                type: "Chậu Cây",
                plantType: null,
                origin: "China",
                size: "medium",
                quantity: 45
            },
            {
                _id: 10,
                name: "Plant Pot 5",
                description: "Adorable plant pot",
                price: 18000,
                image: [img, img, img, img],
                type: "Chậu Cây",
                plantType: null,
                origin: "China",
                size: "small",
                quantity: 45
            },
            {
                _id: 11,
                name: "Tool 1",
                description: "Planting tool",
                price: 10000,
                image: [img, img, img, img],
                type: "Dụng Cụ Chăm Sóc",
                plantType: null,
                origin: "USA",
                size: null,
                quantity: 45
            },
            {
                _id: 12,
                name: "Tool 2",
                description: "Water spray bottle",
                price: 5000,
                image: [img, img, img, img],
                type: "Dụng Cụ Chăm Sóc",
                plantType: null,
                origin: "USA",
                size: null,
                quantity: 45
            },
            {
                _id: 13,
                name: "Tool 3",
                description: "Branch cutting knife",
                price: 7000,
                image: [img, img, img, img],
                type: "Dụng Cụ Chăm Sóc",
                plantType: null,
                origin: "USA",
                size: null,
                quantity: 45
            },
            {
                _id: 14,
                name: "Tool 4",
                description: "Garden spade",
                price: 8000,
                image: [img, img, img, img],
                type: "Dụng Cụ Chăm Sóc",
                plantType: null,
                origin: "USA",
                size: null,
                quantity: 45
            },
            {
                _id: 15,
                name: "Tool 5",
                description: "Garden gloves",
                price: 6000,
                image: [img, img, img, img],
                type: "Dụng Cụ Chăm Sóc",
                plantType: null,
                origin: "USA",
                size: null,
                quantity: 45
            },
        ]


    },
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        updateQuantityProduct: (state, action) => {
            const { id, quantity } = action.payload;
            console.log("quantity update: ", quantity);
            let currentProduct = state.products.find((item) => item._id == id);
            console.log("quantity current: ", currentProduct.quantity);
            currentProduct.quantity = currentProduct.quantity - quantity
        }

    }

})