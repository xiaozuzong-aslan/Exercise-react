import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import Icon from './Icon'
const NavWraaper = styled.nav`
  line-height:24px;
  box-shadow:0 0 3px rgba(0,0,0,0.25);
  ul{
   
    display:flex;
    li{
      flex-grow:1;
      a{
        display:flex;
        padding:12px 0;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        &.actived{
          color:indianred;
          fill:indianred;
        }
        svg{
          width:24px;
          height:24px;
        }
      }
    }
  }
`;

export default function Nav() {
    return (
        <NavWraaper>
        <ul>
          <li>
            <NavLink activeClassName='actived' to='/detail'>
              <Icon name='label'/>
              <span>明细</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='actived' to='/money'>
            <Icon name='money'/>
              
              <span>记账</span>
              </NavLink>
          </li>
          <li>
            <NavLink activeClassName='actived' to='/statistics'>
              <Icon name='statistics'/>
              <span>图表</span>
            </NavLink>
          </li>
        </ul>
      </NavWraaper>
    )
}
