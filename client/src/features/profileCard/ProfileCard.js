import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  selectProfile,
  profileCardAsync,
  getProfile,
  personGoing,
  personNotGoing,
  goingAsync,
  selectGoing,
  selectNotGoing,
  notGoingAsync,
} from "./profileCardSlice"

export default function ProfileCard() {
  const randomUser = useSelector(selectProfile)
  const dispatch = useDispatch()

  const goingList = useSelector(selectGoing)
  const notGoingList = useSelector(selectNotGoing)

  useEffect(() => {
    dispatch(profileCardAsync())
  }, [])

  useEffect(() => {
    dispatch(goingAsync())
  }, [])

  useEffect(() => {
    dispatch(notGoingAsync())
  }, [])

  // console.log(notGoingList)

  return (
    <div>
      <h1>test</h1>
      <h1>Going: {goingList.length}</h1>
      <h1>not Going: {notGoingList.length}</h1>

      <img src={randomUser.img_thumb}></img>
      <li>
        Name: {randomUser.first} {randomUser.last}
      </li>
      <li>Phone: {randomUser.phone}</li>
      <li>Email: {randomUser.email}</li>
      <button onClick={() => dispatch(personNotGoing(randomUser))}>
        not going
      </button>
      <button onClick={() => dispatch(personGoing(randomUser))}>going</button>
    </div>
  )
}
