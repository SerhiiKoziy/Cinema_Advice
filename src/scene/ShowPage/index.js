import React, { Component } from "react";
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity
} from "react-native";
import Api from "../../api/api";
import Loading from "../../components/loading.js";
import { saveSelectedEpisodes, saveSelectedEpisode } from '../../actions/index.js';

import SERIES_BTN from "../../../resources/series-btn.png";
const SHADOW_IMAGE = require("../../../resources/bgShedow.png");
const mock_IMAGE_BIG = require("../../../resources/mockImage.png");
import CATEGORY_BTN from "../../../resources/seriesCategoryBtn.png";
import OVERLAY from "../../../resources/newsBgBig.png";

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  wrScroll:{
  },
  containerScroll:{
    //paddingTop: 20,

  },
  container: {
    width: '100%',
    minHeight: "100%",
    //height: '60%',
    alignItems: 'center',

  },
  posterContainer:{
    width: '100%',
    justifyContent: 'space-around',
  },
  posterWr:{
    height: 200,
    width: '100%',
    maxWidth: 375,
    alignItems: 'flex-start',

  },
  posterImageChannel:{
    height: 200,
    width: '100%',
  },
  imageWr:{
    height: 90,
    width: '100%',
    alignItems: 'center',
    justifyContent:'space-between',

  },
  mainImageChannel:{
    height: '100%',
    width: '100%',
    maxWidth: 160,

    resizeMode: Image.resizeMode.contain
  },
  shadowImage:{
    position: 'absolute',
    width: '100%',
    top:-2,
    height: 10,
    resizeMode: Image.resizeMode.contain
  },

  seriesContainer:{
    justifyContent:'center',
    marginBottom: 30,
  },
  overlayLine:{
    position: 'absolute',
    left: 0,
    bottom: 2,
    height: 4,
    width: '100%',
    backgroundColor: '#fff'
  },

  itemsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    maxWidth: 375,
    paddingLeft: 20,
    paddingRight: 20,
  },
  itemContainer: {
    width: 160,
    marginRight: 10,
  },
  imageContainer:{
    height: 110,
  },
  descText:{
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '500',
    fontFamily: 'Arial',
    height: 43,
    textAlign: 'center'
  },
  itemImage: {
    width: "100%",
    height: "100%",
    resizeMode: Image.resizeMode.contain
  },
  itemImageBg:{
    position:'absolute',
    width: "100%",
    height: "100%",
    resizeMode: Image.resizeMode.contain
  },


  //category TITLE
  categoryTitle:{
    position: 'relative',
    width: '100%',
    height: 26,
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
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
    height: 32,
    width: 120,
    alignItems: 'center',
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
  seriesBtn:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    maxWidth: 120,
    justifyContent: 'center',
    resizeMode: Image.resizeMode.contain
  },
  categoryBtnText:{
    color: '#fff',
    fontWeight: '700',
    fontFamily: 'Arial',
    fontSize: 17,
    paddingTop: 3,
    backgroundColor: 'rgba(52, 52, 52, 0.0)'
  },

  // OTHER ITEMS BLOCK
  itemContainerBlock: {
    //flexDirection: "column",
    marginBottom: 25,
    width: '50%',
    maxWidth: '50%',
    minWidth: 100,
    height: 120,
    paddingBottom: 30,

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
    height:94
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
  scrollWr:{
    maxWidth: 375,
    height: 170,
    paddingLeft: 20
  },
  scrollIn:{
    height: 170,
    flexWrap: 'wrap'
  },
  episodesWr:{
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});
//Orientation.lockToLandscape();
class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: false,
    };
  }
  // shouldComponentUpdate(nextProps){
  //   let next = this.props.title !== this.props.data.dataSelectedEpisode;
  //   let nextResult = nextProps.data.dataSelectedEpisodes.poster !== this.props.data.dataSelectedEpisodes.poster;
  //   //this.props.saveSelectedEpisode(this.props.title);
  //   return true;
  // }
  returnTime(){
    setTimeout(() => {
      this.setState({time: true})
    }, 1000)
  }
  componentDidMount() {
    const { dataSeries, dataSelectedChannel, dataSelectedEpisode } = this.props.data;
    let seriesFiltered = dataSeries.find( item => item.channel.replace(" ", "") === dataSelectedChannel.replace(" ", ""));

    let arrPromises = [];
    if(seriesFiltered && seriesFiltered.data){
      seriesFiltered.data.map((item) => {
        if (item && item.link) {
          arrPromises.push(
              Api.episodes(item.link).then(item => {
              return item;
            })
          )
        }
      });
    }

    let arr = [];
    let poster = '';
    if(seriesFiltered && seriesFiltered.data){
      seriesFiltered.data.map((item) => {
        if(item && item.text && item.text === dataSelectedEpisode){
          poster = item.src
        }
      });
    }

    Promise.all(arrPromises)
      .then(episodes => {
        // arr of all episodes

        episodes.map((item) => {
          if(item){
            let channelLogoTemplate = item.attributes.channel.logo[0].template;
            let channelKey = item.attributes.channel.logo[0].key;
            let sourceChannelLogo = channelLogoTemplate
              .replace('{key}', channelKey)
              .replace('{width}', '200')
              .replace('{height}', '200')
              .replace('http', 'https');
            let channelColor = item.attributes.channel.color;
            let channelName = item.attributes.channel.name;
            if(item.attributes.title === dataSelectedEpisode){
              arr.push({
                title: item.attributes.title,
                text: item.attributes.title,
                source: item.attributes.images[0].url,
                sourceChannelLogo: sourceChannelLogo,
                arrSeasons: item.allEpisodes,
                channelColor: channelColor,
                channelName: channelName,
                poster: poster
              });
            }
          }
        });

        this.props.saveSelectedEpisodes(
          {
            episodesArr: arr,
            poster: poster,
            numberTab: this.props.name,
          }
        );

      })
      .catch(e => console.log('episodes error', e));

    this.returnTime();
  }
  openVideo(title, channel){
    if(this.props.name === 'showPage_1'){
      Actions.videoPlayer_1({title: title, channel: channel})
    }else if(this.props.name === 'showPage_2'){
      Actions.videoPlayer_2({title: title, channel: channel})
    }
  }
  renderItemsBlock(item, index){
    let isSecond = (index + 1) % 2 === 0;
    let sourceImage =  item.attributes.images[1].url + '/100';
    let uri = { uri: sourceImage };
    return (
      <View
        key={sourceImage}
        style={[ styles.itemContainerBlock,
          { paddingRight: isSecond ? 0 : 5},
          { paddingLeft: isSecond ? 5 : 0}
        ]}
      >
        <View style={styles.imageCont}>
          <TouchableOpacity
            style={styles.touchImage}
            onPress={() => this.openVideo(item.attributes.title, item.attributes.channel.name)}
          >
            {/*<Image source={mock_IMAGE_BIG} style={styles.listImageBg} />*/}
            <Image source={mock_IMAGE_BIG} style={styles.listImageBg} />
            <Image source={uri} style={styles.listImage} />
            <Image source={OVERLAY} style={styles.listImageBg} />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.mainTitle}>{item.attributes.title}</Text>
          {/*<Text style={styles.descTitle}>{item.nameChannel}</Text>*/}
        </View>
      </View>
    );
  }
  renderSeries(episodesArr){
    return (
      episodesArr[0].arrSeasons.map((season, index) => {
        let width = season.relationships.items.data.length * 170 + 20;
        let isSlider = episodesArr[0].arrSeasons.length > 1;
        return(
          <View style={[styles.seriesContainer, !isSlider ? { marginTop: 10 } : '']} key = {width + index}>
            <View style={styles.categoryTitle}>
              <Image source={SHADOW_IMAGE} style={styles.shedowImage} />
              <View style={[styles.categoryBTN, {backgroundColor: this.props.bgColor || '#13B7FF'}]}>
                {/*<Image source={CATEGORY_BTN} style={styles.categoryBtn} />*/}
                <Image source={SERIES_BTN} style={styles.categoryBtn} />
                <Text style={styles.categoryBtnText}>{'Series'} {index + 1}</Text>

              </View>
            </View>
            {
              isSlider ? (
                <View style={styles.episodesWr}>
                  {
                    season.relationships.items.data.map((item, index ) => {
                        return this.renderItemsBlock(item, index)
                      }
                    )
                  }
                </View>
              ) : (
                <View style={styles.episodesWr}>
                  {
                    season.relationships.items.data.map((item, index ) => {
                        return this.renderItemsBlock(item, index)
                      }
                    )
                  }
                </View>
              )
            }
            <View style={styles.overlayLine} />
          </View>
        )
      })
    )
  }

  render() {
    let episodesArr = [];
    if(this.props.name === 'showPage_1'){
      episodesArr = this.props.data.dataSelectedShowPageFirstTab.episodesArr;
    }else if(this.props.name === 'showPage_2'){
      episodesArr = this.props.data.dataSelectedShowPageSecondTab.episodesArr;
    }
    if (episodesArr && episodesArr.length > 0 ) {
      let poster = episodesArr[0].poster + '/222';
      let uri = { uri: episodesArr[0].sourceChannelLogo};
      let uriPoster = { uri: poster};

      return (
        <View style={[styles.mainContainer, this.state.time ? {} : {height: 0}]}>
          <ScrollView style={styles.containerScroll}>
            <View style={styles.posterWr}>
              <Image source={uriPoster} style={styles.posterImageChannel}/>
            </View>

            <View style={styles.imageWr}>
              <Image source={uri} style={styles.mainImageChannel}/>
              {/*<View style={styles.categoryTitle}>*/}
              {/*<Image source={SHADOW_IMAGE} style={styles.shadowImage} />*/}
              {/*</View>*/}
            </View>
            {
              this.renderSeries(episodesArr)
            }
          </ScrollView>
        </View>
      );
    } else {
      return <Loading text={"Please wait"} />;
    }
  }
}
const ConnectedComponent = connect(
  (state) => {
    return { data: state.data };
  },
  { saveSelectedEpisodes, saveSelectedEpisode }
)(ShowPage);

export default ConnectedComponent;
