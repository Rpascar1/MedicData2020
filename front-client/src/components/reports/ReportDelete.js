import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Modal from '../Modal'
import history from  '../../history'
import {fetchReport, deleteReport} from '../../actions'

class ReportDelete extends React.Component {

  componentDidMount(){
    this.props.fetchReport(this.props.match.params.id)
  }


  renderActions(){
    return (
      <React.Fragment>
        <button
        onClick={()=> this.props.deleteReport(this.props.match.params.id)}
        className="ui button negative">
        Delete
        </button>
        <Link to="/reports" className="ui button">Cancel</Link>
      </React.Fragment>
    )
  }

  renderContent(){
    if(!this.props.report) {
      return 'Are you sure you want to delete this Report?'
    }
    return (
      `Are you sure you want to delete this Report: ${this.props.report.incidentLocation}?`
    )
    }

  render() {
    return(
      <Modal
      incidentLocation="Delete Report"
      content={this.renderContent()}
      actions={this.renderActions()}
      onDismiss={() => history.push("/reports")}
      />
   )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    report: state.reports[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps,{ fetchReport, deleteReport })(ReportDelete)
