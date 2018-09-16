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
  Text
} from "react-native";

import LOGO_BANNER_IMAGE from "../../../resources/logo-new.png";

const styles = StyleSheet.create({
  mainListContainer:{
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  listContainer:{
    flex: 1,
    width: '100%',
    maxWidth: 375,
    flexDirection: "column",
    paddingTop: 220,

  },
  containerScroll:{
    flex: 1,
    height: '100%',
    maxWidth: 375,
    width: '100%',
    paddingRight: 30,
    paddingLeft: 30,
  },

  mainTitle:{
    fontSize: 28,
    lineHeight: 34,
    color: "#13B7FF",
    fontWeight: '700',
    fontFamily: 'Arial',
    textAlign: 'center'
  },
  variableTextWr:{
    marginTop: 25,
  },
  variableText:{
    fontSize: 20,
    lineHeight: 25,
    color: "#13B7FF",
    fontWeight: '500',
    fontFamily: 'Arial',
    textAlign: 'center'
  },
  logoImageWr:{
    position: 'absolute',
    bottom: 10,
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  logoImage:{
    width: 160,
    height: 80,
    resizeMode: Image.resizeMode.contain,
  },


});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFF', alignItems: 'center'}}>
        <View style={styles.containerScroll}>
          <View style={styles.listContainer}>

            <Text style={styles.mainTitle}>Prototype profiles</Text>
            <TouchableOpacity
              style={styles.variableTextWr}
              onPress={() => Actions.categories()}
            >
              <Text style={styles.variableText}>1. Kid edit Buddy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.variableTextWr}
              onPress={() => Actions.signIn()}
            >
              <Text style={styles.variableText}>2. Adult add profile</Text>
            </TouchableOpacity>
            <View style={styles.logoImageWr}>
              <Image
                source={LOGO_BANNER_IMAGE}
                style={styles.logoImage}
              />
            </View>

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
  { }
)(Search);

export default ConnectedComponent;
