export function fetchRoutines(){
  return (dispatch) => {
    fetch('http://localhost:3000/routines')
    .then(resp => resp.json())
    .then(routines => dispatch({
      type: 'FETCH_ROUTINES',
      payload: routines
      })
    )
    }
}
//call dispatch when we get the fetch request
//thunk - dispatch function - dispatch the response from the fetch request

//it returns a promise - this fetch request, once it's resolved. then the response comes in and response converts
//to json, then the next then --> dispatched, take that object and upload to reducer
