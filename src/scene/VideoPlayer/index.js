import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Animated,
  Easing
} from "react-native";

import Video from 'react-native-video';
import Orientation from 'react-native-orientation';
import { Actions } from 'react-native-router-flux';

import LightVideo from "../../../resources/video/video.mp4";

import PLAYER_PLAY from "../../../resources/player/play.png";
import PLAYER_PAUSE from "../../../resources/player/pause.png";
import PLAYER_REPLAY from "../../../resources/player/replay.png";
import PLAYER_CLOSE from "../../../resources/player/close.png";

import FRIENDLY_HERO from "../../../resources/player/buddy-friendly-normal.png";
import BOUNCY_HERO from "../../../resources/player/buddy-bouncy-normal.png";
import CHEEKY_HERO from "../../../resources/player/buddy-cheeky-normal.png";
import CUTE_HERO from "../../../resources/player/buddy-cute-normal.png";
import COOL_HERO from "../../../resources/player/buddy-cool-normal.png";
import GEEK_HERO from "../../../resources/player/buddy-geek-normal.png";
import SHADOW_TOP from "../../../resources/player/shade-top.png";
import SHADOW_BOTTOM from "../../../resources/player/shade-bottom.png";
import PROGRESS_STATUS from "../../../resources/player/progress.png";


const imagesHeroesArr = [
  {
    hero: BOUNCY_HERO,
  },
  {
    hero: CHEEKY_HERO,
  },
  {
    hero: COOL_HERO,
  },
  {
    hero: CUTE_HERO,
  },
  {
    hero: FRIENDLY_HERO,
  },
  {
    hero: GEEK_HERO,
  },
];

const styles = StyleSheet.create({
  mainVideoWr:{
    flex: 1,
    backgroundColor: '#FFF'
  },
  container: {
    flex: 1,
    //paddingTop: 250,
  },
  mainButton: {
  },
  durationWr:{
    width: 40,
    backgroundColor: "rgba(0, 0, 0, 0.0)"
  },
  duration: {
    color: "#FFF",
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 22,
    backgroundColor: "rgba(0, 0, 0, 0.0)"
  },
  //top menu
  infoContainer:{
    position:'absolute',
    left: 0,
    top: 35,
    height: 45,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    zIndex: 100,
  },
  infoBox:{
    width: '33%',
    flexDirection: 'row',
  },
  infoNameChanel:{
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#000',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 17,
    paddingLeft: 17,
    borderRadius: 8,
  },
  infoNameEpisode:{
    backgroundColor: 'rgba(255,255,255,0.0)',
  },
  infoNameChanelText:{
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: 17,
    lineHeight: 22,
  },
  infoNameSeriesText:{
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
  },
  infoNameEpisodesText:{
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'center',
  },
  // controls
  controlsPlay:{
    height:56,
    width: 56,
  },
  controlClose:{
    height:44,
    width: 44,
  },
  controlImageClose:{
    height:44,
    width: 44,
  },
  video:{
    width: "100%",
    height:'100%'
  },

  controls: {
    //backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 48,
    left: 0,
    bottom: 27,
    right: 0,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingRight: 20,
    paddingLeft: 20,
    zIndex: 100
    //paddingHorizontal: 10,
  },
  //control lib

  progressWr:{
    width: 445,
    marginTop: 22,
  },
  progressContainerInside:{
    width: 450,
    height: 22,
    position: "absolute",
    zIndex: 150,
    bottom: 0,
    right: 0,
  },
  progressWrInside:{
    width: '100%',
    height: 22,
    position: "absolute",
    zIndex: 150
  },
  progressViewInside:{
    width: 445,
    height: 22,
    backgroundColor: 'rgba(43,23,23,0.0)',
  },
  // control custom
  customControl:{
    bottom: 0,
    right: 0,
    position: "absolute",
    width: '100%',
    height: 22,
    zIndex: 101,
  },
  customControlWr:{
    height: 22,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 16,
  },
  customControlStatus:{
    height: 22,
    backgroundColor: 'rgba(43,23,255,0.7)',
    borderRadius: 16,

  },
  controlFace:{
    position: "absolute",
    right: -35,
    bottom: -20,
    width: 70,
    height: 84
  },
  progressOverflowWr:{
    position: "absolute",
    width: '100%',
    top:0,
    right: 0,
    overflow: 'hidden',
    height: 22,
    borderRadius: 16,
  },
  progressStatus:{
    position: "absolute",
    top:0,
    right: 0,
    width: 450,
    height: 22,
  },
  shadowContainerTop:{
    position: "absolute",
    top:-5,
    right: 0,
    width: '100%',
    height: 100,
    zIndex: 10,
  },
  shadowContainerBottom:{
    position: "absolute",
    bottom:0,
    right: 0,
    width: '100%',
    height: 130,
    zIndex: 0,
  },
  shadowImage:{
    width: '100%',
    height: 130,
    resizeMode: Image.resizeMode.contain
  },
  shadowImageBottom:{
    position: "absolute",
    bottom: -18,
    right: 0,
    width: '100%',
    height: 130,
    resizeMode: Image.resizeMode.contain
  }

});

