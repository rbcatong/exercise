export const deleteExercise = (routineId,exerciseId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3000/routines/${routineId}/exercises/${exerciseId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(exercise => dispatch({
      type: 'DELETE_EXERCISE',
      payload: {routineId,exerciseId}
    }))
  }
}
