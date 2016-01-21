'use strict';

var React = require('react/addons');
var $ = require('../node_modules/jquery/dist/jquery');
require('../node_modules/jquery-ui/jquery-ui');

var imageStyle = {
  height: '100px',
  width: '100px'
}

var Knight = React.createClass({
  componentDidMount: function() {
    $('#knight').draggable({
      helper: 'clone'
    });
  },

  render: function() {
    return(
      <img id='knight' style={imageStyle} src='/images/blackKnight.png'/>
    );
  }
});

module.exports = Knight;
