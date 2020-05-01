import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const NavWraaper = styled.nav`
  ul{
    border:1px solid red;
    display:flex;
    li{
      text-align:center;
      flex-grow:1;
    }
  }
`;

export default function Nav() {
    return (
        <NavWraaper>
        <ul>
          <li>
            <Link to='/label'>标签</Link>
          </li>
          <li>
            <Link to='/money'>记账</Link>
          </li>
          <li>
            <Link to='/statistics'>统计</Link>
          </li>
        </ul>
      </NavWraaper>
    )
}
