import axios from "axios"
import React from "react"

import "./App.css"
import ProfileCard from "./features/profileCard/ProfileCard"
import GoingView from "./features/views/GoingView"
import NotGoingView from "./features/views/NotGoingView"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProfileCard />
        </Route>
        <Route path="/goingView">
          <GoingView />
        </Route>{" "}
        <Route path="/notGoingView">
          <NotGoingView />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
