import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import {
  selectProfile,
  profileCardAsync,
  personGoing,
  personNotGoing,
  goingAsync,
  selectGoing,
  selectNotGoing,
  notGoingAsync,
} from "../profileCard/profileCardSlice"
export default function GoingView() {
  const dispatch = useDispatch()
  const goingList = useSelector(selectGoing)
  useEffect(() => {
    dispatch(goingAsync())
  }, [])
  return (
    <div className="container">
      <h3 className="title">Going</h3>

      {goingList.map((person) => {
        return (
          <div className="card">
            <div className="img-container">
              <img src={person.img_thumb}></img>
            </div>
            <div className="info-container">
              <li>
                Name: {person.first} {person.last}
              </li>
              <li>Phone: {person.phone}</li>
              <li>Email: {person.email}</li>
            </div>
          </div>
        )
      })}
    </div>
  )
}
