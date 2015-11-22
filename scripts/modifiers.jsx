//  Show the Modifiers for the menu item, which consists of a list of Radio Groups or Checkbox Groups.
"use strict";

const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');
const Dialog = require('material-ui/lib/dialog');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');

const Avatar = require('material-ui/lib/avatar');
const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardExpandable = require('material-ui/lib/card/card-expandable');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');

const Checkbox = require('material-ui/lib/checkbox');
const RadioButton = require('material-ui/lib/radio-button');
const RadioButtonGroup = require('material-ui/lib/radio-button-group');
const Toggle = require('material-ui/lib/toggle');

let RadioGroup = require('./radio_group.jsx');
let CheckboxGroup = require('./checkbox_group.jsx');

const Modifiers = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object,
    },

    getInitialState () {
        return {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
        };
    },

    getChildContext() {
        return {
            muiTheme: this.state.muiTheme,
        };
    },

    componentWillMount() {
        let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
            accent1Color: Colors.deepOrange500,
        });
        this.setState({muiTheme: newMuiTheme});
    },

    render() {
        //  Render the list of Modifiers for the menu item.  this.props.data contains:
        //  [ optionGroup1, optionGroup2, ... ]
        var index = 0;
        var modifierNodes = this.props.data.map(function (optionGroup) {
            if (optionGroup.type == "radio")
                return (<RadioGroup index={ index++ } data={ optionGroup } />);
            else
                return (<CheckboxGroup index={ index++ } data={ optionGroup } />);
});
        return (
        <div>
            { modifierNodes }
        </div>);
},

_handleTouchTap() {
    this.refs.superSecretPasswordDialog.show();
},

});

module.exports = Modifiers;
