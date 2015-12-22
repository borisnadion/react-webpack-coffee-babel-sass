// npm run build
// npm run start

var React = require('react');
var ReactDom = require('react-dom');
var App = require("components/app");

require("styles/main")

var ma = document.createElement('div');
document.body.appendChild(ma);
ReactDom.render(<App />, ma);
