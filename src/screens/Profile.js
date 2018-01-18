import React, { Component } from 'react'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { changeNavBarOption } from '../components/Footer-duck'

import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'
import { Loading } from '../components';

class Profile extends Component {
  logout = () => {
    firebase.logout()
    this.props.changeNavBarOption(0)
  }

  render() {
    if(!this.props.firebase.profile.isLoaded) {
      return <Loading />
    }
    return (
      <div style={styles.body}>
        <div style={styles.profileHeaderContainer}>
          {this.props.firebase.profile.avatarUrl ? 
            <Avatar size={80} src={this.props.firebase.profile.avatarUrl} /> :
            <Avatar size={80} src={require("../assets/Avatar.png")} />
          }
          <div>
            <div>{this.props.firebase.profile.displayName}</div>
            <br/>
            <div>{this.props.firebase.profile.email}</div>
          </div>
          <div>
            <RaisedButton 
              label="Log Out" 
              backgroundColor="#9575CD"
              labelColor="#fafafa"
              style={styles.registerButton} 
              onClick={() => this.logout()}
            />
          </div>
        </div>
        <div style={styles.container}>
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    firebase: state.firebase,
    footer: state.footerReducer
  }
}

export default connect(mapStateToProps, {changeNavBarOption})(Profile)

const styles = {
  body: {
    margin: '0 auto',
    maxWidth: 500,
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
  },
}
