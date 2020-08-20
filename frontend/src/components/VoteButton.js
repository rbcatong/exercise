import React from 'react'

class VoteButton extends React.Component{

  constructor(props){
    super()
    this.state = {
      votes: 0
    }
  }


  handleVote = () => {
    console.log('hi')
    // if routine id matches the button
   // const updatedRoutine = this.state.routines.map(routine => {
   //   if (routine.id == routineId) {
   //     if (routine.votes) {
   //         routine.votes += 1
   //     } else {
   //       routine.votes = 1
   //     }
   //   }
   //   return routine;
   // })
   this.setState ((prevState) => {
     return {
     votes: prevState.votes + 1
    }
   })
 }

  render(){
    return(
      <div>
      <button type="button" onClick={this.handleVote} >
        Vote {this.state.votes}
      </button>
      </div>

    )
  }


}

export default VoteButton
