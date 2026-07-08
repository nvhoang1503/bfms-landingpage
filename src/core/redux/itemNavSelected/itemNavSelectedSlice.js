import { createSlice } from "@reduxjs/toolkit";
import navigationConfig from "../../../configs/NavigationConfig";

const initialState = {
    currentKey: navigationConfig[0].key
}

const itemNavSelectedSlice = createSlice({
    name: 'itemNavSelectedSlice',
    initialState,
    reducers: {
        setKey(state, action) {
            state.currentKey = action.payload
        }
    }
})

export const { setKey } = itemNavSelectedSlice.actions

export default itemNavSelectedSlice.reducer