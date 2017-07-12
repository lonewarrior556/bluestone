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
    //transition effects
    setTimeout(this.setState.bind(this, {opacity: 1}), 500)
  },
  render: function() {
    //update load from save or defaults
    let items = JSON.parse(localStorage["data"] || 'null') || this.props.baseObjects;
    let list = []
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      list.push(<li key={i} style={{padding:'10px', borderBottom:'1px solid black'}}>
                  <a className="product-link" href={`/details/${i}`}>{item.name}</a>
                  &nbsp;&nbsp;<span>{item.description}</span>
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
