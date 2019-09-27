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
    case actionTypes.SET_SEARCH_FILTER: {
      return {
        ...state,
        filters: {
          ...state.filters,
          name: action.payload,
        },
      };
    }
    case actionTypes.SET_START_DATE: {
      return {
        ...state,
        filters: {
          ...state.filters,
          startDate: action.payload,
        },
      };
    }
    case actionTypes.SET_END_DATE: {
      return {
        ...state,
        filters: {
          ...state.filters,
          endDate: action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
