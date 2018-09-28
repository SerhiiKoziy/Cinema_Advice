import React, { PureComponent } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from "react-native";
import LOGO_BANNER_IMAGE from "../../../resources/default.jpg";

export default class logoBanner extends PureComponent {
  render() {
    return (
      <View
        style={{
          //alignItems: 'center',
          paddingLeft: 20,
          paddingRight: 20,
          marginTop:20,
          height:140,
          alignItems: 'center'
        }}
      >
        <Image
          source={LOGO_BANNER_IMAGE}
          style={{
            width: "100%",
            maxWidth: 275,
            maxHeight: 140,
            height: 140,
            //marginTop:8,
            resizeMode: Image.resizeMode.contain
          }}
        />
      </View>

    );
  }
}
