import { Image, Platform, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
const styles = StyleSheet.create({
  container: {
    height: (Platform.OS === 'ios') ? 64 : 54,
    flexDirection: 'row',
    paddingTop: 23,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#13B7FF',
    justifyContent: 'center',
    alignItems: 'center'
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
    fontFamily: 'Arial',
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

class CustomNavBarCategories extends React.Component {

  // constructor(props) {
  //   super(props)
  // }


  render() {

    return (
      <View style={[styles.container]}>
        <Text style={[styles.titleText]}>Who are you ?</Text>
      </View>
    )
  }
}
const ConnectedComponent = connect(
  (state) => {
    return { data: state };
  },
  {  }
)(CustomNavBarCategories);

export default ConnectedComponent;
