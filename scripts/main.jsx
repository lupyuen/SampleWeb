/*
cd "C:\Users\Administrator\Documents\Visual Studio 2015\Projects\SampleWeb\scripts"
npm install --save react react-dom babelify babel-preset-react
browserify -t [ babelify --presets [ react ] ] app.jsx -o app.js
*/

"use strict";

const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');
const Dialog = require('material-ui/lib/dialog');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');

let MenuDetail = require('./menu_detail.jsx');

var responseData = {
    "status": "SUCCESS",
    "message": [
      "SUCCESS"
    ],
    "data": [
      {
          "id": "613",
          "product_id": "613",
          "outlet": "kmcafe",
          "type": "item",
          "image": "https://d21lq3parp0dpw.cloudfront.net/media/catalog/product/cache/1/small_image/500x500/040ec09b1e35df139433887a97daa66f/images/catalog/product/placeholder/small_image.jpg",
          "label": "Mushroom Melt Burger",
          "label2": "$9.00",
          "label3": ".",
          "quantity": null,
          "button": "Add To Cart",
          "value": 9
      }
    ],
    "modifiers": [
      {
          "id": "automatedtest01installationid2_613__52",
          "type": "radio",
          "image": "http://image.jpg",
          "label": "Meat Temp",
          "select_min": 1,
          "select_max": 1,
          "options": [
            {
                "id": "fmod179",
                "type": "radio",
                "image": "http://image.jpg",
                "label": "Well",
                "value": true,
                "postback": false,
                "_label": "ForcedModifier"
            },
            {
                "id": "fmod178",
                "type": "radio",
                "image": "http://image.jpg",
                "label": "Medium Well",
                "value": false,
                "postback": false,
                "_label": "ForcedModifier"
            },
            {
                "id": "fmod176",
                "type": "radio",
                "image": "http://image.jpg",
                "label": "Medium Rare",
                "value": false,
                "postback": false,
                "_label": "ForcedModifier"
            },
            {
                "id": "fmod177",
                "type": "radio",
                "image": "http://image.jpg",
                "label": "Medium",
                "value": false,
                "postback": false,
                "_label": "ForcedModifier"
            },
            {
                "id": "fmod175",
                "type": "radio",
                "image": "http://image.jpg",
                "label": "Rare",
                "value": false,
                "postback": false,
                "_label": "ForcedModifier"
            }
          ],
          "_id2": "l52",
          "_label": "ForcedModifierList"
      },
      {
          "id": "automatedtest01installationid2_613__21",
          "type": "radio",
          "image": "http://image.jpg",
          "label": "Burger/Sand Mods",
          "select_min": 1,
          "select_max": 1,
          "options": [
            {
                "id": "fmod54",
                "type": "radio",
                "image": "http://image.jpg",
                "label": "Bistro Sauce",
                "value": true,
                "postback": false,
                "_label": "ForcedModifier"
            },
            {
                "id": "fmod55",
                "type": "radio",
                "image": "http://image.jpg",
                "label": "Ketchup",
                "value": false,
                "postback": false,
                "_label": "ForcedModifier"
            },
            {
                "id": "fmod56",
                "type": "radio",
                "image": "http://image.jpg",
                "label": "Mayo",
                "value": false,
                "postback": false,
                "_label": "ForcedModifier"
            },
            {
                "id": "fmod50",
                "type": "radio",
                "image": "http://image.jpg",
                "label": "Lettuce",
                "value": false,
                "postback": false,
                "_label": "ForcedModifier"
            },
            {
                "id": "fmod51",
                "type": "radio",
                "image": "http://image.jpg",
                "label": "Tomato",
                "value": false,
                "postback": false,
                "_label": "ForcedModifier"
            },
            {
                "id": "fmod52",
                "type": "radio",
                "image": "http://image.jpg",
                "label": "Onion",
                "value": false,
                "postback": false,
                "_label": "ForcedModifier"
            },
            {
                "id": "fmod53",
                "type": "radio",
                "image": "http://image.jpg",
                "label": "Pickle",
                "value": false,
                "postback": false,
                "_label": "ForcedModifier"
            }
          ],
          "_id2": "l21",
          "_label": "ForcedModifierList"
      },
      {
          "id": "automatedtest01installationid2_613__55",
          "type": "radio",
          "image": "http://image.jpg",
          "label": "Combo?",
          "select_min": 1,
          "select_max": 1,
          "options": [
            {
                "id": "fmod188",
                "type": "radio",
                "image": "http://image.jpg",
                "label": "No",
                "value": true,
                "postback": true,
                "_label": "ForcedModifier"
            },
            {
                "id": "fmod187",
                "type": "radio",
                "image": "http://image.jpg",
                "label": "Yes",
                "value": false,
                "postback": true,
                "_label": "ForcedModifier",
                "_detour": "g20"
            }
          ],
          "_id2": "l55",
          "_label": "ForcedModifierList",
          "_detour": "g20"
      },
      {
          "id": "automatedtest01installationid2_613__7",
          "type": "checkbox",
          "image": "http://image.jpg",
          "label": "Sandwiches",
          "select_min": 0,
          "select_max": 11,
          "options": [
            {
                "id": "mod21",
                "type": "checkbox",
                "image": "http://image.jpg",
                "label": "Lettuce",
                "value": false,
                "postback": false,
                "_label": "Modifier"
            },
            {
                "id": "mod22",
                "type": "checkbox",
                "image": "http://image.jpg",
                "label": "Pickles",
                "value": false,
                "postback": false,
                "_label": "Modifier"
            },
            {
                "id": "mod23",
                "type": "checkbox",
                "image": "http://image.jpg",
                "label": "Tomato",
                "value": false,
                "postback": false,
                "_label": "Modifier"
            },
            {
                "id": "mod24",
                "type": "checkbox",
                "image": "http://image.jpg",
                "label": "Onion",
                "value": false,
                "postback": false,
                "_label": "Modifier"
            },
            {
                "id": "mod25",
                "type": "checkbox",
                "image": "http://image.jpg",
                "label": "Deli Mustard",
                "value": false,
                "postback": false,
                "_label": "Modifier"
            },
            {
                "id": "mod26",
                "type": "checkbox",
                "image": "http://image.jpg",
                "label": "Mayo",
                "value": false,
                "postback": false,
                "_label": "Modifier"
            },
            {
                "id": "mod27",
                "type": "checkbox",
                "image": "http://image.jpg",
                "label": "Salt",
                "value": false,
                "postback": false,
                "_label": "Modifier"
            },
            {
                "id": "mod28",
                "type": "checkbox",
                "image": "http://image.jpg",
                "label": "Pepper",
                "value": false,
                "postback": false,
                "_label": "Modifier"
            },
            {
                "id": "mod29",
                "type": "checkbox",
                "image": "http://image.jpg",
                "label": "Cheese",
                "value": false,
                "postback": false,
                "_label": "Modifier"
            },
            {
                "id": "mod33",
                "type": "checkbox",
                "image": "http://image.jpg",
                "label": "Bacon",
                "value": false,
                "postback": false,
                "_label": "Modifier"
            },
            {
                "id": "mod34",
                "type": "checkbox",
                "image": "http://image.jpg",
                "label": "Avocado",
                "value": false,
                "postback": false,
                "_label": "Modifier"
            }
          ],
          "_id2": "7",
          "_label": "ModifierCategory"
      }
    ]
};


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
        return (
        <div>
            <p>
                <table>
                    <tr>
                        <td>
                            <pre >
                            <code style={{width: "auto", float: "none", position: "relative", top: "0px", left: "0px"}}
                                  class="json">{ JSON.stringify(responseData, null, 2) }</code></pre>
                        </td>
                        <td>
                            <pre >
                            <code style={{width: "auto", float: "none", position: "relative", top: "0px", left: "0px"}}
                                  class="json">{ JSON.stringify(responseData, null, 2) }</code></pre>
                        </td>
                    </tr>
                </table>
            </p>                
            <MenuDetail data={ responseData } />
        </div>);
    },

    _handleTouchTap() {
        this.refs.superSecretPasswordDialog.show();
    },

});

module.exports = Main;

/*
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
