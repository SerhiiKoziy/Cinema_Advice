import React, { Component } from "react";

import { StyleSheet, Text, Image, View, Animated, Easing } from "react-native";

// import loading from "./../../resources/loading/loading.png";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: '#FFF'
  }
});

class Loading extends Component {
  state = {
    spinValue: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.spinValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
        repeat: true,
        easing: Easing.linear
      })
    ).start(); // Starts the animation
  }

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    return (
      <View style={styles.container}>
        <Animated.Image
          style={{ transform: [{ rotate: spin }] }}
          // source={loading}
        />
        <Text
          style={{ textAlign: "center", color: "purple", fontWeight: "bold" }}
        >
          {this.props.text}
        </Text>
      </View>
    );
  }
}

export default Loading;
