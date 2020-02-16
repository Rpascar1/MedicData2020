import React from 'react'
import {connect} from 'react-redux'
import {fetchReport, editReport} from '../../actions'
import ReportForm from './ReportForm'

class ReportEdit extends React.Component {
}

export default connect(mapStateToProps, {fetchReport, editReport})(ReportEdit)
