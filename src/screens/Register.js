import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'

import {Link} from 'react-router-dom'

export default class Register extends Component {
  render() {
    return (
      <div style={{...styles.flex, ...styles.body}}>
        <div style={{...styles.flex}}>  
          <h2 style={styles.welcomeMsg}>Register to</h2>
          <h1 style={styles.title}>Selly</h1>
        </div>
        <div style={{...styles.flex, marginTop: '1em'}}>
          <TextField
            floatingLabelText="Username"
            floatingLabelStyle={{color: '#fafafa'}}
          />
          <TextField
            floatingLabelText="Email"
            floatingLabelStyle={{color: '#fafafa'}}
          />
          <TextField
            floatingLabelText="Password"
            floatingLabelStyle={{color: '#fafafa'}}
          />
          <TextField
            floatingLabelText="Repeat Password"
            floatingLabelStyle={{color: '#fafafa'}}
          />
          
          <RaisedButton 
            containerElement={<Link to='/'/>}
            label="Register" 
            backgroundColor="#64DD17"
            labelColor="#fafafa"
            style={styles.registerButton} 
          />
          <FlatButton 
            containerElement={<Link to='/login'/>}
            labelStyle={{color:"#fafafa"}}
            label="Go to Login"
          />
        </div>
      </div>
    )
  }
}

const styles = {
  flex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    alignItems: 'space-around',
    height: '100vh',
    backgroundImage: 'linear-gradient(135deg, #9890e3 0%, #b1f4cf 100%)'
  },
  registerButton: {
    margin: 12, 
    width: 60,
    marginTop: 30,
  },
  welcomeMsg: {
    fontSize: '1.5em', 
    marginBottom: '0.9em', 
    color: '#fafafa'
  },
  title: {
   fontFamily: 'Pacifico',
   color: '#555',
   fontSize: '4em'
  },
  slogan: {
    marginTop: '2.5em',
    color: '#fafafa'
  }
}
