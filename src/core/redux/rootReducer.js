import { combineReducers } from "redux";
import mobileNavReducer from "./mobileNav/mobileNavSlice";
import itemNavSelectReducer from "./itemNavSelected/itemNavSelectedSlice";
import screensSlice from "./screens/screensSlice"

const rootReducer = combineReducers({
    mobileNav: mobileNavReducer,
    itemNavSelect: itemNavSelectReducer,
    screens: screensSlice
})

export default rootReducer