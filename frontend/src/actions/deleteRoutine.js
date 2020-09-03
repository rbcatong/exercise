export const deleteRoutine = (routineId) => {
  return (dispatch) => {
    return fetch(`https://exercise-with-me.herokuapp.com/${routineId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(routine => dispatch({
      type: 'DELETE_ROUTINE',
      payload: routineId
    }))
  }

}
