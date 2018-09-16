import React, { PureComponent } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView} from "react-native";
import FastImage from 'react-native-fast-image';

const category_BTN = require("../../../resources/categoryBTN.png");
const newsBgBig = require("../../../resources/newsBgBig.png");
const shedow_IMAGE = require("../../../resources/bgShedow.png");
const mock_IMAGE_BIG = require("../../../resources/mockImage.png");
const resizeMode = 'center';

const styles = StyleSheet.create({
  carouselContainer:{
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center'
  },

  carouselItemContainer: {
    display: "flex",
    flexDirection: "column",
    //padding: 10,
    maxWidth: 280,
    width: 280,
    height: 190,
    paddingBottom: 50

  },
  carouselImageCont:{
    width: 280,
    height: 190,
  },
  carouselImage: {
    maxWidth: 280,

    width: '100%',
    height: '100%',
    resizeMode
  },
  carouselImageBg: {
    position: "absolute",
    width: '100%',
    height: '100%',
    resizeMode
  },

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
    marginTop: 30,
  },
//FIRST ITEM IN LIST
  firstItemWrapper:{
    width:'100%',
    alignItems: 'center',
  },
  firstItemContainer: {
    display: "flex",
    flexDirection: "column",
   // marginTop: 17,
    width: '100%',
    maxWidth: 375,
    height: 260,
    paddingBottom: 60,

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
    marginTop: 5,
    marginBottom: 10,
  },
  firstMainTitle:{
    fontSize: 18,
    lineHeight: 20,
    height:20,
    fontWeight: '700',
    fontFamily: 'Arial',
    color: '#444444',
    marginTop: 5,
  },
  firstDescTitle:{
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Arial',
    lineHeight: 18,
    color: '#444444',
    marginTop: 5,
  },


  // OTHER ITEMS
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 25,
    width: '50%',
    maxWidth: '50%',
    minWidth: 100,
    height: 120,
    paddingBottom: 30,
    marginTop: 15,

  },
  textContainer:{
    alignItems: 'center',
    marginTop: 5,

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
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: '#444444',
    textAlign: 'center'
  },
  descTitle:{
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Arial',
    lineHeight: 18,
    height:18,
    color: '#444444',
    textAlign: 'center'
  },

  //category TITLE
  categoryTitle:{
    width: '100%',
    height: 26,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
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
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  imgBtnBlue:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: Image.resizeMode.stretch
  },
  categoryBtnText:{
    color: '#fff',
    fontWeight: '700',
    fontFamily: 'Arial',
    fontSize: 17,
    paddingTop: 3,
    backgroundColor: 'rgba(52, 52, 52, 0.0)'
  },
});

export default class ListAnimals extends PureComponent {
  componentDidUpdate(prevProps){
    if(prevProps.selectedCategory !== this.props.selectedCategory ){
      this.forceUpdate()
    }
  }

  renderTitle(data) {
    let length = data[0].channelsTitle.length;
    return(
      <View style={styles.categoryTitle}>
        <Image source={shedow_IMAGE} style={[styles.shedowImage,]} />
        <View style={[styles.categoryBTN, length > 10 ? {width: length * 10 + 30} : '']}>
          <Image source={category_BTN} style={styles.imgBtnBlue} />
          <Text style={styles.categoryBtnText}>{data[0].channelsTitle}</Text>
        </View>
      </View>
    )
  }
  renderLargeItem(item){
    let url = item.src + '/222';
    let source = { uri: url };
    return (
      <View key={item.text} style={styles.firstItemWrapper}>
        <View key={item.text} style={styles.firstItemContainer}>
          <View style={styles.firstImageWr}>
            <TouchableOpacity onPress={() => this.props.openVideo(item)}>
              <Image source={mock_IMAGE_BIG} style={styles.listImageBg} />
              <Image source={source} style={styles.firstListImage} />
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
    return data.map( (item, index )=> {
      let url = item.src + '/100';
      let isSecond = index % 2 === 0;
      const selectedCategory = this.props.selectedCategory;
      if(index === 0){
        this.renderLargeItem(item)
      }else if( index < 5){
        let uri = { uri: url };
        return (
          <View
            key={item.text}
            style={[ styles.itemContainer,
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
                {/*<ImagePreload source={{ uri: sourceImage }} loadKey={ selectedCategory } style={styles.listImage} />*/}
                {/*<Image source={uri} style={styles.listImage} />*/}
                <FastImage
                  style={styles.fastFirstListImage}
                  source={{
                    uri: url,
                    headers: { Authorization: selectedCategory },
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
