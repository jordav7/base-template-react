import React from 'react';
import ReactDOM from 'react-dom';
import App from './base/App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
//import $ from 'jquery';
window.jQuery = window.$ = $;
global.jQuery = $;
//js

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
require('jquery.inputmask/dist/jquery.inputmask.bundle');
require('bootstrap');
require('bootstrap-daterangepicker');
require('bootstrap-datepicker');
require('bootstrap-colorpicker');
require('bootstrap-timepicker');