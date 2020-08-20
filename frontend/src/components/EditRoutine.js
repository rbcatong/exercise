import React from 'react'
import {connect} from 'react-redux'
import {editRoutine} from '../actions/editRoutine'
import { withRouter } from 'react-router';
import styled, { css } from 'styled-components'



class EditRoutine extends React.Component{
constructor(props){
  super(props);
  this.state = {
    title: '',
    body_weight:'',
    // start_date:'',
    days:''
  }
}
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let routine = {...this.state, id: this.props.routine.id}
    console.log(routine)
    this.props.editRoutine(routine)
    this.setState({
      title: '',
      body_weight: '',
      // start_date: '',
      days: ''
    })
  }


  render(){

    return(
      <div>
        <h1>Edit Routine Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input type='text' value={this.state.title} name="title" onChange={this.handleChange}/><br></br>
          <label>Body Weight: (in lbs)</label>
          <input type='text' value={this.state.body_weight} name="body_weight" onChange={this.handleChange}/><br></br>
          <label>Days:</label>
          <input type='text' value={this.state.days} name="days" onChange={this.handleChange}/><br></br>
          <input type='submit'></input>
        </form>
      </div>
    )
  }

}

export default connect(null, {editRoutine}) (EditRoutine)
//look at thunk for addaccount connect - calling dispatch on return action
