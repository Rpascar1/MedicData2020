import React from 'react'
import { connect } from 'react-redux'
import { fetchReport } from '../../actions'

class ReportShow extends React.Component {
  componentDidMount(){
    this.props.fetchReport(this.props.match.params.id)
  }

render(){
    if(!this.props.report) {
      return <div>Loading...</div>
    }
      const {incidentLocation, narrative} = this.props.report

    return (
      <div>
        <h1>{incidentLocation}</h1>
        <h5>{narrative}</h5>
      </div>
      )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    report: state.reports[ownProps.match.params.id]
  }
}

export default connect (mapStateToProps, {fetchReport})(ReportShow)
