import {createSlice} from '@reduxjs/toolkit'

const  countStore = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },

    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
    }
});

const {increment, decrement} = countStore.actions;

const reducer = countStore.reducer;

export {increment, decrement};

// Exdport the reducer
export default reducer;