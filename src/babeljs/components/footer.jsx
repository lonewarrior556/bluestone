module.exports = React.createClass({

  displayName: 'Footer',

  getInitialState: function() {
    return {opacity: .1};
  },
  componentDidMount: function() {
    this.timeOut = setTimeout(this.setState.bind(this, {opacity: 1}), 500)
  },
  componentWillUnmount: function() {
    clearTimeout(this.timeOut);
  },
  handleClick: function(){
  },
  render: function() {
    return(
      <section id="footer" style={{backgroundColor:'white',opacity: this.state.opacity, transition: "opacity .5s ease"}}>
        <style>{`
            .footer-container{ position: relative;}
            .footer-text{ line-height:14px; text-align:justify; font-size: 11px; color: #282828; font-family: 'Open Sans', sans-serif; position: absolute; padding-top:15px; }
        `}</style>
      <div className="layout-fixed footer-container">
        <p className="footer-text">
            © KD 2017
          </p>
      </div>
    </section>
    );
  }
});
