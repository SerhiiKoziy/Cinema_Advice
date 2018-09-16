import { Image, Platform, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import CLOSE_BTN from "../../../resources/nav-close.png";
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
  navBarRight:{
    height: 50,
    width: 50,
    right: 20,
    bottom: 0,
    position: 'absolute',
    //backgroundColor: '#ccc',
    zIndex: 100,
  },
  titleText:{
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: 17,
    lineHeight: 22,
  },

  backImage:{
    position: 'absolute',
    bottom: 10,
    right: 0,
    width: 25,
    height: 25,
    resizeMode: Image.resizeMode.contain
  }
});

class CustomNavBarProfileSet extends React.Component {

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
    Actions.chooseProfile()
  }


  renderMiddle() {
    let { nameProfile, typeSettings } = this.props.profile.selectSettings;
    return (
      <View style={styles.navBarItem}>
        {
          typeSettings === 'edit' && (
            <Text style={styles.titleText}>Edit profile</Text>
          )
        }
        {
          typeSettings === 'add' && (
            <Text style={styles.titleText}>Profile Settings</Text>
          )
        }
      </View>
    )
  }
  renderRight() {
    return (
      <TouchableOpacity
        onPress={() => this.backAction()}
        style={[styles.navBarRight, { }]}
      >
        <Image source = {CLOSE_BTN} style={styles.backImage}/>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.props.bgColor || '#13B7FF'}]}>
        { this.renderMiddle() }
        { this.renderRight() }
      </View>
    )
  }
}
const ConnectedComponent = connect(
  (state) => {
    return { data: state.data, profile: state.profile };
  },
  { saveSelectRoute }
)(CustomNavBarProfileSet );

export default ConnectedComponent;
