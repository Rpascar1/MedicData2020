import React from 'react'
import {connect} from 'react-redux'
import { fetchReports } from '../../actions'
import { Link } from 'react-router-dom'

class ReportList extends React.Component {

  componentDidMount(){
    this.props.fetchReports()
  }

  renderAdmin(report){
    if(report.userId === this.props.currentUserId){
      return (
        <div  className="right floated content">
          <Link className="ui button primary" to={`/reports/edit/${report.id}`}>EDIT</Link>
          <Link className="ui button negative" to={`/reports/delete/${report.id}`}>DELETE</Link>
        </div>
      )
  }
  }




export default connect (mapStateToProps, {fetchReports} )(ReportList)
