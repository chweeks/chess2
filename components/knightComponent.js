'use strict';

var React = require('react/addons');
var $ = require('node_modules/jquery/dist/jquery');
require('node_modules/jquery-ui/jquery-ui');

var imageStyle = {
  height: '100%',
  width: '100%'
}

var Knight = React.createClass({displayName: "Knight",
  componentDidMount: function() {
    $('#knight').draggable({

    });
  },
  render: function() {
    return(
      React.createElement("img", {id: "knight", style: imageStyle, src: "/images/blackKnight.png"})
    );
  }
});

module.exports = Knight;
