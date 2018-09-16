import * as types from '../constants/redux';
import {InitialState} from '../constants/InitialState';

export default function authReducer(state = InitialState, action) {
  const {type, payload} = action;
  switch (type) {

    case types.SAVE_SELECT_SETTINGS:
      return {
        ...state,
        selectSettings: payload,
      };

    default:
      return state;
  }
}
