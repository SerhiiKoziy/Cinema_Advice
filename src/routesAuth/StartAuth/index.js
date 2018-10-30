import React, { Component } from "react";
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import Carousel from 'react-native-snap-carousel';

import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
  Dimensions, StatusBar
} from "react-native";

import MAIN_BG from "../../../resources/images/bg.jpg";
import Icon from "react-native-vector-icons/FontAwesome";

const mockSliderText = [
  {
    title: 'Always current weather forecast'
  },
  {
    title: 'Assistant who is always there'
  },
  {
    title: 'Now! The weather is  predictable'
  },
];

const styles = StyleSheet.create({
  mainSceneWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backdropImage: {
    position: 'absolute',
    width: '100%',
    zIndex: -1
  },

  logoImageWrapper: {
    marginBottom: 40,
    marginTop: 220,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  skipTextWrapper: {
    position: 'absolute',
    top: 20,
    right: 20,
    marginTop: 25,
  },
  skipText: {
    fontSize: 20,
    lineHeight: 25,
    color: "#FFF",
    fontWeight: '500',
    fontFamily: 'Arial',
    textAlign: 'center'
  },

  //SLIDER
  sliderWrapper: {
    height: 240,
  },
  slide: {
    height: 260,
    justifyContent: 'center',
    flexDirection: 'row',
    //backgroundColor: 'rgba(223,223,223,0.4)'
    backgroundColor: '#FFF',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,

  },
  slideTitle: {
    color: "#1e1f49",
    fontSize: 26,
    textAlign: 'center',
  },
  slideImage: {
    width: '100%',
    resizeMode: Image.resizeMode.contain,
  },
});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderItem ({item, index}) {
    let width = Dimensions.get('window').width - 140;
    return (
      <View style={styles.slide}>
        <Text style={styles.slideTitle}>{item.title}</Text>
        {/*<Image source={source} style={styles.slideImage}/>*/}
      </View>
    );
  }

  render() {

    let width = Dimensions.get('window').width;

    return (
      <View style={styles.mainSceneWrapper}>
        <StatusBar barStyle="light-content" />
        <Image source={MAIN_BG} style={styles.backdropImage} />
          <View style={styles.logoImageWrapper}>
            <Icon style={{color: '#FFF'}} name={"thermometer"} size={50}/>
          </View>

          <TouchableOpacity
            style={styles.skipTextWrapper}
            onPress={() => Actions.signIn()}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>

          <View style={styles.sliderWrapper}>
            <Carousel
              ref={c => {this._carousel = c}}
              data={mockSliderText}
              renderItem={this.renderItem}
              sliderWidth={width}
              itemWidth={width - 140}
              loop = {false}
              onSnapToItem={(index) => this.setState({ sliderActiveSlide: index })}
            />
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
