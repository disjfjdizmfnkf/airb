import { configureStore } from "@reduxjs/toolkit"
import mainReducer from "./modules/main"
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
import detialReducer from "./modules/detail"

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detial: detialReducer,
    main: mainReducer,
  }
})

export default store
