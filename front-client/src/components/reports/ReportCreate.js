import React from 'react'

import {connect} from 'react-redux'
import {createReport} from '../../actions'
import ReportForm from './ReportForm'

const ReportCreate =(props)=> {

  const onSubmit = (formValues) => {
    props.createReport(formValues)
  }



    return (
            <div>
            <br/>
              <h3> Create a Report</h3>
              <ReportForm onSubmit={onSubmit}/>
            </div>
        )

  }


export default connect(null,{createReport})(ReportCreate)
