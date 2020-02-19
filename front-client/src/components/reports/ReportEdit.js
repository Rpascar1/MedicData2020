import React from 'react'
import {connect} from 'react-redux'
import {fetchReport, editReport} from '../../actions'
import ReportForm from './ReportForm'

class ReportEdit extends React.Component {


  componentDidMount() {
    this.props.fetchReport(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
      console.log(formValues);
      this.props.editReport(this.props.match.params.id, formValues)
        console.log(formValues);
    }

    render() {
      console.log(this.props);
        return (
                <div>
                <br/>
                  <h3> Edit a Report</h3>
                  <ReportForm
                    onSubmit={this.onSubmit}
                    initialValues={this.props.report}
                  />
                </div>

               )

      }
  }

  const mapStateToProps = (state, ownProps) => {
    return {
      report: state.reports[ownProps.match.params.id]
    }
  }

export default connect(mapStateToProps, {fetchReport, editReport})(ReportEdit)
