import React from 'react'
import Nav from 'components/Nav'
import styled from 'styled-components'


const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  height:100vh;
`; 
const Main = styled.main`
  display:flex;
  flex-direction:column;
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