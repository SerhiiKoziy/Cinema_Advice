import React from 'react'
import {Text, View, TouchableOpacity, StyleSheet, Image, Animated} from "react-native";
import { connect } from 'react-redux';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { FOUR_MARIGOLD, BG_COLOR_DESIGN } from "../constants/index.js";
import {Actions} from 'react-native-router-flux';
import {
  MKButton,
  MKColor,
  MKIconToggle,
  getTheme,
} from 'react-native-material-kit';


const styles = StyleSheet.create({
  tabBarWr:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    //paddingLeft: 20,
    //paddingRight: 20,
  },
  itemContainerSec:{
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
  },

  itemImageWr: {
    backgroundColor: "transparent",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  itemImage:{
    height: '100%',
    width: '100%',
    //overlayColor: '#fff'
  },
});


 class TabComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps){
    let routeName = this.props.navigation.state.routeName;
    let tabNameAnimate = this.props.data.tabNameAnimate;
    if(routeName === nextProps.data.tabNameAnimate && tabNameAnimate !== nextProps.data.tabNameAnimate){

    }
    return routeName === tabNameAnimate && nextProps.data.tabNameAnimate !== tabNameAnimate
  }
  render() {
    let colorIcon = this.props.focused ? '#fff' : FOUR_MARIGOLD;
    return (
      <View style={[styles.tabBarWr, {backgroundColor: BG_COLOR_DESIGN}]}>
        <View style={ styles.itemContainerSec}>
          <View style={styles.itemImageWr}>
            <Text style={{color: colorIcon}}>M</Text>
            {/*<Icon style={{color: colorIcon}} name={this.props.iconName || "circle"} size={27}/>*/}
          </View>
        </View>
      </View>
    )
  }
}
const ConnectedComponent = connect(
  (state) => {
    return { data: state };
  },
  {  }
)(TabComponent);

export default ConnectedComponent;
