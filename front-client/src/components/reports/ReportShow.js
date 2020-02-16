import React from 'react'
import { connect } from 'react-redux'
import { fetchReport } from '../../actions'

class ReportShow extends React.Component {


export default connect (mapStateToProps, {fetchReport})(ReportShow)
