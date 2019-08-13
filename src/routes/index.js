import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'
import New from '../pages/New'
import MyMeetups from '../pages/MyMeetups'
import AttendingMeetups from '../pages/AttendingMeetups'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} isPrivate />
      <Route exact path="/meetups/create" component={New} isPrivate />
      <Route exact path="/meetups/my" component={MyMeetups} isPrivate />
      <Route
        exact
        path="/meetups/attending"
        component={AttendingMeetups}
        isPrivate
      />
    </Switch>
  )
}

export default Routes
