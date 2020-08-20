import React from 'react'
import ExercisesContainer from '../containers/ExercisesContainer'
import ExerciseForm from './ExerciseForm'
import {Route,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteRoutine} from '../actions/deleteRoutine'
import EditRoutine from './EditRoutine'
import styled, { css } from 'styled-components'


const Routine = (props) => {

  const Button = styled.button`
    background: transparent;
    border-radius: 4px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;

  const Button2 = styled.button`
    background: transparent;
    border-radius: 4px;
    border: 2px solid white;
    color: black;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;
  let routine = props.routines.find(element => element.id == props.match.params.id)

  console.log(routine)
  let routinedate = routine ? routine.created_at.split(" ").reverse().join().split(',').join().slice(0,10) : null
  // console.log(routinedate)


  const handleDelete = (routineId) => {
    props.deleteRoutine(routineId)
    props.history.push('/routines')
  }

  return(
    <div>
        <Button2><h1>Routine Title: {routine ? routine.title : null} </h1>
         <b>Body Weight:</b> {routine ? routine.body_weight : null}lbs <br></br>
         <b> Start Date: </b> {routine ? routinedate : null}<br></br>
         <b> Days: </b> {routine ? routine.days : null}<br></br>
         <button onClick={() => handleDelete(routine.id)}>Delete Routine</button></Button2>


         <br></br>   <br></br>
        <ExercisesContainer routine={routine}/>
        <Button><ExerciseForm routine={routine}/></Button>

        <Button><EditRoutine routine={routine}/></Button>

    </div>
    )
  }

export default connect(null,{deleteRoutine})(Routine)
