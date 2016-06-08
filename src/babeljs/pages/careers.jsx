const Promos = require('../components/promos.jsx');
const Footer = require('../components/footer.jsx');

module.exports = React.createClass({

  displayName: 'Careerspage',

  getInitialState: function() {
    return {opacity: .1};
  },
  componentDidMount: function() {
    this.timeOut = setTimeout(this.setState.bind(this, {opacity: 1}), 500)
  },
  componentWillUnmount: function(){
    clearTimeout(this.timeOut);
  },
  handleClick: function(){
  },
  render: function() {
    return(
      <section id="careers-page" className="main-tab" style={{opacity: this.state.opacity}}>
        <div className="layout-fixed">
            this is the careers page
        </div>
        <div className="ln-white-dark-light"></div>
        <Promos/>
        <div className="ln-white-dark-light"></div>
        <Footer/>
      </section>
    );
  }
});
