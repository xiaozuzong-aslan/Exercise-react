import React from 'react'
import {Money,Label,Statistics} from 'views'
import {
    Switch,
    Route,
    Redirect
  } from 'react-router-dom'

export default function RouteTable() {
    return (
        <Switch>
        <Redirect exact from='/'  to='/money' />
        <Route exact path='/money'>
          <Money />
        </Route>
        <Route exact path='/label'>
          <Label />
        </Route>
        <Route exact path='/statistics'>
          <Statistics />
        </Route>
        <Route path='*'>
          <div>404</div>
        </Route>
      </Switch>
    )
}
