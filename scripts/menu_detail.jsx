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
        return (
        <Card>
            <AppBar title="Menu Item"
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                iconElementRight={
                <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}>
                    <MenuItem primaryText="Refresh" />
                    <MenuItem primaryText="Help" />
                    <MenuItem primaryText="Sign out" />
                </IconMenu>} />
            <CardMedia>
                <img src="http://lorempixel.com/600/337/nature/"/>
            </CardMedia>
            <CardHeader title="Menu Item"
                  subtitle="Subtitle"
                  avatar={<Avatar>A12</Avatar>} />
            <CardText>
                <p>Description</p>
                <Modifiers />
            </CardText>
        </Card>);
    },

    _handleTouchTap() {
        this.refs.superSecretPasswordDialog.show();
    },

});

module.exports = MenuDetail;
