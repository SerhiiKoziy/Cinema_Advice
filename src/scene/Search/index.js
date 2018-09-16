import React, { Component } from "react";
import { connect } from 'react-redux';
import { saveSelectedChannel, saveNameSelectTab } from '../../actions';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";

// import SEARCH_BTN_ACT from "../../../resources/nav-search-active.png";
// import SEARCH_BTN from "../../../resources/nav-search-active.png";
// import CLOSE_BTN_SEARCH from "../../../resources/search-close.png";



import {Actions} from 'react-native-router-flux';
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
    flexDirection: "row",
    marginTop: 50,

  },
  containerScroll:{
    flex: 1,
    height: '100%',
    maxWidth: 375,
    width: '100%',
    paddingRight: 20,
    paddingLeft: 20,
  },

  //SEARCH
  searchInput: {
    width: '100%',
    height: 56,
    paddingLeft: 60,
    paddingRight: 20,

    borderRadius: 16,
    backgroundColor: '#DFDFDF',
    color: '#343434',
    //fontFamily: 'Arial',
  },
  searchImageWr:{
    position: 'absolute',
    left: 20,
    top: 15,
    height: 27,
    width: 22,
  },
  searchImage:{
    height: 27,
    width: 22,
    resizeMode: Image.resizeMode.contain
  },
  closeImageWr:{
    position: 'absolute',
    right: 20,
    top: 24,
    height: 10,
    width: 10,
  },
  closeImage:{
    height: 10,
    width: 10,
    resizeMode: Image.resizeMode.contain
  },
  heroWr:{
    marginTop: 130,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  heroImage:{
    width: 220,
    height: 150,
    resizeMode: Image.resizeMode.contain
  },
  closeImageBig:{
    width: 220,
    height: 150,
    resizeMode: Image.resizeMode.contain
  }
});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Find your shows',
      inputActive: false,
      touched: false,
    };
  }

  componentDidMount() {
    // this.props.saveNameSelectTab('tab_3')
  }
  render() {
    // const { dataSelectedCategory } = this.props.data;
     const { inputActive, text, touched } = this.state;
    // let heroSourceBottom;
    // if(dataSelectedCategory){
    //   arrCategory.map((item, index) => {
    //     if(item === dataSelectedCategory.selectedCategory){
    //       heroSourceBottom = imagesHeroesArr[index].bottomHeroImage;
    //     }
    //   });
    // }else{
    //   heroSourceBottom = imagesHeroesArr[1].bottomHeroImage;
    // }

    return (
      <View style={{flex: 1, backgroundColor: '#FFF', alignItems: 'center'}}>
        <View style={styles.containerScroll}>
          <View style={styles.listContainer}>

            {/*<TextInput*/}
              {/*style={styles.searchInput}*/}
              {/*onChangeText={(text) => this.setState({text})}*/}
              {/*onBlur={() => this.setState({inputActive: false})}*/}
              {/*onFocus={() => this.setState({inputActive: true, text: '', touched: true})}*/}
              {/*value={this.state.text}*/}
            {/*/>*/}
            <TouchableOpacity
              onPress={() => Actions.home()}
            >
              {/*<Image style={styles.closeImageBig} source={CLOSE_BTN_SEARCH } />*/}
            </TouchableOpacity>
            {
              inputActive && (
                <View style={styles.searchImageWr}>
                  {/*<Image style={styles.searchImage} source={SEARCH_BTN_ACT } />*/}
                </View>
              )
            }
            {
              !inputActive && (
                <View style={styles.searchImageWr}>
                  {/*<Image style={styles.searchImage} source={SEARCH_BTN } />*/}
                </View>
              )
            }
            {
              text.length > 0 && touched && (
                <View style={styles.closeImageWr}>
                  <TouchableOpacity
                    onPress={() => this.setState({ text: '' })}
                  >
                    {/*<Image style={styles.closeImage} source={CLOSE_BTN_SEARCH } />*/}
                  </TouchableOpacity>
                </View>
              )
            }
          </View>
          {/*<View style={styles.heroWr}>*/}
            {/*<Image style={styles.heroImage} source={ HERO_IMAGE } />*/}
          {/*</View>*/}
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
