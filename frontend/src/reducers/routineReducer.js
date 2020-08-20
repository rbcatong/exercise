export default function routineReducer(state = {routines:[]}, action){

  switch(action.type){
    case 'FETCH_ROUTINES':
      return {
      routines: action.payload
      //returns state and returns array that points in the fetch request
    }


    case 'ADD_ROUTINE':
      return {
        ...state,
        routines: [...state.routines, action.payload]
      }

    case 'DELETE_ROUTINE':
//if you find the routine --> take it out. and return all routines
    return{
      ...state,
      routines: [...state.routines.filter(routine => routine.id !== action.payload)]
    }


    case 'ADD_EXERCISE':
    //not adding the new exercise into the routines state
      const updatedRoutines = state.routines.map(routine => {
        if (routine.id === action.payload.routine_id) {
          if (routine.exercises && routine.exercises.length > 0) {
            routine.exercises = [...routine.exercises, action.payload]
          }
          else {
            routine.exercises = [action.payload]
          }
        }
        return routine;
        })
      return {
        routines: updatedRoutines
      }

    case 'DELETE_EXERCISE':
    //delete the exercise from the routine
    const routines =  state.routines.map(routine => {
      if (routine.id === action.payload.routineId){
        routine.exercises = routine.exercises.filter(exercise => exercise.id !== action.payload.exerciseId)
      }
      return routine
      })
    return {
      routines: [...state.routines,routines]
    }

    case 'EDIT_ROUTINE':
    //if edited version matches the routine. retunr the newly made one.
  let list = state.routines.map(routine => {
    if (routine.id === action.payload.id){
      console.log(action.payload)
      return action.payload
    }
    else{
      return routine
    }
  })
  return{...state, routines: list}
  //filter out and take the edited version



      default:
        return state
      }
}
