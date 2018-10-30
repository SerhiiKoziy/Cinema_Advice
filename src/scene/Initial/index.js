import React, {Component} from "react";
import {connect} from 'react-redux';
import {
    getBestFilmsByYearAction,
    getAllGenres
} from '../../actions';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  ScrollView,
  Text,
    TouchableOpacity,
  View,
  StatusBar
} from "react-native";
import ApiData from "../../api/api";
import MainCarousel from "./MainCarousel";
// import ListAnimals from "./ListAnimals";
// import ListChanel from "./ListChanel";
// import ListHeroes from "./MainSlider";
import ListNews from "./ListNews";
import PromoBanner from "./PromoBanner";
import LogoBanner from "./LogoBanner";
// import HeroBanner from "./HeroeBanner";
// import Loading from "../../components/loading.js";

import { ONE_SCREEN } from "../../constants/index.js";

const styles = StyleSheet.create({
  mainInitialWr:{
    flex: 1,
    backgroundColor: '#FFF'
  },
  initialWr:{
    flex: 1,
    backgroundColor: '#FFF',
    overflow: 'hidden'
  },
  insideContainer:{
    height: '100%',
    overflow: 'hidden',
    backgroundColor: ONE_SCREEN,
  },
  mainTitle:{
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 24,
    marginTop: 20,
    fontWeight: 'bold'
  },


});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getBestFilmsByYearAction('2017');
    this.props.getAllGenres();

  }

  openDescriptionFilm(item) {
    console.log('item', item);
    //Actions.film_description({filmDescription: item})
  }

  render() {
    const {bestFilmsByYear} = this.props.data;
    return (
      <View style={styles.mainInitialWr}>
          <ScrollView style={styles.initialWr} ref="scrollView">
            <View style={styles.insideContainer}>

              <Text style={styles.mainTitle}>Best films in 2017</Text>
              <MainCarousel
                openDescriptionFilm ={(item) => this.openDescriptionFilm(item)}
                bestFilmsByYear={bestFilmsByYear}
              />
              <LogoBanner/>
              {/*<ListHeroes*/}
              {/*listHeroes={dataHeroes}*/}
              {/*tapAction={(channelName, episodeName, bgColor) => this.changeSelectedEpisode(channelName, episodeName, bgColor)}*/}
              {/*selectedCategory={selectedCategory}*/}
              {/*/>*/}
              {/*<PromoBanner*/}
              {/*selectPromoData={dataMixPages.selectPromoData}*/}
              {/*selectedCategory={dataSelectedCategory.selectedCategory}*/}
              {/*tapAction={(channelName, episodeName, bgColor) => this.changeSelectedEpisode(channelName, episodeName, bgColor)}*/}
              {/*/>*/}
              {/*<ListNews*/}
              {/*items={dataMixPages.selectEpisodesData}*/}
              {/*openVideo={(item) => this.openVideo(item)}*/}
              {/*selectedCategory={selectedCategory}*/}
              {/*/>*/}
              {/*<ListAnimals*/}
              {/*items={dataMixPages.specificTypeData}*/}
              {/*selectedCategory={selectedCategory}*/}
              {/*openVideo={(item) => this.openVideo(item)}*/}
              {/*resetLoadImages={this.props.resetLoadImages}*/}
              {/*/>*/}
              {/*<ListChanel*/}
              {/*tapAction={(title, bgColor )=> this.changeSelectedChanel(title, bgColor)}*/}
              {/*selectedCategory={dataSelectedCategory.selectedCategory}*/}
              {/*dataAllChannels={dataAllChannels}*/}
              {/*/>*/}
              {/*<HeroBanner*/}
              {/*heroSource={heroSourceBottom}*/}
              {/*/>*/}
            </View>
          </ScrollView>



      </View>
    );
  }
}

const ConnectedComponent = connect(
  (state) => {
    return {data: state.data, imagesLoad: state.data.imagesLoad};
  },
  {getBestFilmsByYearAction, getAllGenres}
)(Home);

export default ConnectedComponent;
