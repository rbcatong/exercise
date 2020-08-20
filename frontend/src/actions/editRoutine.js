export const editRoutine = (routine) => {
  
    return(dispatch) => {
      //gives us access to the dispatch function due to thunk
      fetch(`http://localhost:3000/routines/${routine.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(routine)
      })
      .then(resp => resp.json())

      //converting back to json
      .then(routine => dispatch({
        type:'EDIT_ROUTINE',
        payload: routine
      }))
    }
  }
