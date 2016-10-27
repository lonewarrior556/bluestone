const Promos = require('../components/promos.jsx');
const Footer = require('../components/footer.jsx');

module.exports = React.createClass({

  displayName: 'Homepage',

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
        <style>{`
            .pdf-select{
              width:49%;
              float:left;
              padding:40px 0 40px 0;
              border: 1px solid black;
            }
            .pdf-select>li{
              float:left;
              padding:25px;
              cursor:pointer;
            }
            .pdf-select>li:hover{
              font-weight:bold;
            }
            .pdf-select:after{
              content:' ';
              display:block;
              clear:both;
            }
            iframe{
              float:right;
              width:50%;
              height:500px;
            }
            .layout-fixed:after{
              content:'';
              display:block;
              clear:both;
            }
        `}</style>
        <div className="layout-fixed">
            <ul className="pdf-select">
              <li onClick={this.handleClick}>https://s3.amazonaws.com/fkh-website-public/Desktop.pdf</li>
              <li onClick={this.handleClick}>https://s3.amazonaws.com/fkh-website-public/Employee+Referral+Policy.pdf</li>
              <li onClick={this.handleClick}>https://s3.amazonaws.com/fkh-website-public/Mobile.pdf</li>
              <li onClick={this.handleClick}>https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fs3.amazonaws.com%2Ffkh-website-public%2FNew%2BMicrosoft%2BExcel%2BWorksheet.xlsx</li>
              <li onClick={this.handleClick}>https://s3.amazonaws.com/fkh-website-public/website.txt</li>
              <li onClick={this.handleClick}>https://s3.amazonaws.com/fkh-website-public/thisguy13.tif</li>
          </ul>
            <iframe src={this.state.website}></iframe>
        </div>
        <div className="ln-white-dark-light"></div>
        <Promos/>
        <div className="ln-white-dark-light"></div>
        <Footer/>
      </section>
    );
  }
});
