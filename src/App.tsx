import React,{useReducer} from 'react';
// import styled from 'styled-components'
import RouterTable from 'router/RouteTable'
import {HashRouter as Router} from 'react-router-dom'
import {Layout} from 'components'
import {Context} from 'Context'
import {reducer,initState} from 'reducer'


function App() {
  const [state,dispatch] = useReducer(reducer,initState)
  return (
        <Router>
          <Context.Provider value={
            {state,dispatch}
          }>
            <Layout>
                <RouterTable />
            </Layout>
          </Context.Provider>
           
         
        </Router>
  );
}


export default App;
