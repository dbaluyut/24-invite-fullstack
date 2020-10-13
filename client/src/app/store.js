import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import profileCardReducer from "../features/profileCard/profileCardSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    users: profileCardReducer,
  },
})
