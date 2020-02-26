import React from 'react'
import {connect} from 'react-redux'
import { fetchReports } from '../../actions'
import { Link } from 'react-router-dom'
import ADMIN_KEY from '../AdminKey'



class ReportList extends React.Component {



  componentDidMount(){
    this.props.fetchReports()
  }



  renderAdmin(report){
    if(report.userId === this.props.currentUserId || this.props.currentUserId === ADMIN_KEY){
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
            {report.incidentLocation}
            </Link>
            <div className="narrative">{report.date}</div>
          </div>
        </div>
      )
    })
  }



  renderCreate () {
    if(this.props.isSignedIn === true){
      return (
        <div style={{textAlign:'right'}}>
          <Link to="/reports/new" className="ui button primary">Create Trip Report</Link>
        </div>
      )
    }
  }

  render () {

    return (
      <div>
      <br/>
        <h2>Trip Reports</h2>
        <div className="ui celled list">{this.renderList()}</div>
        <div>{this.renderCreate()}</div>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return { reports: Object.values(state.reports),
           currentUserId: state.auth.userId,
           isSignedIn: state.auth.isSignedIn
         }
  }

export default connect (mapStateToProps, {fetchReports} )(ReportList)
