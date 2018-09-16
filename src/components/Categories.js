import React, { Component } from "react";
//import Api from "../api/api";
import Loading from "../components/loading.js";
//import Orientation from 'react-native-orientation';
import { connect } from 'react-redux';

import { getCategories, saveSelectCategory } from '../actions/index.js';
import {Actions} from 'react-native-router-flux';
import {
  //Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { PNGS_DATA_FOR_CATEGORIES } from "../constants/index.js";

// const BG_IMAGE = require("../../resources/userBG.png");
// const NAV_CLOSE = require("../../resources/nav-close-red.png");

const styles = StyleSheet.create({
  titleTextWr:{
    marginTop: 95,
    width: '100%',
    justifyContent:'center',
  },
  titleText:{
    color:'#13B7FF',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    textAlign: "center",
    fontSize: 28,
    lineHeight: 34,
  },
  buttonCloseCategory:{
    position: "absolute",
    top: 30,
    right: 25,
    width: 25,
    height: 25,
  },
  imageCloseCategory:{

  },
  mainContainer:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    justifyContent:'center'
  },

  listItems:{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    paddingTop: 30,
    maxWidth: 405,
    paddingLeft: 20,
    paddingRight: 20,
  },
  item: {
    width: "100%",
    height: 340,
    alignItems:'center',
    marginBottom: 20,
    marginTop: 10,
    //display: 'flex'
  },
  itemSelect: {
    position: 'absolute',
    top: 0,
    left: 0,

    width: '100%',
    height: '100%',
    borderRadius: 200,
    borderColor : '#13B7FF',
    borderWidth: 6,

    //display: 'flex'
  },
  imageWr:{
    width: 246,
    height: 246,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImg: {
    width: 210,
    height: 210,
  },
  itemImgBg: {
    position: "absolute",
    width: 246,
    height: 246,
    //left: 20
  },
  underText: {
    textAlign: "center",
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    fontFamily: 'Arial',
    color: '#444444',
    paddingTop: 20,

  },
  underButtonEdit: {
    //paddingTop: 10,

  },
  underButtonEditTouch:{
    paddingTop: 5,
  },
  underButtonEditText:{
    color:'#13B7FF',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: 'Arial',
    textAlign: "center",
  },
  titleMain: {
    textAlign: "center",
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
    padding: 15
  },
  handWr:{
    zIndex: 100
  },
  rightImage: {
    height: 25,
    width: 25,
  },
});

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectItem: '',
    }
  }
  componentWillMount(){
    //this.props.getCategories();
    //Orientation.lockToPortrait();
  }
  componentDidMount() {

  }
  itemClickHandler(selectedCategory, categoryLink){
    this.props.saveSelectCategory({
      selectedCategory: selectedCategory,
      categoryLink: categoryLink
    });
    Actions.home({
      selectedCategory111: selectedCategory,
      categoryLink: categoryLink
    })
  }

  // shouldComponentUpdate(nextProps){
  //   return nextProps.data.dataCategories !== this.props.data.dataCategories;
  //   //return false
  // }
  render() {
    let categories = [];
    if(this.props.data.dataCategories){
      categories = this.props.data.dataCategories.map(categorie => {
        const imgFind = PNGS_DATA_FOR_CATEGORIES.find(
          i => i.name === categorie.attributes.title
        );
        const imgSource = imgFind && imgFind.source;
        return Object.assign({},
          {
            text: categorie.attributes.title,
            source: imgSource,
            link: categorie.links.self,
          }
        );
      });
    }
    let selectBody = this.props.data.dataSelectedCategory.selectedCategory;

    if(categories){
      return (
        <View style={styles.mainContainer}>
          <StatusBar barStyle="light-content" />
          <ScrollView>
            {
              this.props.data.dataSelectedCategory.categoryLink.length > 0 && (
                <TouchableOpacity
                  style={styles.buttonCloseCategory}
                  onPress={() => Actions.home({pageCurrent: 'home'})}
                >
                  <Image source={NAV_CLOSE} style={styles.imageCloseCategory} />
                </TouchableOpacity>
              )
            }
            <View style={styles.titleTextWr}>
              <Text style={ styles.titleText }>Which one are you?</Text>
            </View>
            <View style={styles.listItems}>

              {categories.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={item.text}
                      style={styles.item}
                      onPress={() => this.itemClickHandler(item.text, item.link)}
                      //onPress={() => this.setState({selectItem: index})}
                    >
                      {/*<View style={styles.imageWr}>*/}
                        {/*{*/}
                          {/*selectBody === item.text && (*/}
                            {/*<View style={styles.itemSelect}/>*/}
                          {/*)*/}
                        {/*}*/}
                        {/*<Image source={BG_IMAGE} style={styles.itemImgBg}/>*/}
                        {/*<Image source={item.source} style={styles.itemImg}/>*/}
                      {/*</View>*/}
                      {/*<View style={styles.underButtonEdit}>*/}
                        {/*<Text style={styles.underText}>{item.text.slice(0, -1)}</Text>*/}
                        {/*<TouchableOpacity*/}
                          {/*style={styles.underButtonEditTouch}*/}
                          {/*onPress={() => Actions.sliderBuddy()}*/}
                        {/*>*/}
                          {/*<Text style={styles.underButtonEditText}>*/}
                            {/*{'Edit'}*/}
                          {/*</Text>*/}
                        {/*</TouchableOpacity>*/}
                      {/*</View>*/}
                    </TouchableOpacity>
                  );
              })}
            </View>
          </ScrollView>
        </View>
      );
    }else{
      return <Loading text={"Please wait"} />;
    }
  }
}
const ConnectedCategories = connect(
  (state) => {
    return { data: state.data };
  },
  {
    getCategories, saveSelectCategory
  }
)(Categories);

export default ConnectedCategories;
