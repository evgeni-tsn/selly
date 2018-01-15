import React, { Component, Fragment } from 'react'
import firebase from 'firebase'
import {Redirect} from 'react-router-dom'

import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'

import {Header, Footer} from '../components'

export default class Profile extends Component {
  render() {
    console.log()
    return (
      <Fragment>
        <Header/>
        <div style={styles.body}>
          <div style={styles.profileHeaderContainer}>
              <Avatar size={80} src={require("../assets/Avatar.png")} />
          </div>
          <div style={styles.container}>
            <RaisedButton 
              label="Log Out" 
              backgroundColor="#9575CD"
              labelColor="#fafafa"
              style={styles.registerButton} 
              onClick={() => {
                firebase.logout()
                this.props.history.push('/login')
              }}
            />
          </div>
        </div>
        <Footer/>
      </Fragment>
      
    )
  }
}

const styles = {
  body: {
    marginTop: 48,
    marginBottom: 80
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  profileHeaderContainer: {
      padding: 20,
      height: '15vh',
      backgroundColor: 'lightgrey',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  registerButton: {
    margin: 12, 
    marginTop: 30,
  },
}
