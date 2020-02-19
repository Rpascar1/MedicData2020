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
      const props = this.props.report

    return (
      <div>
      <br/>
        <h1>{props.incidentLocation}</h1>
        <label>
        <h5> Your back in service time is : {`${new Date()}`} </h5>
        <h5> Shift supervisor has been notified. <br/>
        You can't see this bc you should get back to work.</h5>
        <br/>
        </label>
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
