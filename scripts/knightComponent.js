'use strict';

var React = require('react/addons');

var imageStyle = {
  height: '100%',
  width: '100%'
}

var Knight = React.createClass({
  render: function() {
    return(
      <img style={imageStyle} src='/images/blackKnight.png'/>
    );
  }
});

module.exports = Knight;
