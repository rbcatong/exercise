export const addExercise = (exercise, routineId) => {
  return(dispatch) => {
    console.log("C");
    return fetch(`https://exercise-with-me.herokuapp.com/routines/${routineId}/exercises`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({exercise: exercise,
            routine_id: routineId,
          })

    })
    .then(response => response.json())
    .then(exercise => {
      console.log("D");
      dispatch({type: 'ADD_EXERCISE', payload: exercise})})
  }
//console.log("E");
}
