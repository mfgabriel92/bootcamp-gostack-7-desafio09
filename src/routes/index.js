import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  )
}

export default Routes
