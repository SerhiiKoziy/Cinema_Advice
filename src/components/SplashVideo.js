
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Video from "react-native-video";
import intro from "../resources/video/intro.mov";

const styles = StyleSheet.create({
  fullScreen: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

export default class SplashVideo extends Component {
  render() {
    const endHandler = this.props.onVideoEnd;
    return (
      <Video
        repeat={false}
        onEnd={this.props.onVideoEnd}
        resizeMode="fill"
        source={require("../resources/video/intro.mov")}
        style={styles.fullScreen}
      />
    );
  }
}
