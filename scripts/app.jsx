"use strict";

(function () {

    var data = {
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
    ReactDOM.render(<MenuDetail data={ data } />, document.getElementById('app'));

})();
