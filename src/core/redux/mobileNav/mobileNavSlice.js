import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mobileNavStatus: false
}

const mobileNavSlice = createSlice({
    name: 'mobileNavSlice',
    initialState,
    reducers: {
        toggleMobileNav(state, action) {
            state.mobileNavStatus = action.payload
        }
    }
})

export const { toggleMobileNav } = mobileNavSlice.actions

export default mobileNavSlice.reducer