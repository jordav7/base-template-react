import React from 'react';
import ReactDOM from 'react-dom';
import App from './base/App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
//import $ from 'jquery';
window.jQuery = window.$ = $;
global.jQuery = $;
//js
require('jquery.inputmask/dist/jquery.inputmask.bundle');


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();