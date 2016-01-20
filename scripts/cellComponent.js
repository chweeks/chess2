'strict'

var React = require('react/addons');

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

module.exports = Cell;
