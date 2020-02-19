import React from 'react'
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
import TodaysDate from './TodaysDate'
import solidBars from './solid_bars1.png'
import styles from "./mystyle.module.scss"
const Header = () => {

  return (

      <div className="ui secondary menu">

          <img className={styles.badgeicon} src={solidBars}/>

        <div className="itemdate">
          {TodaysDate}
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
