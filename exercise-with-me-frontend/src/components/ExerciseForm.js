import React from 'react';
import {connect} from 'react-redux'
import {addExercise} from '../actions/addExercise'

class ExerciseForm extends React.Component{

  state = {
    name:'',
    //maybe add a default value if change to dropdown
    type_of_exercise:'',
    equipment:'',
    sets:'',
    reps:''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addExercise(this.state,this.props.id)
    this.setState({
      name:'',
      type_of_exercise:'',
      equipment:'',
      sets:'',
      reps:''
    })
    //also need routine id
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <h1>Exercise Form</h1>
        <label>Name</label>
        <input type='text' value={this.state.name} name="name" onChange={this.handleChange} /><br></br>
        <label>Type of Exercise</label>
        <input type='text' value={this.state.type_of_exercise} name="type_of_exercise" onChange={this.handleChange}/><br></br>
        <label>Equipment</label>
        <input type='text' value={this.state.equipment} name="equipment" onChange={this.handleChange}/><br></br>
        <label>Reps</label>
        <input type='text' value={this.state.reps} name="reps" onChange={this.handleChange}/><br></br>
        <label>Sets</label>
        <input type='text' value={this.state.sets} name="sets" onChange={this.handleChange}/><br></br>
        //need to add hidden routine id
        <br></br>
        <input type='submit'></input>
      </form>
      </div>
    )
  }

}


export default connect(null,{addExercise})(ExerciseForm)
