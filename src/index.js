import React from 'react';
import ReactDOM from 'react-dom';
import { Grommet } from 'grommet';
import App from './App';
// import * as serviceWorker from './serviceWorker';

const theme = {
  global: {
    colors: {
      brand: '#0090ff',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
  table: {
    body: {
      align: 'center',
      pad: { horizontal: 'large', vertical: 'small' },
      border: 'horizontal',
    },
    header: {
      align: 'center',
      border: 'bottom',
      fill: 'horizontal',
      pad: { horizontal: 'large', vertical: 'small' },
      verticalAlign: 'bottom',
      background: {
        color: 'brand',
        opacity: 'strong',
      },
    },
  },
};

const Root = () => (
  <Grommet theme={theme} full>
    <App />
  </Grommet>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
