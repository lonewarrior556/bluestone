const Promos = require('../components/promos.jsx');
const Footer = require('../components/footer.jsx');

module.exports = React.createClass({

  displayName: 'Servicespage',

  getInitialState: function() {
    return {opacity: .1};
  },
  componentDidMount: function() {
    setTimeout(this.setState.bind(this, {opacity: 1}), 500)
  },
  handleClick: function(){
  },
  render: function() {
    return(
      <section id="services-page" className="main-tab" style={{opacity: this.state.opacity}}>
        <div className="layout-fixed">
            this is the services page
        </div>
        <div className="ln-white-dark-light"></div>
        <Promos/>
        <div className="ln-white-dark-light"></div>
        <Footer/>
      </section>
    );
  }
});
