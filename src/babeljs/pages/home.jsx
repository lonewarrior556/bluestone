const Footer = require('../components/footer.jsx');

module.exports = React.createClass({

  displayName: 'Intro',

  getInitialState: function() {
    return {opacity: .1, website:""};
  },
  componentDidMount: function() {
    this.timeOut = setTimeout(this.setState.bind(this, {opacity: 1}), 500)
  },
  componentWillUnmount: function(){
    clearTimeout(this.timeOut);
  },
  handleClick: function(e){
    this.setState({website: e.target.textContent})
  },
  render: function() {
    return(
      <section id="home-page" className="main-tab" style={{opacity: this.state.opacity}}>
        <div className="layout-fixed">
          <h5>
            Create a basic prototype that will have the following parts:
          </h5>
          <ol>
            <li>
              List of all Products (home page)
              <ol style={{listStyleType:'circle'}}>
                <li>A simple vertical list of products. Each product name can be clicked which will take user to a “Product Detail” screen for the clicked item.</li>
              </ol>
            </li>
            <li>
              Product Detail Screen
              <ol style={{listStyleType:'circle'}}>
                <li>It will list Product details: name, number, description, images. All fields will be readonly. Images field will list all images as links.</li>
                <li>There will be an Update button. Clicking the button will:</li>
                <li>Remove / hide the Update button from the page.</li>
                <li>Enable edition of all fields of the currently displayed Product Detail.</li>
                <li>Two buttons will be added: Save and Cancel (Save will persist the changes and Cancel will discards all changes and disable edition).</li>
              </ol>
            </li>
          </ol>
        </div>
        <div className="ln-white-dark-light"></div>
        <div className="ln-white-dark-light"></div>
        <Footer/>
      </section>
    );
  }
});
