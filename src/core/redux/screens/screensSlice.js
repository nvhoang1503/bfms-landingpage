import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    screens: []
}

const screensSlice = createSlice({
    name: 'screensSlice',
    initialState,
    reducers: {
        setScreens(state, action) {
            state.screens = action.payload
        }
    }
})

export const { setScreens } = screensSlice.actions

export default screensSlice.reducer