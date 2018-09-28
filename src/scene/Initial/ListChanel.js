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

const DATA = [
  { text: "Exmpl 1", src: "", key: "" },
  { text: "Exmpl 2", src: "", key: "" },
  { text: "Exmpl 3", src: "", key: "" }
];

const empty_IMAGE = require("../../../resources/default.jpg");
const category_BTN = require("../../../resources/default.jpg");
const shedow_IMAGE = require("../../../resources/default.jpg");

const styles = StyleSheet.create({
  mainListContainer:{
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  listContainer:{
    width: '100%',
    maxWidth: 375,
    flexWrap: 'wrap',
    flexDirection: "row",
    alignContent: 'flex-start',
    marginTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  itemRow:{
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 14,
    width: '33%',
    maxWidth: 105,
    height: 105,
  },
  listImage: {
    width: '100%',
    height: '100%',
    resizeMode: Image.resizeMode.contain
  },
  fastListImage: {
    width: '100%',
    height: '100%',
  },
  listImageBg: {
    position: "absolute",
    width: '100%',
    height: '100%',
    resizeMode: Image.resizeMode.contain
  },

  //category Title
  categoryTitle:{
    position: 'relative',
    width: '100%',
    height: 26,
    alignItems: 'center',
    /*borderColor: '#ccc',
    borderStyle: 'solid',
    borderTopWidth: 1*/
  },
  titleLine:{
    width: '80%',
    borderColor: 'rgba(255,255,255,0.9)',
    borderStyle: 'solid',
    borderTopWidth: 1
  },
  shedowImage:{
    //resizeMode,
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
    position: 'absolute',
    width: '100%',
    height: '100%',
    maxWidth: 220,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  categoryBtnText:{
    color: '#fff',
    fontWeight: '700',
    //fontFamily: 'Arial',
    fontSize: 17,
    paddingTop: 3,
    backgroundColor: 'rgba(52, 52, 52, 0.0)'
  }
});

export default class ListChanel extends PureComponent {
  constructor(props){
    super(props);
    this.state = {}
  }
  renderTitle() {
    return(
      <View style={styles.categoryTitle}>
        {/*<View style={styles.titleLine} />*/}
        <Image source={shedow_IMAGE} style={styles.shedowImage} />
        <View style={styles.categoryBTN}>
          <Image source={category_BTN} style={styles.categoryBtn} />
          <Text style={styles.categoryBtnText}>Channels</Text>
        </View>
      </View>
    )
  }
  renderItem(item){
    let url = item.logoChannel.replace('200', '100');
    const source = item.logoChannel && { uri: url } || empty_IMAGE;
    const selectedCategory = this.props.selectedCategory;
    return(
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => this.props.tapAction(item.nameChannel, item.bgColor)}
        >
          <Image source={empty_IMAGE} style={styles.listImageBg} />
          {/*<Image source={source} style={styles.listImage} />*/}
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
    )
  }
  renderList(data) {
    return data.map((item, index) => {
      const source = item.src && { uri: item.src } || empty_IMAGE;
      if(index !== 0 && ((index + 1) % 3 === 0)){
        return (
          <View style={styles.itemRow} key={data[index].text}>
            {this.renderItem(data[index-2])}
            {this.renderItem(data[index-1])}
            {this.renderItem(data[index])}
          </View>
        );
      }else{
        return null
      }
    })
  }

  render() {
    const episodesFiltered = [];
    const {dataAllChannels, selectedCategory} = this.props;

    let dataChannelList = [];
    if(selectedCategory !== "Younger Girls" && selectedCategory !== "Younger Boys"){
      dataChannelList = dataAllChannels
    }else if(dataAllChannels){
      let filteredSelctedChannel = [];
      let selectChannels = ["Nick Jr"];

      dataAllChannels.map(channel => {
        selectChannels.map(item => {
          if(channel.nameChannel === item){
            filteredSelctedChannel.push(channel);
          }
        })
      });
      dataChannelList = filteredSelctedChannel;
    }

    let selectDataChannelList = [];
    if(dataChannelList.length === 0 && episodesFiltered.length > 0){
      selectDataChannelList.push(episodesFiltered[0]);
      episodesFiltered.map(item => {
        let filterArr = selectDataChannelList.filter(newItem => item.nameChannel === newItem.nameChannel)
        if(filterArr.length === 0){
          selectDataChannelList.push(item);
        }
      });
    }else{
      selectDataChannelList = episodesFiltered;
    }

    return (
      <View style={styles.mainListContainer}>
        <View style={styles.listContainer}>
          {this.renderTitle()}
          {this.renderList(dataChannelList)}
        </View>
      </View>
    );
  }
}
