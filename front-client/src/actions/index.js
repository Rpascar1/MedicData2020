import history from '../history'
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

const BASEURL = 'http://localhost:3000/api/v1'

export const createReport = formValues => async (dispatch,
getState) => {

const {userId} = getState().auth
const report = {...formValues, userId}


const response = await fetch(BASEURL +'/reports', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json"
    },

    body: JSON.stringify({
      report: report
    })
  })

  const reportJSON = await response.json()

    dispatch({
      type: CREATE_REPORT,
      payload: reportJSON
    })
    history.push('/reports')

}

export const fetchReports = () => async (dispatch,
getState) => {

const response = await fetch(BASEURL+'/reports', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json"
    }
  })
  const reportsJSON = await response.json()

    dispatch({
      type: FETCH_REPORTS,
      payload: reportsJSON
    })
    history.push('/reports')
}

export const fetchReport = (id) => async (dispatch,
getState) => {

const response = await fetch(BASEURL+`/reports/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json"
    }
  })
  const reportJSON = await response.json()

    dispatch({
      type: FETCH_REPORT,
      payload: reportJSON
    })
}

export const editReport = (id, formValues) => async (dispatch,
getState) => {

const {userId} = getState().auth
const report = {...formValues, userId}


const response = await fetch(BASEURL+`/reports/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json"
    },

    body: JSON.stringify({
      report: report
    })
  })

  const reportJSON = await response.json()

    dispatch({
      type: EDIT_REPORT,
      payload: reportJSON
    })

    history.push('/reports')

}

export const deleteReport = (id) => async (dispatch,
getState) => {

await fetch(BASEURL+`/reports/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json"
    },

  })
    dispatch({
      type: DELETE_REPORT,
      payload: id
    })
    history.push('/reports')
}
