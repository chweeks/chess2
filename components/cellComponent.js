'strict'

var React = require('react/addons');

var Cell = React.createClass({displayName: "Cell",
  propTypes: {
    grey: React.PropTypes.bool
  },

  render: function() {
    var cellColour = this.props.grey ? "grey" : "white";

    return (
      React.createElement("div", {id: this.props.id, className: "cell", style: {
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

module.exports = Cell;
