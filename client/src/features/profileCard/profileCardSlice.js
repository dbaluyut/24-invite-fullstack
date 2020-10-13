import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const profileCardSlice = createSlice({
  name: "users",
  initialState: {
    user: [],
    goingUsers: [],
    notGoingUsers: [],
  },
  reducers: {
    getProfile: (state, action) => {
      state.user = action.payload
    },
    getGoing: (state, action) => {
      state.goingUsers = action.payload
    },
    getNotGoing: (state, action) => {
      state.notGoingUsers = action.payload
    },
  },
})

export const { getProfile, getGoing, getNotGoing } = profileCardSlice.actions

export const personGoing = (user) => (dispatch) => {
  axios.post("/api/going", user).then((resp) => {
    dispatch(goingAsync())
    dispatch(profileCardAsync())
  })
}

export const personNotGoing = (user) => (dispatch) => {
  axios.post("/api/notGoing", user).then((resp) => {
    dispatch(notGoingAsync())
    dispatch(profileCardAsync())
  })
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const profileCardAsync = () => (dispatch) => {
  axios.get("/api").then((resp) => {
    dispatch(getProfile(resp.data))
  })
}

//need notGoing and going async
export const goingAsync = () => (dispatch) => {
  axios.get("/api/going").then((resp) => {
    dispatch(getGoing(resp.data))
  })
}

export const notGoingAsync = () => (dispatch) => {
  axios.get("/api/notGoing").then((resp) => {
    dispatch(getNotGoing(resp.data))
  })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProfile = (state) => state.users.user
export const selectGoing = (state) => state.users.goingUsers
export const selectNotGoing = (state) => state.users.notGoingUsers

export default profileCardSlice.reducer
