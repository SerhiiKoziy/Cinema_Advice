import React, { PureComponent } from "react";
import {
  StyleSheet,
  Image,
  View
} from "react-native";

const styles = StyleSheet.create({
  imageWr:{
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
  },
  image:{
    width: 350,
    height: 350,
    resizeMode: Image.resizeMode.contain
  }
});

export default class HeroBanner extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={styles.imageWr}
      >
        <Image
          source={this.props.heroSource}
          style={styles.image}
        />
      </View>

    );
  }
}
