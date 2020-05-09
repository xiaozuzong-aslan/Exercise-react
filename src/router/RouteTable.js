import React from 'react'
import {Money,Detail,Statistics,Edit} from 'views'
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
      
        <Route exact path='/statistics'>
          <Statistics />
        </Route>
        <Route exact path='/detail'>
          <Detail />
        </Route>
        <Route exact path='/detail/edit/:id'>
          <Edit />
        </Route>
        <Route path='*'>
          <div>404</div>
        </Route>
      </Switch>
    )
}
