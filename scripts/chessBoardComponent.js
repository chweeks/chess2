'use strict';

var React = require('react/addons');
var Cell = require('./cellComponent')
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

function validMove(x, y, newX, newY){

  return ((Math.abs(newX - x) == 2 && (Math.abs(newY - y) == 1)) ||
          (Math.abs(newY - y) == 2 && (Math.abs(newX - x) == 1)) )
};

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
        var knightHtml = '<img id='+knightId+' style='+knightStyle+' src='+knightSrc+' />'

        // accessing current knights position
        var knightPosition = $(ui.draggable).parent().data('pos').split(',');
        var x = parseInt(knightPosition[0]);
        var y = parseInt(knightPosition[1]);

        // accessing prospective position
        var cell = $(this).attr('id');
        var cellPosition = $(this).data('pos').split(',');
        var newX = parseInt(cellPosition[0]);
        var newY = parseInt(cellPosition[1]);

        if(validMove(x, y, newX, newY)){

          $(ui.draggable).remove();
          $('#' + cell).append(knightHtml)

          $('#knight').draggable({
            helper: 'clone'
          });
        };
      }
    });
  },

  createCells: function(i) {
    //  alternates grey and white cells and doubles up every 8 cells
    var x = i % 8;
    var y = Math.floor(i / 8);
    var grey = (x + y) % 2 === 1;

    // renders knight within cell matching the given position
    var knightX = this.props.knightPosition[0];
    var knightY = this.props.knightPosition[1];
    var knight = (x==knightX && y==knightY) ? <Knight /> : null

    return (
      <Cell id={i} grey={grey} position={[x,y]}>
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
