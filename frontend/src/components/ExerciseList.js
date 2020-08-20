import React from 'react'
import {connect} from 'react-redux'
import {deleteExercise} from '../actions/deleteExercise'
import styled, { css } from 'styled-components'


const Exercises = (props) => {

  const handleDelete = (routineId,exerciseId) => {
    props.deleteExercise(routineId,exerciseId)
  }

  const exercises = props.exercises && props.exercises.sort(function(a, b) {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          console.log(nameA,nameB)
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });


  return(
    <div id="exercises">
      {exercises && exercises.map(exercise =>

        <li key={exercise.id}>
          <b>Exercise Name:</b>{exercise.name} <br></br>
          <b>Type of Exercise:</b>{exercise.type_of_exercise} <br></br>
          <b>Exercise Equipment:</b>{exercise.equipment} <br></br>
          <b>Exercise Sets:</b>{exercise.sets} <br></br>
          <b>Exercise Reps:</b>{exercise.reps} <br></br>
      <button onClick={() => handleDelete(exercise.routine_id,exercise.id)}> Delete Exercise</button>
          <br></br>
         </li>

       )}
    </div>
  )
}

export default connect(null, {deleteExercise})(Exercises)
