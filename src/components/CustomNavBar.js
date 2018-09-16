import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import HandShake from '../components/HandShake.js';
const NAV_INFO = require("../../resources/nav-info.png");
const NAV_GROW = require("../../resources/nav-grow.png");
import { TWO_STEEL, BG_ACTIVE_COLOR_DESIGN, BG_COLOR_DESIGN } from "../constants/index.js";

const styles = StyleSheet.create({
  container: {
    height: (Platform.OS === 'ios') ? 64 : 54,
    flexDirection: 'row',
    paddingTop: 23,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: TWO_STEEL,
  },
  navBarItem: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navBarLeft:{
    height: 50,
    width: 50,
    left: 20,
    top: 19,
    position: 'absolute',
    zIndex: 1000,
  },
  navBarItemLeft:{
    position: 'absolute',
    height: 50,
    width: 70,
    zIndex: 100,
  },
  titleText:{
    color: '#FFF',
    fontWeight: 'bold',
    //fontFamily: 'Arial',
    fontSize: 17,
    lineHeight: 22,
  },
  navBarRight:{
    position: 'absolute',
    height: 50,
    width: 25,
    right: 20,
    top: 19,
    zIndex: 1000,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navBarItemRightInfo:{
    height: 25,
    width: 25,
    zIndex: 100,
  },
  navBarItemRightGrow:{
    height: 25,
    width: 25,
    zIndex: 100,
  },
});

class CustomNavBar extends React.Component {
  backPrevious(){
    Actions.categories({});
  }

  renderLeft() {
    return (
      <View style={styles.navBarLeft}>
        <View>
          <HandShake/>
        </View>
        <TouchableOpacity
          style={styles.navBarItemLeft}
          onPress={() => this.backPrevious()}
        />
      </View>
    )
  }
  renderMiddle() {
    return (
      <View style={styles.navBarItem}>
        <Text style={styles.titleText}>{ "Page" || this.props.data.dataSelectedCategory.selectedCategory }</Text>
      </View>
    )
  }
  renderRight() {
    return (
      <View style={styles.navBarRight}>
        <TouchableOpacity
          //onPress={() => Actions.startAuth()}
        >
          <Image source={NAV_GROW} style={styles.navBarItemRightGrow} />
        </TouchableOpacity>
      </View>
    )
  }


  render() {
    return (
      <View style={[styles.container]}>
        { this.renderLeft() }
        { this.renderMiddle() }
        { this.renderRight() }
      </View>
    )
  }
}
const ConnectedComponent = connect(
  (state) => {
    return { data: state.data };
  },
  {  }
)(CustomNavBar);

export default ConnectedComponent;
