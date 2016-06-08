const nav = require('../functions/nav-function.js');
const ImgSlider = require('./image-slider.jsx');
const MenuDropdown = require('./menu-dropdown.jsx');
const backgroundGradient = require('../functions/background-gradient-function.js');

var map = { 'about'    : 'About Us',
            'services' : 'Our Services',
            'newsroom' : 'Newsroom',
            'careers'  : 'Career Center',
            'contact'  : 'Contact Us'   }

var mainImgUrls = ['/img/main-slider_trust.png', '/img/main-slider_service.png', '/img/main-slider_best-sfr3.png'];

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
    var servicesMenu = this.state.servicesOpen ? <MenuDropdown top="25px" left="250px" /> : null;

    if(this.state.page === 'home'){
       height = 290;
       imageHeight = 250;
       rightImage  ={ width: 587 }
       leftImage   ={ url: '/img/fk-home-logo.png', width: 276}
       imagePanel = <div className="absolute filled">
                       <div className="left-img imag"></div>
                       <ImgSlider classString="right-img imag" urls={mainImgUrls}/>
                     </div>;
    } else{
      height = 174;
      imageHeight = 136;
      rightImage  ={ width: 0 }
      leftImage ={ url: '/img/inside-banner.png', width: 872 }
      imagePanel = <div className="absolute filled">
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
              float:left;
              padding: 2px 5px;
              margin: 0 47px 0 0;
              font-size:15px;
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
            <li className="nav-item about"   ><a onClick={nav.bind(null,'about'   )}>ABOUT US     </a></li>
            <li className="nav-item services" onMouseEnter={this.openServices} onMouseLeave={this.closeServices}><a onClick={nav.bind(null,'services')}>OUR SERVICES </a>{servicesMenu}</li>
            <li className="nav-item newsroom"><a onClick={nav.bind(null,'newsroom')}>NEWSROOM     </a></li>
            <li className="nav-item careers" ><a onClick={nav.bind(null,'careers' )}>CAREER CENTER</a></li>
            <li className="nav-item contact" ><a onClick={nav.bind(null,'contact' )}>CONTACT US   </a></li>
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
