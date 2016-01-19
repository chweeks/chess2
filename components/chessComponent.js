'use strict';

var React = require('react/addons');
var ChessBoard = React.createClass({displayName: "ChessBoard",
  render: function() {
    return (
      React.createElement("div", null, 
      "ChessBoard"
      )
    );
  }
});
module.exports = ChessBoard;
