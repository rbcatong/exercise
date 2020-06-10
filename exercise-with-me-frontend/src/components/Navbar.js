import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component{

render(){
  return(
    <div>
      <ul id="nav">
               <li><a href="#">Routines</a></li>
               <li><Link to={'/routines/new'}>New Routine</Link></li>
               <li><a href="#">FAQ</a></li>
               <li><a href="#">Contact</a></li>
      </ul>
    </div>
  )
}
}

export default Navbar
