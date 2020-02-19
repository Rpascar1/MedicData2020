import React from 'react'
import { connect } from 'react-redux'
import { fetchReport } from '../../actions'
import ADMIN_KEY from '../AdminKey'
class ReportShow extends React.Component {
  componentDidMount(){

    this.props.fetchReport(this.props.match.params.id)

  }

render(){

    if(!this.props.report) {

      return <div>Loading...</div>

    } else if(report.userId === this.props.currentUserId || this.props.currentUserId === ADMIN_KEY){
    return (

              <div className="ui form error">
                <div name="incidentLocation" component={this.props.report.incidentLocation} label="Enter incident location"/>
                <div className="equal width fields">
                  <div name="tripDate" component={this.props.report.tripDate} label="Date:"/>
                  <div name="dispatchTime" component={this.props.report.dispatchTime} label="Dispatch Time:"/>
                  <div name="onSceneTime" component={this.props.report.onSceneTime} label="On Scene Time:"/>
                  <div name="leftSceneTime" component={this.props.report.leftSceneTime} label="Left Scene Time:"/>
                </div>
                <div name="narrative" component={this.props.report.narrative} label="Narrative"/>
                <div className="equal width fields">
                  <div name="arrivalDestTime" component={this.props.report.arrivalDestTime} label="Arrived at destination Facility Time:"/>
                  <div name="backInServiceTime" component={this.props.report.backInServiceTime} label="Back in Service Time:"/>
                </div>
                <div name="startMiles" component={this.props.report.startMiles} label="Starting Mileage:"/>
                <div name="endMiles" component={this.props.report.endMiles} label="Ending Mileage:"/>
                <div name="totalMiles" component={this.props.report.totalMiles} label="Total loaded mileage:"/>
                <div name="medicSig" component={this.props.report.medicSig} label="Medic Electronic Signature:"/>
              </div>
            )

  } else {

    return (
      <div>
        <h1>{this.props.incidentLocation}</h1>
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
}
const mapStateToProps = (state, ownProps) => {
  return {
    report: state.reports[ownProps.match.params.id]
  }
}

export default connect (mapStateToProps, {fetchReport})(ReportShow)

// import React from 'react'
// import { connect } from 'react-redux'
// import { fetchReport } from '../../actions'
//
// class ReportShow extends React.Component {
//   componentDidMount(){
//
//     this.props.fetchReport(this.props.match.params.id)
//
//   }
//
// render(){
//
//     if(!this.props.report) {
//
//       return <div>Loading...</div>
//     }
//       const props = this.props.report
//
//       renderAdmin(report){
//         if(report.userId === this.props.currentUserId || this.props.currentUserId === ADMIN_KEY){
//           return (
//             <div  className="right floated content">
//               <Link className="ui button primary" to={`/reports/edit/${report.id}`}>EDIT</Link>
//               <Link className="ui button negative" to={`/reports/delete/${report.id}`}>DELETE</Link>
//             </div>
//           )
//         }
//       }
// if(props.userId === this.props.currentUserId){
//     return (
//
//       <div>
//         <h1>{props.incidentLocation}</h1>
//         <label>
//         <h5> Your back in service time is : {`${new Date()}`} </h5>
//         <h5> Shift supervisor has been notified. <br/>
//         You can't see this bc you should get back to work.</h5>
//         <br/>
//         </label>
//       </div>
//       )
//     }
//   }
// }
// const mapStateToProps = (state, ownProps) => {
//   return {
//     report: state.reports[ownProps.match.params.id]
//   }
// }
//
// export default connect (mapStateToProps, {fetchReport})(ReportShow)
//
// const report = this.props.report
//
//   if(this.props.currentUserId === ADMIN_KEY) {
//       render() {
//         return (
//
//           <div className="ui form error"
//             <div name="incidentLocation" component={report.incidentLocation} label="Enter incident location"/>
//             <div className="equal width fields">
//               <div name="tripDate" component={report.tripDate} label="Date:"/>
//               <div name="dispatchTime" component={report.dispatchTime} label="Dispatch Time:"/>
//               <div name="onSceneTime" component={report.onSceneTime} label="On Scene Time:"/>
//               <div name="leftSceneTime" component={report.leftSceneTime} label="Left Scene Time:"/>
//             </div>
//             <div name="narrative" component={report.narrative} label="Narrative"/>
//             <div className="equal width fields">
//               <div name="arrivalDestTime" component={report.arrivalDestTime} label="Arrived at destination Facility Time:"/>
//               <div name="backInServiceTime" component={report.backInServiceTime} label="Back in Service Time:"/>
//             </div>
//             <div name="startMiles" component={report.startMiles} label="Starting Mileage:"/>
//             <div name="endMiles" component={report.endMiles} label="Ending Mileage:"/>
//             <div name="totalMiles" component={report.totalMiles} label="Total loaded mileage:"/>
//             <div name="medicSig" component={report.medicSig} label="Medic Electronic Signature:"/>
//
//           </div>
//         )
//       }
//     }
//
