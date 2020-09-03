export const deleteExercise = (routineId,exerciseId) => {

  return (dispatch) => {
    return fetch(`https://exercise-with-me.herokuapp.com/${routineId}/exercises/${exerciseId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(exercise => dispatch({
      type: 'DELETE_EXERCISE',
      payload: {routineId,exerciseId}
    }))
  }
}
