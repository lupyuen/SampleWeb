//  Show the menu item detail, which consists of the menu item info and the modifiers.
"use strict";

const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');
const Dialog = require('material-ui/lib/dialog');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');

const AppBar = require('material-ui/lib/app-bar');
const IconButton = require('material-ui/lib/icon-button');
const IconMenu = require('material-ui/lib/menus/icon-menu');
const MenuItem = require('material-ui/lib/menus/menu-item');
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

let Modifiers = require('./modifiers.jsx');

const MenuDetail = React.createClass({
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
        //  Render the menu item detail.  this.props.data contains:
        //  { data=[ {label, label2, label3, image, ...} ], modifiers=[ ... ] }
        var dataRecord = this.props.data.data[0];
        console.log("status=", this.props.data.status);
        return (
        <Card>
            <AppBar title={ dataRecord.label }
                iconClassNameRight="muidocs-icon-navigation-expand-more" />
            <CardHeader title={ dataRecord.label }
                  subtitle={ dataRecord.label2 } 
                  avatar={ <Avatar src={ dataRecord.image } /> }
            />
            <CardText>
                <p>{ dataRecord.label3 }</p>
                <Modifiers data={ this.props.data.modifiers } />
            </CardText>
        </Card>);
    },

    _handleTouchTap() {
        this.refs.superSecretPasswordDialog.show();
    },

});

module.exports = MenuDetail;

