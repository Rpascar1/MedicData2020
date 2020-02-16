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
  renderList(){
    return this.props.reports.map(report => {
      return (
        <div className="item" key={report.id}>
          {this.renderAdmin(report)}
          <i className="large middle aligned icon ambulance"/>
          <div className="content">
            <Link to={`/reports/${report.id}`} className="header">
            {report.title}
            </Link>
            <div className="description">{report.description}</div>
          </div>
        </div>
      )
    })
  }




export default connect (mapStateToProps, {fetchReports} )(ReportList)
