import React from 'react'
import Nav from 'components/Nav'
import styled from 'styled-components'
import 'components/Icon'

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  height:100vh;
`; 
const Main = styled.main`
  flex-grow:1;
`;

const Layout:React.FC = (props) =>{
    return (
       <Wrapper>
            <Main>{props.children}</Main>
            <Nav />
       </Wrapper>
    )
} 

export default Layout