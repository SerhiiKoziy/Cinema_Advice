import React, { Component } from "react";
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import { saveSelectedChannel, saveNameSelectTab } from '../../actions';

import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  TextInput,
  Text
} from "react-native";

import SEARCH_BTN_ACT from "../../../resources/nav-search-active.png";
import SEARCH_BTN from "../../../resources/nav-search-active.png";
import HERO_IMAGE from "../../../resources/search-body.png";
import CLOSE_BTN_SEARCH from "../../../resources/search-close.png";

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
    marginTop: 50,
    paddingTop: 80,

  },
  containerScroll:{
    flex: 1,
    height: '100%',
    maxWidth: 375,
    width: '100%',
    paddingRight: 30,
    paddingLeft: 30,
  },

  //SEARCH
  inputTitle:{
    fontSize: 16,
    color: "#808080",
    fontWeight: '500',
    fontFamily: 'Arial',
  },
  searchInput: {
    width: '100%',
    height: 56,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor:"#808080",
    //backgroundColor: '#DFDFDF',
    color: '#343434',
    fontFamily: 'Arial',
  },
  forgotAuthText:{
    fontSize: 16,
    color: "#808080",
    fontWeight: '500',
    fontFamily: 'Arial',
  },
  buttonSignInWr:{
    paddingRight: 10,
    paddingLeft: 10,
  },
  buttonSignIn:{
    height: 50,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#315ddf',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,

  },
  buttonSignInText:{
    textAlign: 'center',
    fontSize: 22,
    color: "#FFF",
    fontWeight: '500',
    fontFamily: 'Arial',
  }

});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: 'Find your shows',
      pass: 'Find your shows',
      inputActive: false,
      touched: false,
    };
  }

  componentDidMount() {
    this.props.saveNameSelectTab('tab_3')
  }
  render() {
    const { dataSelectedCategory } = this.props.data;
    const { inputActive, text, touched } = this.state;


    return (
      <View style={{flex: 1, backgroundColor: '#FFF', alignItems: 'center'}}>
        <View style={styles.containerScroll}>
          <View style={styles.listContainer}>

            <Text style={styles.inputTitle}>Email or Username</Text>
            <TextInput
              style={styles.searchInput}
              onChangeText={(login) => this.setState({login})}
              onBlur={() => this.setState({inputActive: false})}
              //onFocus={() => this.setState({inputActive: true, text: '', touched: true})}
              value={this.state.text}
            />
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.searchInput}
              onChangeText={(pass) => this.setState({pass})}
              onBlur={() => this.setState({inputActive: false})}
              //onFocus={() => this.setState({inputActive: true, text: '', touched: true})}
              value={this.state.text}
            />
            <Text style={styles.forgotAuthText}>Forgotten username or password?</Text>
            <View style={styles.buttonSignInWr}>
              <TouchableOpacity
                style={styles.buttonSignIn}
                onPress={() => Actions.grownUps()}
              >
                <Text style={styles.buttonSignInText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    )
  }
}

const ConnectedComponent = connect(
  (state) => {
    return { data: state.data };
  },
  { saveSelectedChannel, saveNameSelectTab }
)(Search);

export default ConnectedComponent;
