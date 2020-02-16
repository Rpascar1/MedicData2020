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
      const {title, description} = this.props.report

    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
      )
  }
}


export default connect (mapStateToProps, {fetchReport})(ReportShow)
