export const addRoutine = (data) => {
  return(dispatch) => {
    //gives us access to the dispatch function due to thunk
    fetch('https://exercise-with-me.herokuapp.com/routines', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    //converting back to json
    .then(routine => dispatch({
      type:'ADD_ROUTINE',
      payload: routine
    }))
    //dispatching -> go straight to reducer  and type of add account
  }
  //able to add routine
}
