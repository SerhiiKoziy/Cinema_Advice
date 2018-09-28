import React, { PureComponent } from "react";
import ImagePreload from "../../components/ImagePreload";
import FastImage from 'react-native-fast-image';

import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from "react-native";

const newsBgBig = require("../../../resources/default.jpg");
const category_BTN = require("../../../resources/default.jpg");
const shadow_IMAGE = require("../../../resources/default.jpg");
const mock_IMAGE_BIG = require("../../../resources/default.jpg");

const styles = StyleSheet.create({
  mainListContainer:{
    alignItems:'center',
  },
  listContainer:{
    width: '100%',
    maxWidth: 375,
    flexWrap: 'wrap',
    flexDirection: "row",
    alignContent: 'flex-start',
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 20,
  },
  //FIRST ITEM IN LIST
  firstItemWrapper:{
    width:'100%',
    alignItems: 'center',
  },
  firstItemContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 17,
    width: '100%',
    maxWidth: 375,
    maxHeight: 260,
    paddingBottom: 40,

  },
  firstImageWr:{
    width: '100%',
    height: 195,
  },
  firstListImage:{
    width: '100%',
    height: '100%',
    resizeMode: Image.resizeMode.contain
  },
  fastFirstListImage:{
    width: '100%',
    height: '100%',
  },
  firstListImageBg: {
    position: "absolute",
    width: '100%',
    height: '101%',
    resizeMode: Image.resizeMode.contain
  },
  firstTextContainer:{
    alignItems: 'center',
    //marginTop: 10,
    marginBottom: 10,
  },
  firstMainTitle:{
    fontSize: 17,
    lineHeight: 22,
    height:22,
    fontWeight: '700',
    fontFamily: 'Arial',
    color: '#444444',
    marginTop: 5,
  },
  firstDescTitle:{
    fontSize: 17,
    fontWeight: '400',
    fontFamily: 'Arial',
    lineHeight: 18,
    color: '#444444',
    marginTop: 2,
  },



  // OTHER ITEMS
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 17,
    width: '50%',
    maxWidth: '50%',
    minWidth: 100,
    height: 120,
    paddingBottom: 30,
    marginTop: 20
  },
  textContainer:{
    alignItems: 'center',
  },
  imageCont:{

  },
  listImage: {
    position:'absolute',
    width: '100%',
    height: '100%',
    resizeMode: Image.resizeMode.contain
  },
  listImageBg: {
    position: "absolute",
    width: '100%',
    height: '100%',
    resizeMode: Image.resizeMode.contain
  },
  touchImage:{
    height:92
  },


  mainTitle:{
    fontSize: 17,
    lineHeight: 22,
    height:22,
    marginTop: 5,
    fontWeight: '700',
    fontFamily: 'Arial',
    color: '#444444'
  },
  descTitle:{
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Arial',
    lineHeight: 18,
    color: '#444444',
  },

  //category TITLE
  categoryTitle:{
    position: 'relative',
    width: '100%',
    height: 26,
    alignItems: 'center',
  },
  shedowImage:{
    position: 'absolute',
    width: '100%',
    top:-2,
    height: 10,
    resizeMode: Image.resizeMode.contain
  },
  categoryBTN: {
    height: 26,
    alignItems: 'center',
    width: 120,
  },
  categoryBtn:{
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    maxWidth: 120,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  categoryBtnText:{
    color: '#fff',
    fontWeight: '700',
    fontFamily: 'Arial',
    fontSize: 17,
    paddingTop: 3,
    backgroundColor: 'rgba(52, 52, 52, 0.0)'
  }
});

export default class ListNews extends PureComponent {
  renderTitle(data) {
    return(
      <View style={styles.categoryTitle}>
        <Image source={shadow_IMAGE} style={styles.shedowImage} />
        <View style={styles.categoryBTN}>
          <Image source={category_BTN} style={styles.categoryBtn} />
          <Text style={styles.categoryBtnText}>{data[0].episodesTitle}</Text>
        </View>
      </View>
    )
  }
  renderLargeItem(item){
    const selectedCategory = this.props.selectedCategory;
    let url = item.src + '/222';
    let uri = { uri: url };
    return (
      <View key={item.text} style={styles.firstItemWrapper}>
        <View key={item.text} style={styles.firstItemContainer}>
          <View style={styles.firstImageWr}>
            <TouchableOpacity
              onPress={() => this.props.openVideo(item)}
            >
              <Image source={mock_IMAGE_BIG} style={styles.firstListImageBg} />
              {/*<Image source={uri} style={styles.firstListImageBg} />*/}
              {/*<ImagePreload*/}
                {/*source={uri}*/}
                {/*loadKey={ selectedCategory }*/}
                {/*style={styles.firstListImage}*/}
              {/*/>*/}

              <FastImage
                style={styles.fastFirstListImage}
                source={{
                  uri: url,
                  headers: { Authorization: selectedCategory },
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Image source={newsBgBig} style={styles.firstListImageBg} />
            </TouchableOpacity>
          </View>

          <View style={styles.firstTextContainer}>
            <Text style={styles.firstMainTitle}>{item.text}</Text>
            <Text style={styles.firstDescTitle}>{item.nameChannel}</Text>
          </View>
        </View>
      </View>
    );
  }
  renderList(data) {
    const selectedCategory =  this.props.selectedCategory;
    return data.map( (item, index )=> {
      let url = item.src + '/100';
      let isSecond = index % 2 === 0;

      if(index === 0){
        this.renderLargeItem(item)
      }else if( index < 5){
        let uri = { uri: url };
        return (
          <View
            key={item.text}
            style={[
              styles.itemContainer,
              { paddingRight: isSecond ? 0 : 5},
              { paddingLeft: isSecond ? 5 : 0}
            ]}
          >
            <View style={styles.imageCont}>
              <TouchableOpacity
                style={styles.touchImage}
                onPress={() => this.props.openVideo(item)}
              >
                <Image source={mock_IMAGE_BIG} style={styles.listImageBg} />
                {/*<Image source={uri} style={styles.listImage} />*/}
                {/*<ImagePreload*/}
                  {/*source={uri}*/}
                  {/*loadKey={ selectedCategory }*/}
                  {/*style={styles.listImage}*/}
                {/*/>*/}
                <FastImage
                  style={styles.fastFirstListImage}
                  source={{
                    uri: url,
                    headers: { Authorization: 'someAuthToken' },
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />

                <Image source={newsBgBig} style={styles.listImageBg} />
              </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.mainTitle}>{item.text}</Text>
              <Text style={styles.descTitle}>{item.nameChannel}</Text>
            </View>
          </View>
        );
      }else if( index === 5 ){
        this.renderLargeItem(item)
      }
    })
  }
  render() {
    const data = this.props.items || [];
    return (
      <View style={styles.mainListContainer}>
        <View style={styles.listContainer}>
          {this.renderTitle(data)}
          {this.renderList(data)}
        </View>
      </View>
    );
  }
}
