import React from 'react';
import {Link, Route} from 'react-router-dom'
import AboutMe from './AboutMe'
import styled, { css } from 'styled-components'


class Navbar extends React.Component{




render(){
  const Button = styled.button`
    background: transparent;
    border-radius: 4px;

    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;
  return(
    <div>
      <Button><ul id="nav">
               <li><Link to={'/routines'}>Routines</Link></li>
               <li><Link to={'/routines/new'}>New Routine</Link></li>
               <li><Link to={'/aboutme'}>About Me</Link></li>

      </ul>
      </Button>

    </div>
  )
}
}

export default Navbar
