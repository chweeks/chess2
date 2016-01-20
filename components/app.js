'use strict';

var React = require('react');
var ChessBoard = require('components/chessBoardComponent');

var knightPosition = [1, 0];

React.render(React.createElement(ChessBoard, {knightPosition: knightPosition}), document.getElementById('view'));
