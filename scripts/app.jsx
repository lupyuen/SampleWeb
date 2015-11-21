"use strict";

(function () {
    let React = require('react');
    let ReactDOM = require('react-dom');
    let injectTapEventPlugin = require('react-tap-event-plugin');
    let Main = require('./main.jsx'); // Our custom react component
    let MenuDetail = require('./menu_detail.jsx');
    let Modifiers = require('./modifiers.jsx');
    let RadioGroup = require('./radio_group.jsx');
    //let CheckboxGroup = require('./checkbox_group.jsx');

    //Needed for React Developer Tools
    window.React = React;

    //Needed for onTouchTap
    //Can go away when react 1.0 release
    //Check this repo:
    //https://github.com/zilverline/react-tap-event-plugin
    injectTapEventPlugin();

    // Render the main app react component into the app div.
    // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
    ReactDOM.render(<MenuDetail />, document.getElementById('app'));

})();
