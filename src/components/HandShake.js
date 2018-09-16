import React from 'react';
import {connect} from 'react-redux';
import { Animated, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Actions } from 'react-native-router-flux';

import MAIN_IMAGE_FIRST from "../../resources/heroes/heroe-1.png";
import HAND_IMAGE_FIRST from "../../resources/heroes/heroe-1-hand.png";

import MAIN_IMAGE_SEC from "../../resources/heroes/heroe-2.png";
import HAND_IMAGE_SEC from "../../resources/heroes/heroe-2-hand.png";

import MAIN_IMAGE_THIRD from "../../resources/heroes/heroe-3.png";
import HAND_IMAGE_THIRD from "../../resources/heroes/heroe-3-hand.png";

import MAIN_IMAGE_FOURTH from "../../resources/heroes/heroe-4.png";
import HAND_IMAGE_FOURTH from "../../resources/heroes/heroe-4-hand.png";

import MAIN_IMAGE_FIFTH from "../../resources/heroes/heroe-5.png";
import HAND_IMAGE_FIFTH from "../../resources/heroes/heroe-5-hand.png";

import MAIN_IMAGE_SIXTH from "../../resources/heroes/heroe-6.png";
import HAND_IMAGE_SIXTH from "../../resources/heroes/heroe-6-hand.png";

const styles = StyleSheet.create({
  logoContainer:{
    width: 100,
    height: 49,
    zIndex: 10000
  },
  mainImage:{
    position: 'absolute',
    width: 82,
    height: 53,
    bottom: -2,
  },
  handContainer:{
    position: 'absolute',
    bottom: -39,
    left: 42,
  },
  handImage:{
    width: 22,
    height: 88,
  }
});

const imagesHeroesArr = [
  //younger girl
  {
    hero: MAIN_IMAGE_FIRST,
    hand: HAND_IMAGE_FIRST,
  },
  //middle boy
  {
    hero: MAIN_IMAGE_SEC,
    hand: HAND_IMAGE_SEC,
  },
  //older boy
  {
    hero: MAIN_IMAGE_THIRD,
    hand: HAND_IMAGE_THIRD,
  },
  //middle girl
  {
    hero: MAIN_IMAGE_FOURTH,
    hand: HAND_IMAGE_FOURTH,
  },
  //young boy
  {
    hero: MAIN_IMAGE_FIFTH,
    hand: HAND_IMAGE_FIFTH,
  },
  //older girl
  {
    hero: MAIN_IMAGE_SIXTH,
    hand: HAND_IMAGE_SIXTH,
  },
];
const arrCategory = [
  'Younger Girls',
  'Middle Boys',
  'Older Boys',
  'Middle Girls',
  'Younger Boys',
  'Older Girls',
];
class HandShake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    Animatable.initializeRegistryWithDefinitions({
      rotateHand: {
        0: {
          transform: [{ rotate: '30deg'}],
        },
        0.09: {
          transform: [{ rotate: '0deg'}]
        },
        0.18: {
          transform: [{ rotate: '55deg'}]
        },
        0.27: {
          transform: [{ rotate: '0deg'}]
        },
        0.36: {
          transform: [{ rotate: '55deg'}]
        },
        0.45: {
          transform: [{ rotate: '0deg'}]
        },
        0.54: {
          transform: [{ rotate: '55deg'}]
        },
        0.63: {
          transform: [{ rotate: '30deg'}]
        },
        1: {
          transform: [{ rotate: '30deg'}]
        },
      }
    });
    const { dataSelectedCategory} = this.props.data;
    let sourceHero;
    let sourceHeroHand;
    if (dataSelectedCategory && dataSelectedCategory.selectedCategory) {
      arrCategory.map((item, index) => {
        if (item === dataSelectedCategory.selectedCategory) {
          sourceHero = imagesHeroesArr[index].hero;
          sourceHeroHand = imagesHeroesArr[index].hand;
        }
      });
    } else {
      sourceHero = imagesHeroesArr[1].hero;
      sourceHeroHand = imagesHeroesArr[1].hand;
    }
    return (
      <View >
        <TouchableOpacity
          style={styles.logoContainer}
        >
          <Animatable.View
            animation="rotateHand"
            iterationCount='infinite'
            direction="normal"
            duration={11000}
            style={styles.handContainer}
          >
            <Image
              style={styles.handImage}
              source={sourceHeroHand}
            />
          </Animatable.View>
          <Image
            style={styles.mainImage}
            source={sourceHero}

          />
        </TouchableOpacity>
      </View>
    );
  }
}
const ConnectedComponent = connect(
  (state) => {
    return {data: state.data};
  },
  {  }
)(HandShake);

export default ConnectedComponent;
