import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import data from './testData';

ReactDOM.render(
  <App data={data} width={1300} height={300}/>,
  document.getElementById('root')
);
