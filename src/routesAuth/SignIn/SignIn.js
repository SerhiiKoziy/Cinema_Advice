import React, { Component } from "react";
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import { saveSelectedChannel, saveNameSelectTab } from '../../actions';

import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Animated,
  Easing, StatusBar
} from "react-native";
import MAIN_BG from "../../../resources/images/bg.jpg";
import { AUTH_BUTTON_BG, AUTH_MAIN_TEXT_COLOR, AUTH_SECOND_TEXT_COLOR }from "../../config/style-config.js";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  mainSceneWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  backdropImage: {
    position: 'absolute',
    width: '100%',
    zIndex: -1
  },

  logoImageWr: {
    marginTop: 120,
    height: 120,
    width: 120,
    borderRadius: 100,
    backgroundColor: '#717387',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  listContainer: {
    flexDirection: "column",
    paddingBottom: 40,
    width: '100%'

  },


  //INPUT
  inputWrapper: {
    position: 'relative',

  },
  inputTitle: {
    position: 'absolute',
    width: '100%',
    fontSize: 16,
    color: AUTH_SECOND_TEXT_COLOR,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  defaultInput: {
    width: '100%',
    height: 56,
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderColor: AUTH_SECOND_TEXT_COLOR,
    color: AUTH_MAIN_TEXT_COLOR,
    fontFamily: 'Arial',
  },

  //BUTTON AUTH
  buttonAuthWrapper: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  buttonAuth: {
    height: 50,
    width: '100%',
    borderRadius: 30,
    backgroundColor: AUTH_BUTTON_BG,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,

  },
  buttonAuthText: {
    textAlign: 'center',
    fontSize: 20,
    color: "#FFF",
    fontWeight: '500',
    fontFamily: 'Arial',
  },

  //BOTTOM TEXT
  bottomTextWrapper: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  bottomText: {
    fontSize: 14,
    color: AUTH_SECOND_TEXT_COLOR,
    fontWeight: '400',
    fontFamily: 'Arial',
    marginRight: 5,
  },
  bottomTextBold: {
    fontSize: 14,
    color: AUTH_MAIN_TEXT_COLOR,
    fontWeight: '500',
    fontFamily: 'Arial',
  },

});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      pass: '',
      isFocused: false,
      touched: false,
      topAnimation: new Animated.Value(20),
    };
  }

  componentDidMount() {
    this.props.saveNameSelectTab('tab_3');

  }

  animateMoveUp () {
    this.setState({isFocused: true, text: '', touched: true});
    Animated.timing(
      this.state.topAnimation,
      {
        toValue: 0,
        duration: 300,
        easing: Easing.linear
      }
    ).start();
  }

  animateMoveDown () {
    this.setState({isFocused: false});
    if (this.state.login.length === 0 ) {
      Animated.timing(
        // Uses easing functions
        this.state.topAnimation,
        {
          toValue: 20,
          duration: 300,
          easing: Easing.linear
        }
      ).start();
    }
  }

  render() {
    return (
      <View style={styles.mainSceneWrapper}>
        <StatusBar barStyle="light-content" />
        <Image source={MAIN_BG} style={styles.backdropImage} />

        <View style={styles.logoImageWr}>
          <Icon style={{color: '#FFF'}} name={"thermometer-half"} size={50}/>
        </View>

        <View style={styles.listContainer}>

          <View style={styles.inputWrapper}>
            <Animated.View
              style={{top: this.state.topAnimation}}
            >
                <Text style={styles.inputTitle}>Username</Text>
            </Animated.View>
            <TextInput
              style={styles.defaultInput}
              onChangeText={(login) => this.setState({login})}
              onBlur={() => this.animateMoveDown()}
              onFocus={() => this.animateMoveUp()}
              value={this.state.text}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.defaultInput}
              onChangeText={(pass) => this.setState({pass})}
              onBlur={() => this.setState({inputActive: false})}
              //onFocus={() => this.setState({inputActive: true, text: '', touched: true})}
              value={this.state.text}
            />
          </View>

          <View style={styles.buttonAuthWrapper}>
            <TouchableOpacity
              style={styles.buttonAuth}
              onPress={() => Actions.grownUps()}
            >
              <Text style={styles.buttonAuthText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomTextWrapper}>
            <Text style={styles.bottomText}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => Actions.signUp()}
            >
              <Text style={styles.bottomTextBold}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const ConnectedComponent = connect(
  (state) => {
    return { data: state.data };
  },
  { saveSelectedChannel, saveNameSelectTab }
)(Search);

export default ConnectedComponent;
