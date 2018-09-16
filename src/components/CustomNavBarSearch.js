import { Image, Platform, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { SECONDARY_COLOR_DESIGN, BG_COLOR_DESIGN } from "../constants/index.js";
const styles = StyleSheet.create({
  container: {
    height: (Platform.OS === 'ios') ? 64 : 54,
    flexDirection: 'row',
    paddingTop: 23,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: BG_COLOR_DESIGN,
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
    bottom: 0,
    position: 'absolute',
    //backgroundColor: '#ccc',
    zIndex: 100,
  },
  titleText:{
    color: '#FFF',
    fontWeight: 'bold',
    //fontFamily: 'Arial',
    fontSize: 17,
    lineHeight: 22,
  },

  backImage:{
    position: 'absolute',
    bottom: 10,
    left: 0,
    width: 25,
    height: 25,
    resizeMode: Image.resizeMode.contain
  }
});

class CustomNavBarSearch extends React.Component {


  renderMiddle() {
    return (
      <View style={styles.navBarItem}>
        <Text style={styles.titleText}>{ this.props.title }</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.props.bgColor || BG_COLOR_DESIGN}]}>
        { this.renderMiddle() }
      </View>
    )
  }
}
const ConnectedComponent = connect(
  (state) => {
    return { data: state.data };
  },
  {  }
)(CustomNavBarSearch);

export default ConnectedComponent;
