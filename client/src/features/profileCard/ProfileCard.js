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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

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
    <div className="main">
      <div className="main-container">
        <div className="links-container">
          <Link to="/goingView">
            <li className="linkto">Going: {goingList.length}</li>
          </Link>
          <Link to="/notGoingView">
            <li className="linkto">not Going: {notGoingList.length}</li>
          </Link>
        </div>
        <div className="card-main">
          <div className="img-container">
            <img src={randomUser.img_thumb}></img>
          </div>
          <div className="info-container">
            <li>
              Name: {randomUser.first} {randomUser.last}
            </li>
            <li>Phone: {randomUser.phone}</li>
            <li>Email: {randomUser.email}</li>
          </div>
        </div>
        <div className="btn-container">
          <button
            className="not-going"
            onClick={() => dispatch(personNotGoing(randomUser))}
          >
            <i class="fas fa-times"></i>
          </button>
          <button
            className="going"
            onClick={() => dispatch(personGoing(randomUser))}
          >
            <i class="fas fa-check"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
