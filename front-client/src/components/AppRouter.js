import React from 'react'
import {Router, Route, Switch, Redirect } from 'react-router-dom'
import history from '../history'

import ReportEdit from './reports/ReportEdit'
import ReportDelete from './reports/ReportDelete'
import ReportCreate from './reports/ReportCreate'
import ReportList from './reports/ReportList'
import ReportShow from './reports/ReportShow'

import Header from './Header'
import Footer from './Footer'



const AppRouter = () => {
return(
<Router history={history}>
  <React.Fragment>
    <Header />
      <Switch>
        <Route path="/" exact><Redirect to="reports"/></Route>
        <Route path="/reports" exact component={ReportList}/>
        <Route path="/reports/new" exact component={ReportCreate}/>
        <Route path="/reports/edit/:id" exact component={ReportEdit}/>
        <Route path="/reports/delete/:id" exact component={ReportDelete}/>
        <Route path="/reports/:id" exact component={ReportShow}/>
        <Route component={ReportList}/>
      </Switch>
    <Footer />
  </React.Fragment>
</Router>
)
  }

export default (AppRouter)
