import React from 'react';
import ReactDOM from 'react-dom';

import './less/main.less';
import App from './components/app/app';

document.addEventListener('DOMContentLoaded', showApp);

function showApp() {
  ReactDOM.render(<App />, document.getElementsByTagName('main')[0]);
}
