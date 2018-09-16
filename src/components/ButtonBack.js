import React from 'react';
import {connect} from 'react-redux';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  logoContainer:{
    width: 100,
    height: 49,

  },
  mainImage:{
    position: 'absolute',
    width: 82,
    height: 53,
    bottom: -2,
  },
  handContainer:{
    position: 'absolute',
    bottom: -39,
    left: 42,
  },
  handImage:{
    width: 22,
    height: 88,
  }
})


class ButtonBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { dataSelectedCategory} = this.props.data;

    return (
      <View >
        <TouchableOpacity
          style={styles.logoContainer}
        >
          <Image source={HOME_BTN_BACK} style={styles.rightButton} />
        </TouchableOpacity>
      </View>
    );
  }
}
const ConnectedComponent = connect(
  (state) => {
    return {data: state};
  },
  {  }
)(ButtonBack);

export default ConnectedComponent;
