import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    id: null
}

export const cardSlice = createSlice({
    name: 'card',
    initialState: initialValues,
    reducers: {
        reducerSetCard: (state, action) => {
            state.id = action.payload.id
        }
    }
})

export const { reducerSetCard } = cardSlice.actions

export default cardSlice.reducer