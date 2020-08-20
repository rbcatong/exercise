import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import ExerciseList from '../components/ExerciseList'
import {Route} from 'react-router-dom'

class ExercisesContainer extends React.Component{
  render() {
    return(
      <div>
      <ExerciseList exercises={this.props.routine && this.props.routine.exercises}/>
      <Route path='/exercises/new' component={ExerciseForm}/>
      </div>
    )
  }
}

export default ExercisesContainer
