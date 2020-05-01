import React from 'react';
// import styled from 'styled-components'
import RouterTable from 'router/RouteTable'
import {HashRouter as Router} from 'react-router-dom'
import {Layout} from 'components'





function App() {
  return (
        <Router>
          <Layout>
             <RouterTable />
          </Layout>
      </Router>

    
   
  );
}


export default App;