function secondsToTime(time) {
  return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;
}

 class VideoPlayerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false,
      progress: 0,
      duration: 0,
      replay: false,
      menuOpen: true,
      timeMenuCheck: false
    };
    this.animatedValue = new Animated.Value(0);
  }
  componentWillMount(){
    Orientation.lockToLandscape();
  }
  componentDidMount(){
     setTimeout(() =>{
       this.setState({menuOpen: false});
       this.animationTopCose();
     }, 5000);
  }
  componentWillUnmount() {
    Orientation.lockToPortrait();
    //Orientation.removeOrientationListener(this._orientationDidChange);
  }
  handleMainButtonTouch = () => {
    if (this.state.progress >= 1) {
      this.player.seek(0);
    }

    this.setState(state => {
      return {
        paused: !state.paused,
        menuOpen: !state.paused,
        replay: false,
      };
    });
  };

  handleProgressPress = e => {
    const position = e.nativeEvent.locationX;
    const progress = (position / 450) * this.state.duration;
    const isPlaying = !this.state.paused;
    this.player.seek(progress);
  };

  handleProgress = progress => {
    this.setState({
      progress: progress.currentTime / this.state.duration,
      progressAll: progress.currentTime
    });
  };

  handleEnd = () => {
    this.setState({ paused: true, replay: true, menuOpen: true });
  };

  handleLoad = meta => {
    this.setState({
      duration: meta.duration,
    });
  };
  handleOpenVideoMenu = () => {
    let time = this.state.timeMenuCheck
    this.setState({
      menuOpen: true,
      timeMenuCheck: true,
    });
    this.animationTopOpen();
    if(!time) {
      setTimeout(() => {
        this.setState({
          menuOpen: false,
          timeMenuCheck: false
        });
        this.animationTopCose();
      }, 5000);
    }
  };

  animationTopOpen() {
    Animated.timing(this.animatedValue, {
      toValue: 100,
      easing: Easing.linear,
      duration: 500
    }).start()
  }
   animationTopCose() {
     // Animated.timing(this.animatedValue, {
     //   toValue: 0,
     //   easing: Easing.linear,
     //   duration: 500
     // }).start()
   }

  render() {
    let allTime = secondsToTime(Math.floor(this.state.duration));
    let timeToFinish = secondsToTime(Math.floor(this.state.progress * this.state.duration));

    let {dataSelectedCategory, } = this.props.data;
    let sourceHero;
    const arrCategory = [
      'Younger Girls',
      'Middle Boys',
      'Older Boys',
      'Middle Girls',
      'Younger Boys',
      'Older Girls',
    ];
    if(dataSelectedCategory){
      arrCategory.map((item, index) => {
        if(item === dataSelectedCategory.selectedCategory){
          sourceHero = imagesHeroesArr[index].hero;
        }
      });
    }else{
      sourceHero = imagesHeroesArr[1].hero;
    }

    let per = (Math.floor(this.state.progress * 100)) + '%';
    const title =  this.props.title || this.props.data.video.title ;
    const channel =  this.props.channel || this.props.data.video.channel ;

    return (
      <View style={styles.mainVideoWr}>
        <View style={styles.container}>

          {
            //(this.state.replay || this.state.paused) &&
            this.state.menuOpen && (
              <View style={[styles.shadowContainerTop, {top: -2}]}>
                <Image source={SHADOW_TOP} style={styles.shadowImage} />
              </View>
            )
          }

          {
            //(this.state.replay || this.state.paused) &&
            this.state.menuOpen && (
              <View style={styles.infoContainer}>
                <View style={[styles.infoBox, {justifyContent: 'flex-start'}]}>
                  {/*<View style={styles.infoNameChanel}>*/}
                  {/*<Text style={styles.infoNameChanelText}>Name Chanel</Text>*/}
                  {/*</View>*/}
                </View>
                <View style={[styles.infoBox, {justifyContent: 'space-around'}]}>
                  <View style={styles.infoNameEpisode}>
                    <Text style={styles.infoNameSeriesText}>{ title }</Text>
                    {/*<Text style={styles.infoNameSeriesText}>Series</Text>*/}
                    <Text style={styles.infoNameEpisodesText}> { channel }</Text>
                  </View>
                </View>
                <View style={[styles.infoBox, {justifyContent: 'flex-end'}]}>
                  <View style={styles.controlClose}>
                    <TouchableWithoutFeedback onPress={() => Actions.pop()}>
                      <Image source={PLAYER_CLOSE} style={styles.controlImageClose} />
                    </TouchableWithoutFeedback>
                  </View>
                </View>
              </View>
            )
          }
          <TouchableWithoutFeedback onPress={this.handleOpenVideoMenu}>
            <Video
              paused={this.state.paused}
              source={LightVideo}
              style={styles.video}
              resizeMode="contain"
              onLoad={this.handleLoad}
              onProgress={this.handleProgress}
              onEnd={this.handleEnd}
              ref={ref => {
                this.player = ref;
              }}
            />
          </TouchableWithoutFeedback>

          <View style={styles.controls}>
            {
              this.state.paused && !this.state.replay && (
                <TouchableWithoutFeedback
                  onPress={this.handleMainButtonTouch}
                >
                  {/*<Icon name={!this.state.paused ? "pause" : "play"} size={30} color="#FFF" />*/}
                  <Image source={PLAYER_PLAY} style={styles.controlsPlay} />
                </TouchableWithoutFeedback>
              )
            }
            {
              !this.state.paused && !this.state.replay && (
                <TouchableWithoutFeedback onPress={this.handleMainButtonTouch}>
                  <Image source={PLAYER_PAUSE} style={styles.controlsPlay} />
                </TouchableWithoutFeedback>
              )
            }
            {
              this.state.replay && (
                <TouchableWithoutFeedback onPress={this.handleMainButtonTouch}>
                  <Image source={PLAYER_REPLAY} style={styles.controlsPlay} />
                </TouchableWithoutFeedback>
              )
            }
            <Text style={styles.duration}>
              {allTime}
            </Text>
            <View style={styles.progressWr}>
              <View style={styles.customControl}>
                <View style={styles.customControlWr}>
                  <View style={[styles.customControlStatus, {width: per}]}>
                    <View style={[styles.progressOverflowWr]}>
                      <Image source={PROGRESS_STATUS} style={styles.progressStatus} />
                    </View>

                    <Image source={sourceHero} style={styles.controlFace} />
                  </View>
                </View>
              </View>
              <View style={styles.progressContainerInside}>
                <TouchableWithoutFeedback
                  style={styles.progressWrInside}
                  onPress={this.handleProgressPress}
                >
                  <View style={styles.progressViewInside}/>
                </TouchableWithoutFeedback>
              </View>
            </View>
            <View style={styles.durationWr}>
              <Text style={styles.duration}>
                {timeToFinish}
              </Text>
            </View>

          </View>
          {
            // (this.state.replay || this.state.paused) &&
            this.state.menuOpen && (
              <View style={styles.shadowContainerBottom}>
                <Image source={SHADOW_BOTTOM} style={styles.shadowImageBottom} />
              </View>
            )
          }
        </View>
      </View>
    )
  }
}
const ConnectedComponent = connect(
  (state) => {
    return { data: state.data };
  },
  {  }
)(VideoPlayerComponent);

export default ConnectedComponent;
