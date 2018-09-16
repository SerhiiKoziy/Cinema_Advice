import React, { Component } from "react";
import { connect } from 'react-redux';
import { saveSelectedSerials, saveSelectedEpisode } from '../../actions';
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
import { Actions } from 'react-native-router-flux';


import OVERLAY from "../../../resources/channel_overlay.png";
const shadow_IMAGE = require("../../../resources/bgShedow.png");
const mock_IMAGE_BIG = require("../../../resources/mockImage.png");

const styles = StyleSheet.create({
  mainContainer:{
    //flex: 1,
    height:'100%',
    backgroundColor: '#FFF',
    overflow: 'hidden'
  },
  wrScroll:{
  },
  containerScroll:{
    paddingTop: 20,
  },
  container: {
    width: '100%',
    minHeight: "100%",
    alignItems: 'center',

  },
  imageWr:{
    height: 135,
    width: '100%',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingTop: 0,

  },
  mainImageChannelWr:{
    height: 120,
    width: 210,
    marginTop: 5,
  },
  mainImageChannel:{
    width: '100%',
    height:'100%',
    resizeMode: Image.resizeMode.contain
  },
  categoryTitle:{
    width: '100%',
    maxWidth: 335,
    height: 8,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.0)',
    zIndex: 100,

  },
  shadowImage:{
    position: 'absolute',
    width: '100%',
    top:0,
    height: 10,
    resizeMode: Image.resizeMode.contain
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
    width: "100%",
  },
  imageContainer:{
    height: 195,
    width: "100%",
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
    paddingTop: 1,
    resizeMode: Image.resizeMode.contain
  },
  descText:{
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '500',
    fontFamily: 'Arial',
    height: 43,
    textAlign: 'center',
    marginTop: 5,
  },

  // HEADER
  headerContainer:{
    height: 65,
    width: '100%',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#13B7FF',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'

  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: 17,
    lineHeight: 22,
  },
  leftHeaderContainer:{
    width: 70,
    justifyContent: 'flex-start'
  },
  rightHeaderContainer:{
    width: 70,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  rightButton:{
    height: 25,
    width: 25,
  },

});

class Episodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: false,
      episodesArr: [],
      heightImage: 120,
      heightImageWr: 135,
      time: false,
      dataSelectedSerials : {
        episodesArr: [],
        channelColor: '',
        sourceChannelLogo: ''
      }
    };
  }


  // shouldComponentUpdate(nextProps){
  //   // let next = nextProps.data.dataSelectedChannel !== this.props.data.dataSelectedChannel;
  //   // let nextResult = nextProps.data.dataSelectedSerials.sourceChannelLogo !== this.props.data.dataSelectedSerials.sourceChannelLogo;
  //   // return next || nextResult;
  //   return true
  // }
  // componentWillUnmount(){
  //   this.setState({time: false})
  // }
  componentDidMount() {
    const { dataSeries, dataSelectedChannel } = this.props.data;

    let seriesFiltered = dataSeries.find( item => item.channel.replace(" ", "") === dataSelectedChannel.replace(" ", ""));
    let arrPromises = [];
    seriesFiltered.data.map((item) => {
      if (item && item.link) {
        arrPromises.push(
          Api.episodes(item.link).then(item => {
            return item;
          })
        )
      }
    });

    Promise.all(arrPromises)
      .then(episodes => {
        // arr of all episodes
        let arr = [];
        let channelColor = episodes[0].attributes.channel.color;
        let channelName = '';
        let sourceChannelLogo = '';
        episodes.map((item) => {
          if(item){
            let channelLogoTemplate = item.attributes.channel.logo[0].template;
            let channelKey = item.attributes.channel.logo[0].key;
            sourceChannelLogo = channelLogoTemplate
              .replace('{key}', channelKey)
              .replace('{width}', '200')
              .replace('{height}', '200')
              .replace('http', 'https');
            //channelColor = item.attributes.channel.color;
            channelName = item.attributes.channel.name;

            arr.push({
              title: item.attributes.title,
              text: item.attributes.title,
              source: item.attributes.images[0].url,
              sourceChannelLogo: sourceChannelLogo,
              arrSeasons: item.allEpisodes,
              channelColor: channelColor,
              channelName: channelName,
            });
          }
        });

        this.props.saveSelectedSerials(
          {
            episodesArr: arr,
            channelName: channelName,
            channelColor: channelColor,
            sourceChannelLogo: sourceChannelLogo,
            numberTab: this.props.name
          }
        );
      })
      .catch(e => console.log('episodes error', e));
    this.returnTime()
  }
  returnTime(){
    setTimeout(() => {
      this.setState({time: true})
    }, 1000)
  }
  handleEpisode(episodeName, channelColor){

    if(this.props.name === 'episodes_1'){
      Actions.showPage_1({title: episodeName, bgColor:channelColor})
    }else{
      Actions.showPage_2({title: episodeName, bgColor:channelColor})
    }
    this.props.saveSelectedEpisode(episodeName);
  }
  renderItems(item, index) {
    let sourceImage = item.source + '/222';
    let uri = { uri: sourceImage } || '';
    return (
      <TouchableOpacity
        key={`${item.title + index}`}
        style={[styles.itemContainer]}
        onPress={() => this.handleEpisode(item.title, item.channelColor)}
      >
        <View style={[styles.imageContainer]}>
          <Image source={mock_IMAGE_BIG} style={styles.itemImageBg} />
          <Image source={uri} style={styles.itemImage} />
          <Image source={OVERLAY} style={styles.itemImageBg} />
        </View>
        <Text style={ styles.descText}>{item.title}</Text>
      </TouchableOpacity>
    );
  }
  handleScroll(event) {
    let position = event.nativeEvent.contentOffset.y;
    if(position > 41 && position < 85){
      let heightImage = 120 - (position - 41);
      let heightImageWr = 135 - (position - 41);
      this.setState({
        heightImage: heightImage,
        heightImageWr: heightImageWr,
      })
    }else if(position > 85) {
      this.setState({
        heightImage: 76,
        heightImageWr: 91,
      })
    }else if(position <= 41) {
      this.setState({
        heightImage: 120,
        heightImageWr: 135,
      })
    }

  }
  render() {
    const { heightImage, heightImageWr } = this.state;
    let episodesArr = [];
    if(this.props.name === 'episodes_1'){
      episodesArr = this.props.data.dataSelectedSerialsFirstTab.episodesArr;
    }else if(this.props.name === 'episodes_2'){
      episodesArr = this.props.data.dataSelectedSerialsSecondTab.episodesArr;
    }
    let uri = episodesArr.length > 0 ? { uri: episodesArr[0].sourceChannelLogo} : '';
    return(
      <View style={{flex: 1}}>
        {
          episodesArr && episodesArr.length > 0 && (
            <View style={[styles.mainContainer, this.state.time ? {} : {height: 0}]}>
              <View style={[styles.imageWr, { height: heightImageWr }]}>
                <View style={[styles.mainImageChannelWr, { height: heightImage }]}>
                  <Image source={uri} style={styles.mainImageChannel}/>
                </View>
                <View style={styles.categoryTitle}>
                  <Image source={shadow_IMAGE} style={styles.shadowImage} />
                </View>
              </View>
              <ScrollView
                onScroll={this.handleScroll.bind(this)}
                scrollEventThrottle={16}
                style={styles.containerScroll}
              >
                <View style={styles.itemsList}>
                  {
                    episodesArr.map((item, index ) => {
                        return this.renderItems(item, index)
                      }
                    )
                  }
                </View>
              </ScrollView>
            </View>
          )
        }
        {
          ( !this.state.time && episodesArr && episodesArr.length === 0) && (
            <Loading text={"Please wait"} />
          )
        }
      </View>
    )
  }
}
const ConnectedComponent = connect(
  (state) => {
    return { data: state.data };
  },
  { saveSelectedSerials, saveSelectedEpisode }
)(Episodes);

export default ConnectedComponent;
