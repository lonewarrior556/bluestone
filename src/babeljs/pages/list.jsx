const Footer = require('../components/footer.jsx');

module.exports = React.createClass({
  propTypes: {
    baseObjects: React.PropTypes.array.isRequired,
  },
  displayName: 'Listpage',

  getInitialState: function() {
    return {opacity: .1};
  },
  componentDidMount: function() {
    this.timeOut = setTimeout(this.setState.bind(this, {opacity: 1}), 500)
  },
  componentWillUnmount: function(){
    clearTimeout(this.timeOut);
  },
  render: function() {

    let list = []
    for (var i = 0; i < this.props.baseObjects.length; i++) {
      let obj = this.props.baseObjects[i];
      list.push(<li key={i} style={{padding:'10px', borderBottom:'1px solid black'}}>
                  <a className="product-link" href={`/details/${obj.name}`}>{obj.name}</a>
                  &nbsp;&nbsp;<span>{obj.description}</span>
                </li>)
    }

    return(
      <section id="about-page" className="main-tab" style={{opacity: this.state.opacity}}>
        <div className="ln-white-dark-light"></div>
        <div className="layout-fixed">
          <ul style={{width:'800px', margin:'0 auto', padding:'40px 0'}}>
            {list}
          </ul>
        </div>
        <div className="ln-white-dark-light"></div>
        <Footer/>
      </section>
    );
  }
});