'use strict';

var React = require('react/addons');

var imageStyle = {
  height: '100%',
  width: '100%'
}

var Knight = React.createClass({displayName: "Knight",
  render: function() {
    return(
      React.createElement("img", {style: imageStyle, src: "/images/blackKnight.png"})
    );
  }
});

module.exports = Knight;
