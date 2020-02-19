import React from 'react'
import { connect } from 'react-redux'

import {signIn, signOut} from '../actions'
import  Google_Auth_Key  from './GoogleAuthKey'
import styles from './mystyle.module.scss'



class GoogleAuth extends React.Component{


  componentDidMount(){
      window.gapi.load('client:auth2', ()=>{
        window.gapi.client.init({
          clientId: Google_Auth_Key,
          scope: 'email'
        }).then(() => {
          this.auth = window.gapi.auth2.getAuthInstance()

          this.onAuthChange(this.auth.isSignedIn.get())
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
      })
  }

  onAuthChange = isSignedIn => {
      if (isSignedIn){
        this.props.signIn(this.auth.currentUser.get().getId())
      } else {
        this.props.signOut()
      }
  }

  onSignInClick = () => {

      this.auth.signIn()
  }

  onSignOutClick = () => {
      this.auth.signOut()
  }


  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return <div>Signing in</div>
    } else if (this.props.isSignedIn === true) {
      return (

      <div  onClick={this.onSignOutClick} >
        <div className={styles.googleBtn}>
          <div className={styles.googleiconwrapper}>

            <img className={styles.googleicon} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>

            </div>
            <a className={styles.btntextSO}><b>Sign Out</b></a>
            </div>
        </div>



      )
    } else {
      return (
        <div  onClick={this.onSignInClick} >
        <div className={styles.googleBtn}>
          <div className={styles.googleiconwrapper}>
            <i>
            <img className={styles.googleicon} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
            </i>
          </div>
            <a className={styles.btntextSI}><b>Sign in</b></a>
            </div>

        </div>


      )
    }
  }

  render(){
    return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = (state)=> {
  return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth)
