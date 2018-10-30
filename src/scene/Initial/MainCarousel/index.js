import React, { Component } from "react";
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {  } from '../../../actions/index';
import Carousel from 'react-native-snap-carousel';

import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
    Dimensions,
  TextInput,
  Text
} from "react-native";
import { TWO_STEEL, THREE_DENIM } from "../../../constants/index.js";
// const BTN_BLUE = require("../../../../resources/btn-blue.png");

const styles = StyleSheet.create({
  mainListContainer:{
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  listContainer:{
    flex: 1,
    width: '100%',
    flexDirection: "column",
    paddingTop: 20,

  },
  containerScroll:{
    flex: 1,
    height: '100%',
    width: '100%',
  },

  mainTitle:{
    fontSize: 28,
    lineHeight: 34,
    color: "#13B7FF",
    fontWeight: '700',
    //fontFamily: 'Arial',
    textAlign: 'center',
    marginBottom: 20,
  },

  slide:{
    height: 400,
    justifyContent: 'center',
    flexDirection: 'row',
    //backgroundColor: 'rgba(223,223,223,0.4)'

  },
  slideTitle:{
    position: 'absolute',
    top: 30,
    zIndex: 10,
    color: "#fff",
    backgroundColor: 'transparent',
  },
  slideImage:{
    width: '100%',
    resizeMode: Image.resizeMode.contain,
  },

  buttonAddSubmitWr:{
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonAddSubmit:{
    height: 56,
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 30,
    backgroundColor: THREE_DENIM
  },

  buttonAddSubmitText:{
    textAlign: 'center',
    fontSize: 22,
    color: "#FFF",
    backgroundColor: 'transparent',
    fontWeight: '500',
    //fontFamily: 'Arial',
  },
});

class MainCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries:[]
    };
  }

  renderItem ({item, index}) {
    /*
      { vote_count: 10,
       id: 345287,
       video: false,
       vote_average: 10,
       title: 'Soldiers Of The Damned',
       popularity: 4.764054,
       poster_path: '/itdfycoMpjGWiGdjLUKMdAe9oQ5.jpg',
       original_language: 'en',
       original_title: 'Soldiers Of The Damned',
       genre_ids: [ 27, 10752, 28, 53 ],
       backdrop_path: '/4KTHZhKB5JPKRv1QuBc6Tt2R1aG.jpg',
       adult: false,
       overview: 'WWII German soldiers take an occult scientist into a haunted forest in Romania, only to be confronted by their own ghosts.',
       release_date: '2017-12-07' }
    */
    const baseImageUrl = 'http://image.tmdb.org/t/p/w185/';

    // let source = {uri: `${baseImageUrl}${item.poster_path}`};
    let width = Dimensions.get('window').width - 140;
    return (
      <View style={[styles.slide, {width: width}]}>
        <Text style={[styles.slideTitle, {width: width}]}>{item.title}</Text>
        {/*<Image source={source} style={styles.slideImage}/>*/}
      </View>
    );
  }
  render() {
    const {bestFilmsByYear} = this.props;
    //let width = Dimensions.get('window').width;
    return (
      <View style={styles.mainListContainer}>
        <View style={styles.containerScroll}>
          <View style={styles.listContainer}>
              {/*{*/}
                  {/*bestFilmsByYear.results && bestFilmsByYear.results.length > 0 && (*/}
                      {/*<Carousel*/}
                          {/*ref={c => {this._carousel = c}}*/}
                          {/*data={bestFilmsByYear.results}*/}
                          {/*renderItem={this.renderItem}*/}
                          {/*sliderWidth={width}*/}
                          {/*itemWidth={width - 140}*/}
                          {/*loop = {true}*/}
                          {/*onSnapToItem={(index) => this.setState({ sliderActiveSlide: index })}*/}
                      {/*/>*/}
                  {/*)*/}
              {/*}*/}

            <View style={styles.buttonAddSubmitWr}>
              <TouchableOpacity
                style={styles.buttonAddSubmit}
                // onPress={() => this.props.openDescriptionFilm(bestFilmsByYear.results[this.state.sliderActiveSlide])}
              >
                <Text style={styles.buttonAddSubmitText}>This film</Text>
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
  { }
)(MainCarousel);

export default ConnectedComponent;
