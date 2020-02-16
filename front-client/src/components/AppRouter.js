import React from 'react'
import {Router, Route, Switch, Redirect } from 'react-router-dom'
import history from '../history'

import ReportEdit from './reports/ReportEdit'
import ReportDelete from './reports/ReportDelete'
import ReportCreate from './reports/ReportCreate'
import ReportList from './reports/ReportList'
import ReportShow from './reports/ReportShow'





const AppRouter = () => {
return(
<Router history={history}>
  <React.Fragment>

  </React.Fragment>
</Router>
)
  }

export default (AppRouter)
