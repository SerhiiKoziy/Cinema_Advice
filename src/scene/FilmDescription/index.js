import React, { Component } from "react";
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity
} from "react-native";
import Api from "../../api/api";
import Loading from "../../components/loading.js";
import {  } from '../../actions/index.js';

const mock_IMAGE_BIG = require("../../../resources/mockImage.png");
import OVERLAY from "../../../resources/newsBgBig.png";

const styles = StyleSheet.create({
    mainContainer:{
      flex: 1,
      backgroundColor: '#FFF',
      justifyContent: 'space-around',
      overflow: 'hidden'
    },
    containerScroll:{

    },
    descriptionWr: {

    },
    descriptionTitle:{
        textAlign: 'center'
    },
    descriptionAdditional:{
        textAlign: 'center'
    },
    backdropImage:{
        height: 300,
        width: 200,
    }
});

class FilmDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let filmDescriptionData = {};
    if(this.props.name === 'filmDescription'){
        filmDescriptionData = this.props.filmDescription;
    }else if(this.props.name === 'filmDescription_2'){
        filmDescriptionData = this.props.filmDescription;
    }
    let allGenres = this.props.data.allGenres;
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

    if (filmDescriptionData && allGenres) {
        let baseImageUrl = 'http://image.tmdb.org/t/p/w185/';
        let sourcePoster = {uri: `${baseImageUrl}${filmDescriptionData.poster_path}`};
        let sourceBackDrop = {uri: `${baseImageUrl}${filmDescriptionData.backdrop_path}`};

      return (
        <View style={styles.mainContainer}>
          <ScrollView style={styles.containerScroll}>
            <View style={styles.descriptionWr}>
              <Text style={styles.descriptionTitle}>{filmDescriptionData.title}</Text>
              <Image source={sourcePoster} style={styles.backdropImage} />
              <Text style={styles.descriptionAdditional}>Description: {filmDescriptionData.overview}</Text>
              <Text style={styles.descriptionAdditional}>Release Date: {filmDescriptionData.release_date}</Text>
              <Image source={sourceBackDrop} style={styles.backdropImage} />
                {/*{*/}
                    {/*filmDescriptionData.genre_ids.map(currentGenres => {*/}
                        {/*allGenres.map(item => {*/}
                            {/*if(currentGenres === +item.id){*/}
                                {/*return(*/}
                                    {/*<Text>{item.name}</Text>*/}
                                {/*)*/}
                            {/*}*/}

                        {/*});*/}
                    {/*})*/}
                {/*}*/}
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return <Loading text={"Please wait"} />;
    }
  }
}
const ConnectedComponent = connect(
  (state) => {
    return { data: state.data };
  },
  {  }
)(FilmDescription);

export default ConnectedComponent;
