import React, { Component } from "react";
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import { saveSelectedChannel, saveNameSelectTab, getChannels } from '../../actions';

import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView
} from "react-native";

// const BG_IMAGE = require("../../../resources/userBG.png");
// const NAV_OK = require("../../../resources/nav-ok.png");
// const empty_IMAGE = require("../../../resources/emptyButton.png");
const styles = StyleSheet.create({
  mainListContainer:{
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  listContainer:{
    width: '100%',
    maxWidth: 375,
    flexDirection: "column",
    marginTop: 50,
    paddingTop: 0,

  },
  containerScroll:{
    maxWidth: 375,
    width: '100%',

  },
  formWr:{
    paddingRight: 30,
    paddingLeft: 30,
  },

  item: {
    width: "100%",
    height: 116,
    alignItems:'center',
    marginBottom: 0,
    marginTop: 10,
  },
  imageWr:{
    width: 116,
    height: 116,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImg: {
    width: 110,
    height: 110,
  },
  itemImgBg: {
    position: "absolute",
    width: 116,
    height: 116,
  },


  checkboxTitle:{
    fontSize: 17,
    lineHeight: 22,
    color: "#444444",
    fontWeight: '500',
    fontFamily: 'Arial',
    textAlign: 'center'
  },

  inputTitle:{
    fontSize: 16,
    color: "#808080",
    fontWeight: '500',
    fontFamily: 'Arial',
  },
  inputWr:{
    height: 56,
    width: '100%',
    marginTop: 30,
    marginBottom: 10,
  },
  validateChecker:{
    position: 'absolute',
    right: 20,
    top: 10,
    height: 28,
    width: 28,

  },
  searchInput: {
    width: '100%',
    height: 56,
    paddingLeft: 20,
    paddingRight: 20,

    //borderRadius: 5,
    borderBottomColor: '#13B7FF',
    borderBottomWidth: 2,
    //backgroundColor: '#DFDFDF',
    fontSize: 20,
    color: '#444444',
    fontWeight: '300',
    fontFamily: 'Arial',
  },
  genderWrapper:{
    flexDirection: 'row',

  },
  genderBox:{
    flexDirection: 'row',
    marginTop: 40,
  },
  indicatorGenderWr:{
    height: 30,
    width: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#DFDFDF',
    backgroundColor: '#FFF',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicatorGender:{
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: '#13B7FF',
  },
  genderText:{
    marginRight: 25,
    fontSize: 20,
    lineHeight: 30,
    color: '#444444',
    fontWeight: '300',
    fontFamily: 'Arial',
  },

  titleTextWr:{
    marginTop: 40,
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

  checkBoxWrapper:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  checkBoxWr:{
    height: 30,
    width: 50,
    backgroundColor: '#FF3250',
    borderRadius: 20,
    paddingTop: 2,
    paddingBottom: 2,
    //paddingLeft: 3,
    paddingLeft: 21,
    paddingRight: 3,
  },
  checkBox:{
    height: 26,
    width: 26,
    borderRadius: 20,
    backgroundColor: '#FFF',
  },

  channelsListWr:{
    backgroundColor: '#DFDFDF',
    paddingRight: 30,
    paddingLeft: 30,
  },
  itemRow:{
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    width: '33%',
    maxWidth: 105,
    height: 105,
  },
  listImage: {
    width: '100%',
    height: '100%',
    resizeMode: Image.resizeMode.contain
  },
  listImageBg: {
    position: "absolute",
    width: '100%',
    height: '100%',
    resizeMode: Image.resizeMode.contain
  },

  licenceTextWr:{
    paddingRight: 40,
    paddingLeft: 40,
  },
  licenceText:{
    fontSize: 17,
    lineHeight: 22,
    color: "#444444",
    fontWeight: '500',
    fontFamily: 'Arial',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,

  },


  buttonAddSubmitWr:{
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonAddSubmit:{
    height: 50,
    width: 216,
    borderRadius: 10,
    backgroundColor: '#315ddf',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 20,
  },

  buttonAddSubmitText:{
    textAlign: 'center',
    fontSize: 22,
    color: "#FFF",
    fontWeight: '500',
    fontFamily: 'Arial',
  },
  buttonsWr:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 30,
    paddingLeft: 30,
    marginBottom: 20,
  },
  buttonEditSubmitLeft:{
    height: 50,
    width: '45%',
    borderRadius: 10,
    backgroundColor: '#FF4EA8',
    justifyContent: 'center',
  },
  buttonEditSubmitRight:{
    height: 50,
    width: '45%',
    borderRadius: 10,
    backgroundColor: '#315ddf',
    justifyContent: 'center',

  },
  buttonSubmitText:{
    fontSize: 22,
    lineHeight: 28,
    color: "#FFF",
    fontWeight: '700',
    fontFamily: 'Arial',
    textAlign: 'center',
  }
});

class ProfileSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileName: this.props.profile.selectSettings.typeSettings === 'edit' ? '' : 'Harry',
      profileBirthday: this.props.profile.selectSettings.typeSettings === 'edit' ? '' : '1 December 2012',
      inputActive: false,
      touched: false,
      allChannels: true,
      gender: this.props.profile.selectSettings.typeSettings === 'edit' ? '' : 'boy',
    };
  }

  componentDidMount() {
    this.props.getChannels();
  }
  render() {
    let { nameProfile, typeSettings, imageCategory } = this.props.profile.selectSettings;
    const { dataSelectedCategory, dataAllChannels } = this.props.data;

    let dataChannelCutList = [];
    if(dataAllChannels){
      let selectChannels = ["Nick Jr"];
      dataAllChannels.map(channel => {
        selectChannels.map(item => {
          if(channel.nameChannel === item){
            dataChannelCutList.push(channel);
          }
        })
      });
    }
    return (
      <View style={{flex: 1, backgroundColor: '#FFF', alignItems: 'center'}}>
        <ScrollView style={styles.containerScroll}>
          <View style={styles.listContainer}>
            {/*{*/}
              {/*nameProfile.length > 0 && (*/}
                {/*<View style={styles.item}>*/}
                  {/*<View style={styles.imageWr}>*/}
                    {/*<Image source={BG_IMAGE} style={styles.itemImgBg}/>*/}
                    {/*<Image source={imageCategory || ''} style={styles.itemImg}/>*/}
                  {/*</View>*/}
                {/*</View>*/}
              {/*)*/}
            {/*}*/}
            <View style={styles.formWr}>
              <View style={styles.inputWr}>
                <TextInput
                  style={styles.searchInput}
                  onChangeText={(profileName) => this.setState({profileName})}
                  onBlur={() => this.setState({inputActive: false})}
                  onFocus={() => this.setState({inputActive: true, text: '', touched: true})}
                  value={this.state.profileName}
                />
                {/*{*/}
                  {/*this.state.profileName.length > 0 && (*/}
                    {/*<Image source={NAV_OK} style={styles.validateChecker}/>*/}
                  {/*)*/}
                {/*}*/}
              </View>
              <View style={styles.inputWr}>
                <TextInput
                  style={styles.searchInput}
                  onChangeText={(profileBirthday) => this.setState({profileBirthday})}
                  onBlur={() => this.setState({inputActive: false})}
                  //onFocus={() => this.setState({inputActive: true, text: '', touched: true})}
                  value={this.state.profileBirthday}
                />
                {/*{*/}
                  {/*this.state.profileBirthday.length > 0 && (*/}
                    {/*<Image source={NAV_OK} style={styles.validateChecker}/>*/}
                  {/*)*/}
                {/*}*/}
              </View>

              <View style={styles.genderWrapper}>
                <TouchableOpacity
                  style={styles.genderBox}
                  onPress={() => this.setState({gender: 'boy'})}
                >
                  <View style={styles.indicatorGenderWr}>
                    {
                      this.state.gender === 'boy' && (
                        <View style={styles.indicatorGender}/>
                      )
                    }
                  </View>
                  <Text style={styles.genderText}>Girl</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.genderBox}
                  onPress={() => this.setState({gender: 'girl'})}
                >
                  <View style={styles.indicatorGenderWr}>
                    {
                      this.state.gender === 'girl' && (
                        <View style={styles.indicatorGender}/>
                      )
                    }
                  </View>
                  <Text style={styles.genderText}>Boy</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.titleTextWr}>
                <Text style={ styles.titleText }>
                  {typeSettings === 'edit' ? 'Profile channel settings' : 'Channel settings'}
                  </Text>
              </View>
              <Text style={styles.checkboxTitle}>Show videos for ages 5 and under only</Text>

              <View style={styles.checkBoxWrapper}>
                <TouchableOpacity
                  style={[
                    styles.checkBoxWr, this.state.allChannels ?
                    {paddingLeft: 3} :
                    {paddingLeft: 21, backgroundColor: '#7ED321'}
                  ]}
                  onPress={() => this.setState({allChannels: !this.state.allChannels})}
                >
                  <View style={styles.checkBox}/>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.channelsListWr}>
              {
                dataAllChannels && this.state.allChannels && (
                  this.renderList(dataAllChannels)
                )
              }
              {
                dataAllChannels && !this.state.allChannels && (
                  this.renderList(dataChannelCutList)
                )
              }
            </View>
            <View style={styles.licenceTextWr}>
              <Text style={styles.licenceText}>
                Look
              </Text>
            </View>

            {
              typeSettings === 'edit' && (
                <View style={styles.buttonsWr}>
                  <TouchableOpacity
                    style={styles.buttonEditSubmitLeft}
                    //onPress={() => Actions.grownUps()}
                  >
                    <Text style={styles.buttonSubmitText}>Delete</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonEditSubmitRight}
                    onPress={() => Actions.chooseProfile()}
                  >
                    <Text style={styles.buttonSubmitText}>Save</Text>
                  </TouchableOpacity>
                </View>
              )
            }
            {
              typeSettings === 'add' && (
                <View style={styles.buttonAddSubmitWr}>
                  <TouchableOpacity
                    style={styles.buttonAddSubmit}
                    onPress={() => Actions.chooseProfile()}
                  >
                    <Text style={styles.buttonAddSubmitText}>Save profile</Text>
                  </TouchableOpacity>
                </View>
              )
            }
          </View>
        </ScrollView>
      </View>
    )
  }

  renderItem(item){
    const source = item.src && { uri: item.src } || empty_IMAGE;
    return(
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => {this.changeSelectedChanel(item.nameChannel, item.bgColor)}}>
          {/*<Image source={empty_IMAGE} style={styles.listImageBg} />*/}
          {/*<Image source={source} style={styles.listImage} />*/}
        </TouchableOpacity>
      </View>
    )
  }

  renderList(data) {
    return data.map((item, index) => {
      const source = item.src && { uri: item.src } || empty_IMAGE;
      if(index !== 0 && ((index + 1) % 3 === 0)){
        return (
          <View style={styles.itemRow} key={data[index].text}>
            {this.renderItem(data[index-2])}
            {this.renderItem(data[index-1])}
            {this.renderItem(data[index])}
          </View>
        );
      }else{
        return null
      }
    })
  }
}

const ConnectedComponent = connect(
  (state) => {
    return { data: state.data, profile: state.profile };
  },
  { saveSelectedChannel, saveNameSelectTab, getChannels }
)(ProfileSettings);

export default ConnectedComponent;
