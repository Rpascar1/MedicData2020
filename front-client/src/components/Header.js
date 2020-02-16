import React from 'react'
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {

  return (
      <div className="ui secondary pointing menu">
        <div className="item">
          {new Date().getMonth()+ "/" + new Date ().getDate()+ "/" + new Date().getFullYear()}
        </div>
        <div className="right menu">
          <Link to="/reports" className="item">
            All Trips
          </Link>
          <GoogleAuth/>
        </div>
      </div>
  )

}

export default Header
