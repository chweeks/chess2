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

var Cell = React.createClass({
  propTypes: {
    grey: React.PropTypes.bool
  },

  render: function() {
    var cellColour = this.props.grey ? "grey" : "white";

    return (
      <div id={this.props.id} className='cell' style={{
        width: "100px",
        height: "100px",
        backgroundColor: cellColour,
        borderWidth: "2px",
        borderColor: "grey",
        display: 'inline-flex'
      }}>
      {this.props.children}
      </div>
    );
  }
});

var ChessBoard = React.createClass({

  propTypes: {
    id: React.PropTypes.number,
    knightPosition: React.PropTypes.arrayOf(React.PropTypes.number)
  },

  componentDidMount: function() {
    $('.cell').droppable({
      drop: function(event, ui) {
        //transfers knight image from one div to another
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

    var knightX = this.props.knightPosition[0];
    var knightY = this.props.knightPosition[1];

     var knight = (x==knightX && y==knightY) ? <Knight /> : null

    return (
      <Cell id={i} grey={grey}>
        {knight}
      </Cell>
    );
  },

  render: function() {
    var cells= [];
    for(let i=0; i<64; i++){
      cells.push(this.createCells(i))
    };
    return (
      <div style={boardStyle}>
        {cells}
      </div>
    );
  }
});

module.exports = ChessBoard;
