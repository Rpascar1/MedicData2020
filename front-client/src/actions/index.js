import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_REPORT,
  FETCH_REPORTS,
  FETCH_REPORT,
  DELETE_REPORT,
  EDIT_REPORT
} from './types'

export const signIn = (userId) => {
    return {
      type:SIGN_IN,
      payload: userId
    }
}

export const signOut = () => {
    return {
      type:SIGN_OUT
    }
}
