import React from 'react'
import Routine from './Routine'
import {Route, Link} from 'react-router-dom'
import styled, { css } from 'styled-components'
import {connect} from 'react-redux'
import {fetchRoutines} from '../actions/fetchRoutines'
import VoteButton from './VoteButton'



class RoutineList extends React.Component{

 constructor(props){
   super();
   this.state = { routines: props.routines }
  }



 static getDerivedStateFromProps(props, state){
   return {
     routines: props.routines
   }
 }

//do not have routines right away, get the new prop.
// because its async, we need to find a way to get the new props to update state

//  handleVote = (routineId) => {
//    // if routine id matches the button
//   const updatedRoutine = this.state.routines.map(routine => {
//     if (routine.id == routineId) {
//       if (routine.votes) {
//           routine.votes += 1
//       } else {
//         routine.votes = 1
//       }
//     }
//     return routine;
//   })
//   this.setState({
//     routines: updatedRoutine
//   })
// }

  render(){
    return (
      <div>
        <h1>Exercise Routines</h1>
        {this.props.routines.map(routine =>
          <div key={routine.id}>
          <Link to={`/routines/${routine.id}`}>{routine.title}</Link>
          <VoteButton routines={this.props.routines}/>
         </div>)}
      </div>
    )
  }
}

export default connect(null, {fetchRoutines})(RoutineList)
