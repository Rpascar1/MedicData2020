import React from 'react'
import {connect} from 'react-redux'
import { fetchReports } from '../../actions'
import { Link } from 'react-router-dom'

class ReportList extends React.Component {

  componentDidMount(){
    this.props.fetchReports()
  }


  

export default connect (mapStateToProps, {fetchReports} )(ReportList)
