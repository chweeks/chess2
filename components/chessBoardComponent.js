'use strict';

var React = require('react/addons');
var Knight = require('./knightComponent');

var boardStyle = {
  margin: 'auto',
  width: '800px',
  height: '800px',
  border: 'solid',
  borderColor: 'grey',
  lineHeight: '0px',
  display: 'flex',
  flexWrap: 'wrap'
};

var Cell = React.createClass({displayName: "Cell",
  propTypes: {
    grey: React.PropTypes.bool
  },

  render: function() {
    var cellColour = this.props.grey ? "grey" : "white";

    return (
      React.createElement("div", {style: {
        width: "100px",
        height: "100px",
        backgroundColor: cellColour,
        borderWidth: "2px",
        borderColor: "grey",
        display: 'inline-flex'
      }}, 
      this.props.children
      )
    );
  }
});

var ChessBoard = React.createClass({displayName: "ChessBoard",

  componentDidMount: function() {
    $('.cell').droppable({
      drop: function(event, ui) {
        var knightId = $(ui.draggable).attr('id');
        var knightStyle = $(ui.draggable).attr('style');
        var knightSrc = $(ui.draggable).attr('src');
        var cell = $(this).attr('id');
        var knightHtml = '<img id='+knightId+' style='+knightStyle+' src='+knightSrc+' />'

        $(ui.draggable).remove();
        $('#' + cell).append(knightHtml);

        $('#knight').draggable({
          helper: 'clone'
        });
      }
    });
  },
  createCells: function(i) {
    //  alternates grey and white cells and doubles up every 8 cells
    var x = i % 8;
    var y = Math.floor(i / 8);
    var grey = (x + y) % 2 === 1;

    return (
      React.createElement("div", {className: "cell", key: i}, 
        React.createElement(Cell, {grey: grey}

        )
      )
    );
  },

  render: function() {
    var cells= [];
    for(let i=0; i<64; i++){
      cells.push(this.createCells(i))
    };
    return (
      React.createElement("div", {style: boardStyle}, 
        cells
      )
    );
  }
});

module.exports = ChessBoard;
