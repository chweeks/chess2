jest.dontMock('../scripts/chessComponent.js');
describe('ChessBoard', function() {

  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var Chessboard;

  beforeEach(function() {
    ChessBoard = require('../scripts/chessComponent.js');
  });

  it('displays the chessboard', function() {
    var chessBoard= TestUtils.renderIntoDocument (<ChessBoard /> );
    expect(TestUtils.isCompositeComponent(chessBoard)).toBeTruthy();
  });

});
