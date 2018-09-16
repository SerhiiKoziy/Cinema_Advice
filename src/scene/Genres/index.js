import React, { Component } from "react";
import { connect } from 'react-redux';
import { getBestFilmsByGenres } from '../../actions';
import FastImage from 'react-native-fast-image';
import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
const DEVICE_WIDTH = Dimensions.get("window").width;
// const empty_IMAGE = require("../../../resources/emptyButton.png");
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  mainChannelWr:{
    flex: 1,
    backgroundColor: '#FFF'
  },
  mainListContainer:{
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  listContainer:{
    width: '100%',
    maxWidth: 375,
    flexWrap: 'wrap',
    flexDirection: "column",
    marginTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 40,
  },
  containerScroll:{
    maxWidth: 375,
    width: '100%'
  },

  genresList:{
    flexWrap: 'nowrap',
    width: '100%',
  },
  genreItem:{
    width: 120,
    backgroundColor: '#ccc'
  },
  genreItemText:{

  },

  filmsList:{
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  filmItem:{
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',

    marginBottom: 20,
    backgroundColor: '#ccc',
  },
  filmItemImage:{
    height: 100,
    width: '25%',
    resizeMode: Image.resizeMode.contain,
  },
  filmItemTitle:{
    width: '75%',
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 20,
  },


});

class Genres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectGender: ''
    };
  }
  selectGender(id){
    this.setState({selectGender: id});
    this.props.getBestFilmsByGenres(id)
  }
  render() {
    const {allGenres, filmsByGenres} = this.props.data;
    return (
      <View style={styles.mainChannelWr}>
        <ScrollView style={styles.containerScroll}>
          <View style={styles.listContainer}>
            <View style={styles.genresList}>
              {
                allGenres && (
                  allGenres.map(item => {
                    return(
                      <TouchableOpacity
                        key = {item.name}
                        style = {styles.genreItem}
                        onPress = {() => this.selectGender(item.id)}
                      >
                        <Text style = {[styles.genreItemText, item.id === this.state.selectGender ? {color: '#fff'} : '']}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    )
                  })
                )
              }
            </View>
            <View style={styles.filmsList}>
              {
                ( filmsByGenres && filmsByGenres.length > 1 ) && (
                  filmsByGenres.map(item => {
                    const baseImageUrl = 'http://image.tmdb.org/t/p/w185/';
                    let source = {uri: `${baseImageUrl}${item.poster_path}`};
                    console.log('source', source)
                    return (
                      <View style={styles.filmItem} key={item.title}>
                        <Image source={source} style={styles.filmItemImage}/>
                        <Text style={styles.filmItemTitle}>{item.title}</Text>

                      </View>
                    );
                  })
                )
              }
            </View>
            {/*{this.renderList(dataChannelList)}*/}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const ConnectedComponent = connect(
  (state) => {
    return { data: state.data };
  },
  { getBestFilmsByGenres }
)(Genres);

export default ConnectedComponent;
