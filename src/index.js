import React from 'react';
import ReactDOM from 'react-dom';
import App from './base/App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery/dist/jquery.min';
//import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
//js

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();