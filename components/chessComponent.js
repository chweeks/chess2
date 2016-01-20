'use strict';

var React = require('react/addons');
var Knight = require('components/knightComponent');
var $ = require('node_modules/jquery/dist/jquery');
require('node_modules/jquery-ui/jquery-ui');

var whiteCellStyle = {
  width: '100px',
  height: '100px',
  border: 'solid',
  borderWidth: '2px',
  borderColor: 'grey',
  backgroundColor: 'white',
  display: 'inline-flex'
};

var greyCellStyle = {
  width: '100px',
  height: '100px',
  border: 'solid',
  borderWidth: '2px',
  borderColor: 'grey',
  backgroundColor: 'grey',
  display: 'inline-flex'
};

var boardStyle = {
  margin: 'auto',
  width: '806px',
  height: '806px',
  border: 'solid',
  borderColor: 'grey',
  lineHeight: '0px'
};

var ChessBoard = React.createClass({displayName: "ChessBoard",
  render: function() {
    return (
      React.createElement("div", {style: boardStyle}, 
        React.createElement("div", {style: greyCellStyle}, 
          React.createElement(Knight, null)
        ), 
        React.createElement("div", {style: whiteCellStyle}
        )
      )
    );
  }
});

module.exports = ChessBoard;
