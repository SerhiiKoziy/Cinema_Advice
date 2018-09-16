import { Image, Platform, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import BACK_BTN from "../../resources/nav-back-wight.png";
import { saveSelectRoute } from '../actions/index.js';
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
    Actions.home()
  }
  renderLeft() {
    return (
      <TouchableOpacity
        onPress={() => this.backAction()}
        style={[styles.navBarLeft, { }]}
      >
        <Image source = {BACK_BTN} style={styles.backImage}/>
      </TouchableOpacity>
    )
  }

  renderMiddle() {
    return (
      <View style={styles.navBarItem}>
        <Text style={styles.titleText}>{ this.props.title }</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.props.bgColor || '#13B7FF'}]}>
        { this.renderLeft() }
        { this.renderMiddle() }
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
