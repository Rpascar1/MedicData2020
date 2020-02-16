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
