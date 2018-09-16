import React, { Component } from "react";
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import { getCategories, saveNameSelectTab, saveSelectSettings } from '../../actions';

import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StatusBar,
  ScrollView
} from "react-native";
import Loading from "../../components/loading.js";

const BG_IMAGE = require("../../../resources/userBG.png");
import { PNGS_DATA_FOR_CATEGORIES } from "../../constants/index.js";

const styles = StyleSheet.create({
  mainListContainer:{
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  listContainer:{
    position: 'relative',
    width: '100%',
    maxWidth: 375,
    height: 56,
    flexDirection: "column",
    marginTop: 0,
    paddingTop: 0,

  },
  containerScroll:{
    flex: 1,
    height: '100%',
    maxWidth: 375,
    width: '100%',
    paddingRight: 30,
    paddingLeft: 30,
  },

  mainContainer:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    justifyContent:'center'
  },
  titleTextWr:{
    marginTop: 20,
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
    marginBottom: 0,
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
  underText:{
    color: '#444444',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    textAlign: "center",
    fontSize: 28,
    lineHeight: 34,
    marginTop: 20,
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

});

class ChooseProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Find your shows',
      inputActive: false,
      touched: false,
    };
  }

  componentDidMount() {
    this.props.getCategories();
  }
  chooseProfile(selectSettings){
    this.props.saveSelectSettings(selectSettings);
    Actions.profileSettings()
  }
  render() {
    const { dataSelectedCategory } = this.props.data;
    const { inputActive, text, touched } = this.state;
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
    if(categories){
      return (
        <View style={styles.mainContainer}>
          <StatusBar barStyle="light-content" />
          <ScrollView>
            <View style={styles.titleTextWr}>
              <Text style={ styles.titleText }>Update a profile!</Text>
            </View>
            <View style={styles.listItems}>
              {categories.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={item.text}
                      style={styles.item}
                      onPress={() => this.chooseProfile({nameProfile: item.text, typeSettings: 'edit', imageCategory: item.source})}
                    >
                      <View style={styles.imageWr}>
                        <Image source={BG_IMAGE} style={styles.itemImgBg}/>
                        <Image source={item.source} style={styles.itemImg}/>
                      </View>
                      <View style={styles.underButtonEdit}>
                        <Text style={styles.underText}>{item.text.slice(0, -1)}</Text>
                      </View>
                    </TouchableOpacity>
                  );
              })}
              <TouchableOpacity
                style={styles.item}
                onPress={() => this.chooseProfile({nameProfile: '', typeSettings: 'add'})}
              >
                <View style={styles.imageWr}>
                  <Image source={BG_IMAGE} style={styles.itemImgBg}/>
                </View>
                <View style={styles.underButtonEdit}>
                  <Text style={styles.underText}>Add a profile</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      );
    }else{
      return <Loading text={"Please wait"} />;
    }

  }
}

const ConnectedComponent = connect(
  (state) => {
    return { data: state.data };
  },
  { getCategories, saveNameSelectTab, saveSelectSettings }
)(ChooseProfile);

export default ConnectedComponent;
