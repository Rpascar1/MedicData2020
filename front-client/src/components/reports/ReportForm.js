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
            }
