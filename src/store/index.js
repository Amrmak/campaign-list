import React, { useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  campaigns: [],
};

export const Store = React.createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>;
};
