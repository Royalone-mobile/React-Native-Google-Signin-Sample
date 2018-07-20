import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import styles from './style';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      imageProfile: "",
      userEmail: '',
    };
  }

  componentDidMount() {
    this._setupGoogleSignin();
  }

  render() {
    if (!this.state.user) {
      return (
        <View style={styles.container}>
          <GoogleSigninButton style={styles.googleButtonStyles}
            color={GoogleSigninButton.Color.Light}
            size={GoogleSigninButton.Size.Icon}
            onPress={() => { this.onGoogleSignInButton(); }}
           />
        </View>
      );
    }

    if (this.state.user) {
      console.log(this.state.user.photo)
      return (
        <View style={styles.container}>
         <Image source={{ uri : this.state.user.photo}} style={styles.userPhoto}/>
         <Text style={styles.subTitleText}>Welcome Mr. {this.state.user.name}</Text>
         <Text>Your loged email is: {this.state.user.email}</Text>
         <TouchableOpacity onPress={() => {this.onGoogleSignOut(); }}>
           <View style={styles.logoutButton}>
             <Text>Log out</Text>
             </View>
        </TouchableOpacity>
       </View>
      );
    }
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        webClientId: '157098791642-8b1t68u67prf2k2oja0r37ooshag8sq9.apps.googleusercontent.com',
        offlineAccess: true
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log("userDetais",user);
      this.setState({user});
    }
    catch(err) {
      console.log("There are any error", err.message);
    }
  }

  onGoogleSignInButton() {
    GoogleSignin.signIn()
    .then((user) => {
      console.log("userDetais", user);
      this.setState({user: user});
    })
    .catch((err) => {
      console.log('There are some error', err);
    })
    .done();
  }

  onGoogleSignOut() {
    console.log("Signing Out");
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.setState({user: null});
    })
    .done();
    console.log("Logged Out");
  }
}
