//  Show the group of radio buttons.
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

const RadioGroup = React.createClass({
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
        //  Render the group of radio buttons.  this.props.data contains:
        //  { id, label, select_min, select_max, options: [ { id, label, value, postback }, ... ] }
        var dataRecord = this.props.data;
        var valueSelected = null;

        var marker = ".....";
        var code = JSON.parse(JSON.stringify(dataRecord));
        code.options[0] = marker;
        code.options[code.options.length - 1] = marker;
        code = JSON.stringify(code, null, 2);
        var pos = code.indexOf(marker);
        var codeBegin = code.substr(0, pos - 1) + marker;
        var pos = code.indexOf(marker, pos + marker.length);
        var codeEnd = marker + code.substr(pos + marker.length + 1);

        var optionNodes = dataRecord.options.map(function (option) {
            var code2 = JSON.stringify(option, null, 2);
            if (option.value == true) valueSelected = option.id;
            return (
            <RadioButton value={ option.id } label="" style={{marginBottom: 16}}>
                <div style={{position: "relative", top: "40px", left: "50px"}}>
                    { option.label + (option.postback ? " (postback)" : "") }
                </div>
                <pre><code class="json">{ code2 }</code></pre>
            </RadioButton>);
        });
        return (
        <Card>
            <CardHeader title={ dataRecord.label }
                  subtitle={ "Select min " + dataRecord.select_min + ", max " + dataRecord.select_max }
                  avatar={<Avatar>{ this.props.index }</Avatar>} />
            <CardText>
                <pre><code class="json">{ codeBegin }</code></pre>
                <RadioButtonGroup name={ dataRecord.id } valueSelected={ valueSelected }>
                    { optionNodes }
                </RadioButtonGroup>
                <pre><code class="json">{ codeEnd }</code></pre>
            </CardText>
        </Card>);
        },

_handleTouchTap() {
    this.refs.superSecretPasswordDialog.show();
},

});

module.exports = RadioGroup;

/*
                <Checkbox name="checkboxName1" value="checkboxValue1" label="went for a run today" />
                <Checkbox name="checkboxName2" value="checkboxValue2" label="fed the dog" defaultChecked={true} />
*/