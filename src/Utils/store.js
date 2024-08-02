import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "../Utils/locationSlice";
import cartSlice from "../Utils/cartSlice";
import restaurantListSlice from "../Utils/restaurantListSlice";
import locationSearchVisibility from "../Utils/cartSlice";

const store = configureStore({
  reducer: {
    location: locationSlice,
    cart: cartSlice,
    restaurantList: restaurantListSlice,
    locSearch: locationSearchVisibility,
  },
});

export default store;
