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

const BG_IMAGE = require("../../../resources/userBG.png");
const IMAGE_HERO = require("../../../resources/categories/buddy-bouncy-normal.png");

const styles = StyleSheet.create({
  mainListContainer:{
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  listContainer:{
    position: 'relative',
    width: '100%',
    maxWidth: 375,
    height: 56,
    flexDirection: "column",
    marginTop: 0,
    paddingTop: 0,

  },
  containerScroll:{
    flex: 1,
    height: '100%',
    maxWidth: 375,
    width: '100%',
    paddingRight: 30,
    paddingLeft: 30,
  },

  //SEARCH
  mainTitle:{
    fontSize: 32,
    lineHeight: 40,
    marginBottom: 20,
    marginTop: 20,
    color: "#13B7FF",
    fontWeight: '700',
    textAlign: 'center',
  },
  descriptionText:{
    fontSize: 17,
    lineHeight: 22,
    color: "#444444",
    fontWeight: '500',
    fontFamily: 'Arial',
    textAlign: 'center'
  },
  item: {
    width: "100%",
    height: 340,
    alignItems:'center',
    marginBottom: 20,
    marginTop: 20,
    //display: 'flex'
  },
  itemSelect: {
    position: 'absolute',
    top: 0,
    left: 0,

    width: '100%',
    height: '100%',
    borderRadius: 200,
    borderColor : '#13B7FF',
    borderWidth: 6,

    //display: 'flex'
  },
  imageWr:{
    marginTop: 15,
    width: 246,
    height: 246,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImg: {
    width: 120,
    height: 140,
  },
  itemImgBg: {
    position: "absolute",
    width: 246,
    height: 246,
    //left: 20
  },
  underButtonTextWr:{
    marginTop: 0,
  },
  underButtonText: {
    textAlign: "center",
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    fontFamily: 'Arial',
    color: '#444444',
    paddingTop: 20,

  },

});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.saveNameSelectTab('tab_3')
  }
  render() {


    return (
      <View style={{flex: 1, backgroundColor: '#FFF', alignItems: 'center'}}>
        <View style={styles.containerScroll}>
          <View style={styles.listContainer}>
            <Text style={styles.mainTitle}>Hello grown-ups!</Text>
            <View >
              <Text style={styles.descriptionText}>
                Here you can create and update your kid's profiles to help give them appropriate content.
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.item]}
              onPress={() => Actions.chooseProfile()}
            >
              <View style={styles.imageWr}>
                <Image source={BG_IMAGE} style={styles.itemImgBg} />
                <Image source={IMAGE_HERO} style={styles.itemImg} />
              </View>
              <View style={ styles.underButtonTextWr }>
                {/*<Text style={ styles.underText }>{item.text.slice(0, -1)}</Text>*/}
                <Text style={ styles.underButtonText }>
                  {"Kids' profiles"}
                </Text>
              </View>
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
