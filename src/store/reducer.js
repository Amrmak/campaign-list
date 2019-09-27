import * as actionTypes from './actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_CAMPAIGNS: {
      return {
        ...state,
        campaigns: [...state.campaigns, ...action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
