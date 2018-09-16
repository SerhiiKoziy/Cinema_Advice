import * as types from '../constants/redux.js';
import ApiData from "../api/api";

// GET - FILMS BY YEAR  - from API
export function getBestFilmsByYearAction(year) {
  return (dispatch) => {
      ApiData.getBestFilmsByYear(year).then(data => {
        // const bestFilmsData = data.map((film, index) => {
        //     return {film};
        // });
        dispatch(getAllChannelsReducer(data));
      })
      // .then(channelsNormalized => {
      //   let seasonsPromiseArr = [];
      //   channelsNormalized.map(item => {
      //     seasonsPromiseArr.push(
      //         Api.series(item.links).then(season => {
      //         return season
      //       })
      //     )
      //   });
      //
      //   Promise.all(seasonsPromiseArr)
      //     .then(seasonsArr => {
      //       const seriesNormalized = seasonsArr.map((item, index) => {
      //         let name = item[0].attributes.channel.name;
      //         return item && {
      //             channel: name === "Channel 5" ? "Milkshake!" : name,
      //             data: item.map((show, index) => {
      //               if(show.attributes.title && show.attributes.images[0]){
      //                 return {
      //                   text: show.attributes.title,
      //                   key: show.attributes.title,
      //                   src: show.attributes.images[0].url,
      //                   link: show.links.self,
      //                   channel: item[0].attributes.channel.name,
      //                 };
      //               }
      //             })
      //           };
      //       });
      //
      //       dispatch(getSeriesReducer(seriesNormalized));
      //     });
      // });
  }
}
export function getAllChannelsReducer(bestFilmsData){
  return {
    type: types.GET_BEST_FILMS_BY_YEAR,
    payload: bestFilmsData,
  };
}
// GET ALL GENRES
export function getAllGenres() {
    return (dispatch) => {
        ApiData.getAllGenres().then(data => {

            dispatch(getAllGenresReducer(data.genres));
        })
    }
}
export function getAllGenresReducer(data){
    return {
        type: types.GET_ALL_GENRES,
        payload: data,
    };
}
// GET FILM BY GENRES
export function getBestFilmsByGenres(id) {
    return (dispatch) => {
        ApiData.getBestFilmsByGenres(id).then(data => {

            dispatch(getFilmByGenresReducer(data.results));
        })
    }
}
export function getFilmByGenresReducer(data){
    return {
        type: types.GET_FILM_BY_GENRES,
        payload: data,
    };
}






export function getSeriesReducer(seriesNormalized){
  return {
    type: types.GET_SERIES,
    payload: seriesNormalized,
  };
}
export function getEpisodesReducer(episodesArr){
  return {
    type: types.GET_EPISODES,
    payload: episodesArr,
  };
}
// SAVE SELECTED CHANNEL
export function saveSelectedChannel(data){
  return {
    type: types.SAVE_SELECTED_CHANNEL,
    payload: data,
  };
}

// GET CATEGORIES from API
export function getCategories() {
  return (dispatch) => {
      Api.categories()
      .then(categories => {
        dispatch(getCategoriesReducer(categories));

      })
      .catch(
        e => console.log('ERROR GET CATEGORIES', e)
      );
  }
}
export function getCategoriesReducer(categories){
  return {
    type: types.GET_CATEGORIES,
    payload: categories,
  };
}
// SAVE SELECTED CATEGORY
export function saveSelectCategory(data){
  return {
    type: types.SAVE_SELECTED_CATEGORIES,
    payload: data,
  };
}

// GET HEROES from API
export function getHeroes(selectedCategory) {
  let categoryNum;
  const arrCategory = [
    'Older Boys',
    'Older Girls',
    'Middle Boys',
    'Middle Girls',
    'Younger Boys',
    'Younger Girls',
  ];
  arrCategory.map((category, index) => {
    if(category === selectedCategory){
      categoryNum = index
    }
  });

  return (dispatch) => {
      Api.heroes(categoryNum)
      .then((heroes) => {
        dispatch(getHeroesReducer(selectedCategory, heroes));
      })
      .catch(
        e => console.log('ERROR GET HEROES', e)
      );
  }
}
export function getHeroesReducer(category, heroes){
  return {
    type: types.GET_HEROES,
    payload: heroes,
    category
  };
}

// GET MIX PAGES from API
export function getMixPages(category, categoryLink) {

  return (dispatch) => {
      Api.mixPages(categoryLink)
      .then(selectData => {
        if(selectData){
          dispatch(getMixPagesReducer(
            {
              specificTypeData: selectData.specificTypeNormalized,
              selectEpisodesData: selectData.episodesNormalized,
              selectPromoData: selectData.promoNormalized,
            }, category
          ));
        }
      })
      .catch(
        e => console.log('ERROR GET MIX PAGES', e)
      );

  }
}
export function getMixPagesReducer(mixpages, category){
  return {
    type: types.GET_MIX_PAGES,
    payload: mixpages,
    category
  };
}

// SAVE SELECTED SERIALS
export function saveSelectedSerials(data){
  return {
    type: types.SAVE_SELECTED_SERIALS,
    payload: data,
  };
}

// SAVE SELECTED EPISODE (NAME)
export function saveSelectedEpisode(data){
  return {
    type: types.SAVE_SELECTED_EPISODE,
    payload: data,
  };
}
//ADD TOTAL LOAD IMAGES
export function saveSelectedEpisodes(episodes){
  return {
    type: types.SAVE_SELECTED_EPISODES,
    payload: episodes,
  };
}
// SAVE SELECTED EPISODE (NAME)
export function saveSelectedVideo(data){
  return {
    type: types.SAVE_SELECTED_VIDEO,
    payload: data,
  };
}

//SAVE IMAGE LOAD
export function onImageLoad(loadKey,uri){
  return {
    type: types.ADD_LOAD_IMAGE,
    payload: loadKey,
    uri
  };
}
//ADD TOTAL LOAD IMAGES
export function addTotalLoadImages(loadKey, uri){
  return {
    type: types.ADD_TOTAL_LOAD_IMAGES,
    payload: loadKey,
    uri
  };
}
//
export function resetLoadImages(loadKey){
  return {
    type: types.RESET_LOAD_IMAGES,
    payload: loadKey,
  };
}
//
export function saveNameSelectTab(nameTab){
  return {
    type: types.SAVE_NAME_SELECT_TAB,
    payload: nameTab,
  };
}
export function saveSelectRoute(pageCurrent){
  return {
    type: types.SAVE_SELECT_ROUTE,
    payload: pageCurrent,
  };
}


// <--- ACTION IN AUTH AND SETTING PROFILES --->

//SAVE SELECT SETTINGS
export function saveSelectSettings(selectSettings){
  return {
    type: types.SAVE_SELECT_SETTINGS,
    payload: selectSettings,
  };
}


