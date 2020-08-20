export const deleteRoutine = (routineId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/routines/${routineId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(routine => dispatch({
      type: 'DELETE_ROUTINE',
      payload: routineId
    }))
  }

}
