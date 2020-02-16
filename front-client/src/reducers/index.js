import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import reportReducer from './reportReducer'

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  reports: reportReducer
})
