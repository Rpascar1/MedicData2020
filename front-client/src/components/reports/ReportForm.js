import React from 'react'
import {Field, reduxForm } from 'redux-form'


class ReportForm extends React.Component {

    renderError({ error, touched }) {
      if (touched && error) {
        return (
          <div className="ui error message">
            <div className="header">{error}</div>
            </div>
                  )
                }
              }
              renderInput = ({input, label, meta}) => {
              const className =`field ${meta.error && meta.touched ? 'error' : ''}`

                return (
                  <div className={className}>
                    <label>{label}</label>
                    <input {...input} autoComplete="off"/>
                    {this.renderError(meta)}
                  </div>
                )
            }

            renderInputTextArea = ({input, label, meta}) => {
            const className =`field ${meta.error && meta.touched ? 'error' : ''}`

              return (
                <div className={className}>
                  <label>{label}</label>
                  <textarea {...input} autoComplete="off"/>
                  {this.renderError(meta)}
                </div>
              )
          }

            onSubmit = (formValues) => {
    
              this.props.onSubmit(formValues)

            }

            render() {
              return (

                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                  <Field name="incidentLocation" component={this.renderInput} label="Enter incident location"/>
                  <div className="equal width fields">
                    <Field name="tripDate" component={this.renderInput} label="Date:"/>
                    <Field name="dispatchTime" component={this.renderInput} label="Dispatch Time:"/>
                    <Field name="onSceneTime" component={this.renderInput} label="On Scene Time:"/>
                    <Field name="leftSceneTime" component={this.renderInput} label="Left Scene Time:"/>
                  </div>
                  <Field name="narrative" component={this.renderInputTextArea} label="Narrative"/>
                  <div className="equal width fields">
                    <Field name="arrivalDestTime" component={this.renderInput} label="Arrived at destination Facility Time:"/>
                    <Field name="backInServiceTime" component={this.renderInput} label="Back in Service Time:"/>
                  </div>
                  <Field name="startMiles" component={this.renderInput} label="Starting Mileage:"/>
                  <Field name="endMiles" component={this.renderInput} label="Ending Mileage:"/>
                  <Field name="totalMiles" component={this.renderInput} label="Total loaded mileage:"/>
                  <Field name="medicSig" component={this.renderInput} label="Medic Electronic Signature:"/>
                  <button className="ui button primary">Submit</button>
                </form>
              )
            }
          }

    const validate = (formValues)=>{
      const errors={}

      if(!formValues.incidentLocation){

      errors.incidentLocation = "You must enter an incident location."
      }
      if(!formValues.narrative){
      errors.narrative = "You must enter a narrative."
      }
      if(!formValues.dispatchTime){
      errors.dispatchTime = "You must enter an incident location."
      }
      if(!formValues.onSceneTime){
      errors.onSceneTime = "You must enter a time."
      }
      if(!formValues.arrivalDestTime){
      errors.arrivalDestTime = "You must enter an incident location."
      }
      if(!formValues.leftSceneTime){
      errors.leftSceneTime = "You must enter a time."
      }
      if(!formValues.backInServiceTime){
      errors.backInServiceTime = "You must enter a time."
      }
      if(!formValues.startMiles){
      errors.startMiles = "You must enter a narrative."
      }
      if(!formValues.endMiles){
      errors.endMiles = "You must enter an incident location."
      }
      if(!formValues.totalMiles){
      errors.totalMiles = "You must enter a narrative."
      }
      if(!formValues.medicSig){
      errors.medicSig = "You must enter a narrative."
      }
      if(!formValues.facilityArrival){
      errors.facilityArrival = "You must enter a time."
      }
      if(!formValues.tripDate){
      errors.tripDate = "You must enter a date of transport."
      }
      return errors
    }

    export default reduxForm({
      form: 'reportForm',
      validate
    })(ReportForm)
