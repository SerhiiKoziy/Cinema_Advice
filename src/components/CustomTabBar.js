import React from 'react'
import {Text, View, TouchableOpacity, StyleSheet, Image, Animated} from "react-native";
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  MKButton,
  MKColor,
  MKIconToggle,
  getTheme,
} from 'react-native-material-kit';
import { saveSelectRoute } from '../actions/index.js';
// const MENU_BG = require("../../resources/bottomMenuBg.png");

const styles = StyleSheet.create({
  tabBarWr:{
    flexDirection: 'row',
  },
  itemContainerSec:{
    height: 50,
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage:{
    height: '100%',
    width: '100%',
  },
  button: {
    backgroundColor: "transparent",
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  menuBgWr:{
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: 50,
  },
  menuBgImage:{
    width: '100%',
    height: '100%',
    resizeMode: Image.resizeMode.cover
  }
});

{/*<MKButton*/}
  {/*backgroundColor={'#FFF'}*/}
  {/*shadowRadius={2}*/}
  {/*shadowOffset={{width:0, height:0}}*/}
  {/*shadowOpacity={.7}*/}
  {/*shadowColor="#346"*/}
  {/*onPress={() => Actions.channels({})}*/}
{/*>*/}
  {/*<Image style={ styles.itemImage} source={require("../resources/nav-menu.png")}/>*/}
{/*</MKButton>*/}


 class CustomTabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);

  }
  componentWillMount() {
    this.animatedValue0 = new Animated.Value(1);
    this.animatedValue1 = new Animated.Value(1);
    this.animatedValue2 = new Animated.Value(1);
  }

  handlePressIn(nameValue) {
    Animated.spring(nameValue, {
      toValue: 1.25
    }).start()
  }
  handlePressOut(nameValue) {
    Animated.spring(nameValue, {
      toValue: 1,
      friction: 3,
      tension: 40
    }).start()
  }
  goToRout(pageCurrent){
    this.props.saveSelectRoute(pageCurrent);
    if(pageCurrent === 'home'){
      Actions.home({pageCurrent: pageCurrent});
    }else if(pageCurrent === 'channels'){
      Actions.channels({pageCurrent: pageCurrent});
    }else if(pageCurrent === 'search'){
      Actions.search({pageCurrent: pageCurrent});
    }
  }
  render() {
    const animatedStyleFirst = {
      transform: [{ scale: this.animatedValue0}]
    };
    const animatedStyleSecond = {
      transform: [{ scale: this.animatedValue1}]
    };
    const animatedStyleThird = {
      transform: [{ scale: this.animatedValue2}]
    };
    let pageCurrent = this.props.data.selectRoute || '';
    return (
      <View style={ styles.tabBarWr}>
        <View style={styles.menuBgWr}>
          <Image style={styles.menuBgImage} source={MENU_BG}/>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          style={ styles.itemContainerSec}
          onPress={() => this.goToRout('home')}
          onPressIn={() => this.handlePressIn(this.animatedValue0)}
          onPressOut={() => this.handlePressOut(this.animatedValue0)}
        >
          {/*<Animated.View style={[styles.button, animatedStyleFirst]}>*/}
            {/*{*/}
              {/*pageCurrent === 'home' ? (*/}
                {/*<Image style={styles.itemImage} source={require("../../resources/nav-home-active.png")}/>*/}
              {/*) : (*/}
                {/*<Image style={styles.itemImage} source={require("../../resources/nav-home.png")}/>*/}
              {/*)*/}
            {/*}*/}
          {/*</Animated.View>*/}
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          style={ styles.itemContainerSec}
          onPress={() => this.goToRout('channels')}
          onPressIn={() => this.handlePressIn(this.animatedValue1)}
          onPressOut={() => this.handlePressOut(this.animatedValue1)}
        >
          {/*<Animated.View style={[styles.button, animatedStyleSecond]}>*/}
            {/*{*/}
              {/*pageCurrent === 'channels' ? (*/}
                {/*<Image style={styles.itemImage} source={require("../../resources/nav-menu-active.png")}/>*/}
              {/*) : (*/}
                {/*<Image style={styles.itemImage} source={require("../../resources/nav-menu.png")}/>*/}
              {/*)*/}
            {/*}*/}
          {/*</Animated.View>*/}
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          style={ styles.itemContainerSec}
          onPress={() => this.goToRout('search')}
          onPressIn={() => this.handlePressIn(this.animatedValue2)}
          onPressOut={() => this.handlePressOut(this.animatedValue2)}
        >
          {/*<Animated.View style={[styles.button, animatedStyleThird]}>*/}
            {/*{*/}
              {/*pageCurrent === 'search' ? (*/}
                {/*<Image style={styles.itemImage} source={require("../../resources/nav-search-active.png")}/>*/}
              {/*) : (*/}
                {/*<Image style={styles.itemImage} source={require("../../resources/nav-search.png")}/>*/}
              {/*)*/}
            {/*}*/}
          {/*</Animated.View>*/}
        </TouchableOpacity>
      </View>
    )
  }
}
const ConnectedComponent = connect(
  (state) => {
    return { data: state.data };
  },
  { saveSelectRoute }
)(CustomTabBar);

export default ConnectedComponent;
