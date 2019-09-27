import * as actionTypes from './actionTypes';
import { filterUniqueObjectsById } from '../utils';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_CAMPAIGNS: {
      return {
        ...state,
        campaigns: filterUniqueObjectsById([
          ...state.campaigns,
          ...action.payload,
        ]),
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
