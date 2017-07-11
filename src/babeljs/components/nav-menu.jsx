const nav = require('../functions/nav-function.js');
const MenuDropdown = require('./menu-dropdown.jsx');
const backgroundGradient = require('../functions/background-gradient-function.js');

var map = { 'about'    : 'About Us',
            'services' : 'Our Services'}

var NavMenu = React.createClass({
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
    this.setState({servicesOpen:true});
  },
  closeServices: function(){
    this.setState({servicesOpen:false});
  },

  render: function() {
    var imagePanel, height, imageHeight, leftImage, rightImage;
    var servicesMenu = this.state.servicesOpen ? <MenuDropdown top="30px" right="0" /> : null;

    if(this.state.page === 'home'){
       height = 290;
       imageHeight = 250;
       rightImage  ={ width: 587 }
       leftImage   ={ url: '/img/fk-home-logo.png', width: 276}
       imagePanel = <div className="absolute filled">
                       <div style={{height:'250px', lineHeight:'250px', fontSize:'60px', textAlign: 'center'}}>Product List Application</div>
                     </div>;
    } else{
      height = 212;
      imageHeight = 136;
      rightImage  ={ width: 0 }
      leftImage ={ url: '/img/logo-color.png', width: 872 }
      imagePanel = <div className="absolute filled" style={{background: 'rgba(255,255,255,.1)',  padding: '.5% .5% 25px'}}>
                     <div className="left-img imag"><div className="inside-text">{map[this.state.page]}</div></div>
                   </div>;
    }
    return (
      <section id="grad">
        <style>
          {`
            .${this.state.page}{ color: #188dcd;}
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
            #menu-bar{
              border-bottom: 2px solid white;
              margin-bottom: 12px;
              position: relative;
              font-size:0px;
            }
            #menu-bar > li{
              float: left;
              padding: 2px 5px;
              margin: 0 30% 0 0;
              font-size: 20px
            }

            #menu-bar > li:first-child{ margin-left:0; padding-left:0}
            #menu-bar > li:last-child{ margin-right:0; padding-right:0}
            #menu-bar > li:not(.${this.state.page}):hover{ color: #C5B358 }
            #main-img-bar{ position:relative; transition: opacity .5s; }

            .left-img{
              background-image: url(${leftImage.url});
              width: ${leftImage.width}px;
              float: left;
            }
            .right-img{
              width: ${rightImage.width}px;
              float: right;
            }
            .imag{
              height: ${imageHeight}px;
              background-repeat: no-repeat;
              background-size: contain;
            }
            .inside-text{
              position: absolute;
              top: 80px;
              right: 0px;
              width: 253px;
              font-size: 26px;
              font-style: italic;
            }
          `}
        </style>
        <div className="grad-container layout-fixed">
          <ul className="row" id="menu-bar">
            <li className="nav-item"><a href="/">HOME</a> </li>
            <li className="nav-item about"   ><a href="/list">PRODUCT LIST</a></li>
            <li className="nav-item services" onMouseEnter={this.openServices} onMouseLeave={this.closeServices}><a>DETAILS </a>{servicesMenu}</li>
          </ul>
          <div className="row" id="main-img-bar" style={{opacity: this.state.dim}}>
            {imagePanel}
          </div>
        </div>

      </section>
    );
  }
});



module.exports = NavMenu;
