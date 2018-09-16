import React, { PureComponent } from "react";
import FastImage from 'react-native-fast-image';
import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({
  promoWr:{
    position: 'relative',
    width: '100%',
    height: 210,
    marginBottom: 10,
    alignItems:'center',
    overflow: 'hidden'
  },
  imageStyle:{
    width: "100%",
    maxWidth: "100%",
    height:212,
    //resizeMode: Image.resizeMode.contain,
  },
  imageBg: {
    position: "absolute",
    width: '100%',
    height: '101%',
    resizeMode: Image.resizeMode.contain
  },
  promoTextWr: {
    position: 'absolute',
    left: 0,
    top: 70,
    width: '50%',
    height: 90,
    paddingLeft: 15,
    paddingTop: 10,
    paddingRight: 15,
    backgroundColor:  'rgba(255,255,255,0.9)',
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
  },
  channelNameText: {
    fontFamily: 'Arial',
    fontSize: 15,
    lineHeight: 17,
    color: '#343434'
  },
  seriesNameText: {
    fontFamily: 'Arial',
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    color: '#39393A'
  },
});

export default class PromoBanner extends PureComponent {
  render() {
    const {promoChannel, promoTitle, promoColor, promoImage} = this.props.selectPromoData;
    let title = promoTitle.length > 19 ? promoTitle.substring(0, 18) + '...' : promoTitle;
    let url = promoImage.url.replace('http', 'https').replace('httpss', 'https') + '/222';
    let uri = { uri: url};
    const selectedCategory = this.props.selectedCategory;
    return (
      <TouchableOpacity
        style={ styles.itemContainerSec}
        onPress={() => this.props.tapAction(promoChannel, promoTitle, promoColor)}
      >
        <View style={styles.promoWr}>
            {/*<Image source={uri} style={styles.imageStyle}/>*/}
            <FastImage
              style={styles.imageStyle}
              source={{
                uri: url,
                headers: { Authorization: selectedCategory },
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View style={styles.promoTextWr}>
              <Text style={styles.channelNameText}>{promoChannel}</Text>
              <Text style={styles.seriesNameText}>{title}</Text>
            </View>
        </View>
      </TouchableOpacity>
    );
  }
}
