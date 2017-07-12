const MenuDropdown = require('./menu-dropdown.jsx');
const backgroundGradient = require('../functions/background-gradient-function.js');

module.exports = React.createClass({
  getInitialState: function() {
    return { page : (window.location.pathname.slice(1)||'home'), dim: 1 }
  },
  changeRoute: function(){
    this.setState({dim:.1})
    setTimeout(this.setState.bind(this,{page: this.props.emitter.route, dim:1}),500)
  },
  componentDidMount: function(){
    this.props.emitter.on('route', this.changeRoute);
  },
  componentWillUnmount: function(){
    this.props.emitter.removeListener('route', this.changeRoute);
  },
  openServices: function(){
    this.setState({details:true});
  },
  closeServices: function(){
    this.setState({details:false});
  },

  render: function() {
    let imagePanel, height, imageHeight, image;
    let dropdownMenu = this.state.details ? <MenuDropdown top="30px" right="0" /> : null;

    if(this.state.page === 'home'){
       height = 290;
       image   ={ url: '/img/fk-home-logo.png', width: 276}
       imagePanel = <div className="absolute filled">
                       <div style={{height:'250px', lineHeight:'250px', fontSize:'60px', textAlign: 'center'}}>Product List Application</div>
                     </div>;
    } else if (this.state.page === 'list'){
      height = 212;
      imageHeight = 136;
      image ={ url: '/img/p1.ashx', width: 872 }
      imagePanel = <div className="absolute filled" style={{background: 'rgba(255,255,255,.1)',  padding: '.5% .5% 25px'}}>
                     <div className="icon-img imag"></div>
                   </div>;
    } else{
      height = 212;
      imageHeight = 136;
      image ={ url: '/img/details.png', width: 872 }
      imagePanel = <div className="absolute filled" style={{background: 'white',  padding: '.5% .5% 25px'}}>
                     <div className="icon-img"></div>
                   </div>;
    }
    return (
      <section id="grad">
        <style>
          {`
            #grad {
              font-family: 'Droid Serif', serif;
              font-size : 15px;
              ${backgroundGradient('#000e15','#0b435e')};
              letter-spacing: 1px;
              color: white;
            }
            #grad > .grad-container{
              padding:18px 14px 14px 11px;
              overflow: hidden;
              height: ${height}px;
              transition: height 1s ease;
            }
            .icon-img{
              background-image: url(${image.url});
              width: ${image.width}px;
              float: left;
              height: ${imageHeight}px;
              background-repeat: no-repeat;
              background-size: 275px;
              background-position-x: 48%;
              background-position-y: 50%;
            }
          `}
        </style>
        <div className="grad-container layout-fixed">
          <ul className="row" id="menu-bar">
            <li className="nav-item"><a href="/">HOME</a> </li>
            <li className="nav-item about" ><a href="/list">PRODUCT LIST</a></li>
            <li className="nav-item services" onMouseEnter={this.openServices} onMouseLeave={this.closeServices}><a>DETAILS </a>{dropdownMenu}</li>
          </ul>
          <div className="row" id="main-img-bar" style={{opacity: this.state.dim}}>
            {imagePanel}
          </div>
        </div>

      </section>
    );
  }
});
