'use strict';

var React = require('react/addons');
var Knight = require('./knightComponent');

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

var ChessBoard = React.createClass({

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
  render: function() {
    return (
      <div style={boardStyle}>
        <div className='cell' id='cell1' style={greyCellStyle}>
          <Knight />
        </div>
        <div className='cell' id='cell2' style={whiteCellStyle}>
        </div>
      </div>
    );
  }
});

module.exports = ChessBoard;
