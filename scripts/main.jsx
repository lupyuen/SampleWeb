/*
cd "C:\Users\Administrator\Documents\Visual Studio 2015\Projects\SampleWeb\scripts"
browserify -t [ babelify --presets [ react ] ] app.jsx -o app.js
*/

/** In this file, we create a React component which incorporates components provided by material-ui */
"use strict";

const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');
const Dialog = require('material-ui/lib/dialog');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');

const Main = React.createClass({
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
        let containerStyle = {
            textAlign: 'center',
            paddingTop: '200px',
        };
        let standardActions = [
          { text: 'Okay' },
        ];
        return (<div style={containerStyle}>
            <Dialog title="Super Secret Password"
                    actions={standardActions}
                    ref="superSecretPasswordDialog">
                1-2-3-4-5
            </Dialog>
            <h1>material-ui</h1>
            <h2>example project</h2>
            <RaisedButton label="Super Secret Password" primary={true}
                          onTouchTap={this._handleTouchTap}
                          focusRippleColor="rgba(0, 0, 0, 0.87)" />
        </div>);
    },

    _handleTouchTap() {
        this.refs.superSecretPasswordDialog.show();
    },

});

module.exports = Main;

/*
//  Needed for onTouchTap. Can go away when react 1.0 is released. https://github.com/zilverline/react-tap-event-plugin
let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const React = require('react');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

const RaisedButton = require('material-ui/lib/raised-button');
const Dialog = require('material-ui/lib/dialog');
//const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');
const Checkbox = require('material-ui/lib/checkbox');
const RadioButton = require('material-ui/lib/radio-button');
const RadioButtonGroup = require('material-ui/lib/radio-button-group');
const Toggle = require('material-ui/lib/toggle');
const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardExpandable = require('material-ui/lib/card/card-expandable');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');


var CommentBox = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function () {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    handleClick: function (event) {
        this.setState({ liked: !this.state.liked });
    },

    render: function () {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <div>
                <Card>
                    <CardText>
                        <p onClick={this.handleClick}>
                            You {text} this. Click to toggle.
                        </p>
                        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                            <RadioButton value="light"
                                         label={text}
                                         style={{marginBottom:16}} 
                                         onClick={this.handleClick} />
                            <RadioButton value="not_light"
                                         label="light speed too slow"
                                         style={{marginBottom:16}} 
                                         onClick={this.handleClick} />
                            <RadioButton value="ludicrous"
                                         label="go to ludicrous speed"
                                         style={{marginBottom:16}}
                                         disabled={true} 
                                         onClick={this.handleClick} />
                        </RadioButtonGroup>
                    </CardText>
                </Card>
            </div>
      );
    }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
*/

/*
const MyAwesomeReactComponent = React.createClass({
    render() {
        return (
            <RaisedButton label="Default" />
        );
    },
});

module.exports = MyAwesomeReactComponent;
*/

/*
<div className="commentBox">
Hello, world! I am a CommentBox.
</div>
*/
