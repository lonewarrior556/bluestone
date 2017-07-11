const backgroundGradient = require('../functions/background-gradient-function.js');


module.exports = React.createClass({
  displayName: 'menuDropdown',
  propTypes: {  top:   React.PropTypes.string,
               right:  React.PropTypes.string   },

  getInitialState: function() {
    return {state: 'menu-closed'};
  },
  componentDidMount: function() {
    this.timeOut = setTimeout(this.setState.bind(this, { state: 'menu-opened' } ), 50)
  },
  componentWillUnmount: function() {
    clearTimeout(this.timeOut);
  },
  render: function() {
    return(
        <div style={{ position: 'absolute', top: this.props.top, right: this.props.right, zIndex: 100}}>
            <style>{`
                #secret{
                  transition: max-height .5s ease-in;
                  overflow: hidden;
                  border-radius: 2px;
                }
                #secret > li{
                  ${backgroundGradient('#000e15','#0b435e', 'radial')};
                  border-width: 0 1px 2px 1px;
                  border-style: solid;
                  border-color: #0b435e;
                  color: white;
                  padding: 5px 15px;
                }
                #secret > li:hover{
                  ${backgroundGradient('#0b435e','#000e15', 'radial')};
                  color: #C5B358;
                }
                .menu-closed{ max-height:0px; }
                .menu-opened{ max-height: 500px; }

              `}</style>
            <ul id="secret" className={`${this.state.state}`}>
              <li><a href="#">Rental Finance</a></li>
              <li><a href="#">CRE Finance</a></li>
            </ul>
        </div>
    );
  }
});
