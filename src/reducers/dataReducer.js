import * as types from '../constants/redux';
import {InitialState} from '../constants/InitialState';

export default function dataReducer(state = InitialState, action) {
  const {type, payload} = action;
  switch (type) {
    case types.GET_BEST_FILMS_BY_YEAR:
      return {
        ...state,
        bestFilmsByYear: payload,
      };
    case types.GET_ALL_GENRES:
      return {
        ...state,
        allGenres: payload,
      };
    case types.GET_FILM_BY_GENRES:
      return {
        ...state,
        filmsByGenres: payload,
      };




    case types.SAVE_SELECTED_CHANNEL:
      return {
        ...state,
        dataSelectedChannel: payload,
      };
    case types.GET_CATEGORIES:
      return {
        ...state,
        dataCategories: payload,
      };
    case types.SAVE_SELECTED_CATEGORIES:
      return {
        ...state,
        dataSelectedCategory: payload,
      };
    case types.GET_HEROES:
      return {
        ...state,
        // dataHeroes: payload,
        dataHeroes: {
          ...state.dataHeroes,
          [action.category]: payload,
        },
      };
    case types.GET_SERIES:
      return {
        ...state,
        dataSeries: payload,
      };
    case types.GET_EPISODES:
      return {
        ...state,
        dataEpisodes: payload,
      };
    case types.GET_MIX_PAGES:
      return {
        ...state,
        dataMixPages: {
          ...state.dataMixPages,
          [action.category]: payload,
        },
      };
    case types.SAVE_SELECTED_SERIALS:
      if(payload.numberTab === 'episodes_1'){
        return {
          ...state,
          dataSelectedSerialsFirstTab: payload,
        };
      }else{
        return {
          ...state,
          dataSelectedSerialsSecondTab: payload,
        };
      }

    case types.SAVE_SELECTED_EPISODE:
      return {
        ...state,
        dataSelectedEpisode: payload,
      };

    case types.SAVE_NAME_SELECT_TAB:
      return {
        ...state,
        tabNameAnimate: payload,
      };

    case types.SAVE_SELECTED_EPISODES:
      if(payload.numberTab === 'showPage_1'){
        return {
          ...state,
          dataSelectedShowPageFirstTab: payload,
        };
      }else{
        return {
          ...state,
          dataSelectedShowPageSecondTab: payload,
        };
      }
    case types.SAVE_SELECTED_VIDEO:
      return {
        ...state,
        video: payload,
      };
    case types.SAVE_SELECT_ROUTE:
      return {
        ...state,
        selectRoute: payload,
      };

    case types.ADD_LOAD_IMAGE:
      if (!state.imagesLoad[action.payload]) {
        state.imagesLoad[action.payload] = {
          images: {},
        }
      }
      return {
        ...state,
        imagesLoad: {
          ...state.imagesLoad,
          [action.payload]: {
            ...state.imagesLoad[action.payload],
            images: {
              ...state.imagesLoad[action.payload].images,
              [action.uri]: false,
            }
          }
        },
      };
    case types.ADD_TOTAL_LOAD_IMAGES:
      if (!state.imagesLoad[action.payload]) {
        state.imagesLoad[action.payload] = {
          images: {},
        }
      }
      return {
        ...state,
        imagesLoad: {
          ...state.imagesLoad,
          [action.payload]: {
            ...state.imagesLoad[action.payload],
            images: {
              ...state.imagesLoad[action.payload].images,
              [action.uri]: true,
            }
          }
        },
      };
    case types.RESET_LOAD_IMAGES:
      return {
        ...state,
        imagesLoad: {
          ...state.imagesLoad,
          [action.payload]: {
            fetchedImages: 0,
            totalImages: 0,
          }
        },
      };
    default:
      return state;
  }
}
