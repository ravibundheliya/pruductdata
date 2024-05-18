import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        pushdata: (state, action) => {
            const tem = state.value.find(item => item.id === action.payload.id)
            if (tem) {
                tem.stock = action.payload.stock;
            }
            else {
                state.value.push(action.payload)
            }
        },
        deletedata: (state, action) => {
            state.value = state.value.filter(item => item.id !== action.payload);
        },
        clearall: (state) => {
            state.value = [];
        }
    },
})

// Action creators are generated for each case reducer function
export const { pushdata, deletedata, clearall } = cartSlice.actions

export default cartSlice.reducer