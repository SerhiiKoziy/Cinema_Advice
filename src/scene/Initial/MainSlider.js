import React, { PureComponent } from "react";
import ImagePreload from "../../components/ImagePreload";
import FastImage from 'react-native-fast-image';

import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";

const mock_IMAGE = require("../../../resources/mockChan.png");

const styles = StyleSheet.create({
  mainListContainer:{
    alignItems: 'center',
  },
  listContainer:{
    width: '100%',
    maxWidth: 375,
    marginBottom: 20,
  },
  wightLine:{
    position: 'absolute',
    left: 0,
    bottom: 2,
    height: 4,
    width: '100%',
    backgroundColor: '#fff'
  },
  itemContainer: {
    width: 105,
    height: 105,
    marginRight: 10,
    marginTop: 10,
  },
  itemContainerSec:{
    width: '100%',
    height: '100%',
  },
  listImage: {
    width: 105,
    height: 105,
    resizeMode: Image.resizeMode.contain
  },
  fastListImage: {
    width: 105,
    height: 105,
  },
  listImageBg: {
    position: "absolute",
    width: '100%',
    height: '100%',
  },

});

export default class ListHeroes extends PureComponent {
  render() {
    const listHeroes = this.props.listHeroes;
    const selectedCategory =  this.props.selectedCategory;
    let arr = listHeroes.map(item => {if(item.image){return item}});

    return (
      <View style={styles.mainListContainer}>
        <View style={styles.listContainer}>
          <ScrollView
            horizontal={true}
            style={{ height: 240, maxWidth: 375, paddingLeft: 20 }}
          >
            <View style={{width: 720, height: 240, flexWrap: 'wrap'}}>
              {
                  arr.map((item, index) => {
                    let url = item && item.image ? item.image.url + '/100' : '';
                    let uri = { uri: url };
                    if(item && item.channel && item.image.url && index < 15){
                      item.image.url.replace('http', 'https').replace('httpss', 'https');
                      return (
                        <View
                          key={index + 'hero'}
                          style={ styles.itemContainer}
                        >
                          <TouchableOpacity
                            style={ styles.itemContainerSec}
                            onPress={() => this.props.tapAction(item.channel, item.episodeName, item.bgColor)}
                          >
                            <Image source={mock_IMAGE} style={styles.listImageBg} />
                            {/*<ImagePreload*/}
                              {/*source={ uri }*/}
                              {/*loadKey={ selectedCategory }*/}
                              {/*style={ styles.listImage }*/}
                            {/*/>*/}
                            <FastImage
                              style={styles.fastListImage}
                              source={{
                                uri: url,
                                headers: { Authorization: selectedCategory },
                                priority: FastImage.priority.normal,
                              }}
                              resizeMode={FastImage.resizeMode.contain}
                            />
                          </TouchableOpacity>
                        </View>
                      );
                    }
                  })
              }
            </View>
          </ScrollView>
          <View style={styles.wightLine}/>
        </View>
      </View>
    );
  }
}
