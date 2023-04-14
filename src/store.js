// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//     reducer: {},
// });


// export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/userReducer";
import { slotBookingReducer } from "./reducers/slotBookingReducer";
import { allSlotsReducer } from "./reducers/allSlotsReducer";
import { slotDetailsReducer } from "./reducers/slotsReducer";

const reducer = combineReducers({
    user: userReducer,
    slot: slotBookingReducer,
    allSlots: allSlotsReducer,
    slotDetails: slotDetailsReducer,
});

const middleware = [thunk];

let initialState = {};

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;