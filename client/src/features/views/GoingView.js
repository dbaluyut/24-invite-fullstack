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

  return (
    <div>
      <h1>going view</h1>
      {goingList.map((person) => {
        return (
          <div>
            <h1>{person.first}</h1>
          </div>
        )
      })}
    </div>
  )
}
