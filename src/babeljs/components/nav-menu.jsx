const nav = require('../backbone/nav-function.js');
const React = require('react');

var NavMenu = React.createClass({

  // propTypes: { links: React.PropTypes.array },

  getInitialState: function() {
    return null;
  },
  handleClick: function(e) {
  },
  render: function() {
    return (
      <div>
        <a href="front" onClick={nav}>Front</a><br/>
        <a href="back" onClick={nav}>Back</a><br/>
        <a href="/" onCLick={nav}>Home</a><br/>
        <a href="http://konrad-dudziak.com">Konrad Dudziak</a>
      </div>
    );
  }
});



module.exports = NavMenu;
