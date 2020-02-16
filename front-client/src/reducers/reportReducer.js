import {
  CREATE_REPORT,
  FETCH_REPORT,
  FETCH_REPORTS,
  EDIT_REPORT,
  DELETE_REPORT
} from '../actions/types'


export default (state = {}, action) => {
  switch(action.type) {

    case FETCH_REPORTS:
      const reports = {}
       action.payload.forEach(report => {
         reports[report.id] = report
       })
      return {...state, ...reports }

    case FETCH_REPORT:
      return{...state, [action.payload.id]: action.payload}

    case CREATE_REPORT:
      return{...state, [action.payload.id]: action.payload}

    case EDIT_REPORT:
      return{...state, [action.payload.id]: action.payload}

    case DELETE_REPORT:
      const newState = {...state}
        return delete newState[action.payload]
      default:
        return state
  }
}
