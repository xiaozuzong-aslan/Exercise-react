import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
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
          color:red;
          fill:red;
        }
        svg{
          width:24px;
          height:24px;
        }
        span{

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
            <Link to='/label'>
              <Icon name='label'/>
              <span>标签</span>
            </Link>
          </li>
          <li>
            <Link to='/money'>
            <Icon name='money'/>
              
              <span>记账</span>
              </Link>
          </li>
          <li>
            <Link to='/statistics'>
              <Icon name='statistics'/>
              <span>统计</span>
            </Link>
          </li>
        </ul>
      </NavWraaper>
    )
}
