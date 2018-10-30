import { Image, Platform, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
// import CLOSE_BTN from "../../../resources/nav-close.png";
import { saveSelectRoute } from '../../actions/index.js';
const styles = StyleSheet.create({
  container: {
    height: (Platform.OS === 'ios') ? 64 : 54,
    flexDirection: 'row',
    paddingTop: 23,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#13B7FF',
  },
  navBarItem: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navBarLeft:{
    height: 50,
    width: 60,
    left: 20,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    paddingTop: 5,
    backgroundColor: 'transparent',
    zIndex: 100,
  },
  navBarRight:{
    height: 50,
    width: 50,
    right: 20,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingTop: 5,
    zIndex: 100,
  },
  titleText:{
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: 17,
    lineHeight: 22,
  },
  navText:{
    color: '#FFF',
    fontWeight: '500',
    fontFamily: 'Arial',
    fontSize: 15,
    lineHeight: 50,
  }
});

class CustomNavBarSimple extends React.Component {

  backAction(){
    // if(this.props.toPage === 'episodes_1'){
    //   this.props.saveSelectRoute('home');
    // }else if(this.props.toPage === 'episodes_2') {
    //   this.props.saveSelectRoute('channels');
    // }else if(this.props.toPage === 'showPage_1') {
    //   this.props.saveSelectRoute('home');
    // }else if(this.props.toPage === 'showPage_2') {
    //   this.props.saveSelectRoute('channels');
    // }
    Actions.pop()
  }

  renderleft() {
    return (
      <TouchableOpacity
        //onPress={() => this.backAction()}
        style={styles.navBarLeft}
      >
        <Text style={styles.navText}>Sign out</Text>
      </TouchableOpacity>
    )
  }
  renderMiddle() {
    return (
      <View style={styles.navBarItem}>
        <Text style={styles.titleText}>Grown-ups</Text>
      </View>
    )
  }
  renderRight() {
    return (
      <TouchableOpacity
        //onPress={() => this.backAction()}
        style={styles.navBarRight}
      >
        <Text style={styles.navText}>Close</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.props.bgColor || '#13B7FF'}]}>
        { this.renderleft() }
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
  { saveSelectRoute }
)(CustomNavBarSimple );

export default ConnectedComponent;
