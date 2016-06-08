
module.exports = React.createClass({

  displayName: 'Promos',

  getInitialState: function() {
    return {};
  },
  showImg: function(img) {
    var obj={};
    obj[img] = 1;
    this.setState(obj);
  },
  hideImg: function(img) {
    var obj={};
    obj[img] = 0;
    this.setState(obj);
  },
  render: function() {
    return(
      <div id="promos-contianer" className="layout-fixed clear">
        <style>{`

          .promo{ float:left; width:250px;}
          .promo-title{
            color: #09384e;
            font-size: 15.5px;
            font-family: 'Droid Serif', serif;
            letter-spacing: -.9px;
            margin-bottom: 5px;
          }
          .promo-left{ padding: 15px 30px 22px 0}
          .promo-mid { padding: 15px 30px 22px 30px; border-left: 1px solid #e1e1e1; border-right: 1px solid #e1e1e1; }
          .promo-right{padding: 15px 0 22px 30px}
          .promo-image-container{ position:relative; height: 92px;}
          .promo-image-container img{ position: absolute; left:0; top:0; transition: opacity .5s ease;}
          .promo-text{ margin-top: 15px; height: 160px; }

          .promo-button{ position: relative; height: 28px; width:105px}
          .promo-button img{ position: absolute; left:0; top:0; }

        `}</style>
        <div className="promo promo-left">
          <div className="promo-title">MORTGAGE SERVICING OWNERSHIP</div>
          <div className="promo-image-container" onMouseEnter={this.showImg.bind(this,'img1')} onMouseLeave={this.hideImg.bind(this,'img1')}>
            <a href="#"><img src="/img/pic-mortgage-off.jpg" /></a>
            <a href="#"><img src="/img/pic-mortgage-on.jpg" style={{opacity: (this.state.img1 || 0 )}}/></a>
          </div>
          <p className="promo-text">
              Towd Point Loan Servicing, LLC, is a licensed owner of and an active purchaser
              of residential mortgage servicing rights (MSRs) for
              loans originated pursuant to Freddie Mac and Fannie Mae guidelines or insured by the FHA or guaranteed by the VA.
          </p>
          <a href="#" onMouseEnter={this.showImg.bind(this,'img12')} onMouseLeave={this.hideImg.bind(this,'img12')} className="promo-button">
            <img src="/img/button-reg-learn-more-off.png" width="105" height="28"/>
            <img src="/img/button-reg-learn-more-on.png"  width="105" height="28" style={{opacity: (this.state.img12 || 0 )}}/>
          </a>

        </div>
        <div className="promo promo-mid">
          <div className="promo-title">RENTAL FINANCE</div>
          <div className="promo-image-container" onMouseEnter={this.showImg.bind(this,'img2')} onMouseLeave={this.hideImg.bind(this,'img2')}>
            <a href="#"><img src="/img/pic-rentals-off.jpg" /></a>
            <a href="#"><img src="/img/pic-rentals-on.jpg" style={{opacity: (this.state.img2 || 0 )}}/></a>
          </div>
          <p className="promo-text">
              FirstKey Lending, LLC is at the forefront of a new residential property investment
              solution, delivering innovative finance options to owners of rental
              home portfolios throughout the United States.
          </p>
          <a href="#" onMouseEnter={this.showImg.bind(this,'img22')} onMouseLeave={this.hideImg.bind(this,'img22')} className="promo-button">
            <img src="/img/button-reg-learn-more-off.png" width="105" height="28"/>
            <img src="/img/button-reg-learn-more-on.png"  width="105" height="28" style={{opacity: (this.state.img22 || 0 )}}/>
          </a>

        </div>
        <div className="promo promo-right">
          <div className="promo-title">CRE FINANCE</div>
          <div className="promo-image-container" onMouseEnter={this.showImg.bind(this,'img3')} onMouseLeave={this.hideImg.bind(this,'img3')}>
            <a href="#"><img src="/img/pic-commercial-off.jpg" /></a>
            <a href="#"><img src="/img/pic-commercial-on.jpg" style={{opacity: (this.state.img3 || 0 )}}/></a>
          </div>
          <p className="promo-text">
              FirstKey Lending, LLC is a commercial lender dedicated to providing innovative
              financing solutions to institutional investors with speed and certainty.
          </p>
          <a href="#" onMouseEnter={this.showImg.bind(this,'img32')} onMouseLeave={this.hideImg.bind(this,'img32')} className="promo-button">
            <img src="/img/button-reg-learn-more-off.png" width="105" height="28"/>
            <img src="/img/button-reg-learn-more-on.png"  width="105" height="28" style={{opacity: (this.state.img32 || 0 )}}/>
          </a>
        </div>
      </div>
    );
  }
});
