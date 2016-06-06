const Promos = require('../components/promos.jsx');

module.exports = React.createClass({

  displayName: 'Footer',

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
      <section id="footer" style={{backgroundColor:'white',opacity: this.state.opacity, transition: "opacity .5s ease"}}>
        <style>{`
            .footer-text{ padding-top:15px; line-height:14px; text-align:justify; font-size: 11px; color: #282828; font-family: 'Open Sans', sans-serif; }
        `}</style>
      <p className="layout-fixed footer-text">
          FirstKey Holdings, LLC manages three operating companies that conduct business in
          different sectors of real estate finance: FirstKey Mortgage, LLC (NMLS # 357510)
          is a licensed residential lender that purchases closed residential mortgage loans
          from correspondent lenders and offers financing to investors of tenant-occupied
          residential properties; FirstKey Lending, LLC (NMLS # 1063414) is a licensed
          commercial real estate lender that offers financing to large portfolio investors
          of tenant-occupied residential properties and commercial properties; and Towd Point
          Loan Servicing, LLC (NMLS # 1050560) is a licensed residential mortgage servicer
          that acquires the servicing rights to Fannie Mae and Freddie Mac conforming loans
          and FHA-insured and VA-guaranteed loans. Minnesota: This is not an offer to enter
          into an agreement and an offer may only be made pursuant to Minn. Stat. § 47.206
          subdivisions 3 and 4. Some products may not be available in some states. Information,
          rates and pricing are subject to change without prior notice. All loan programs are
          subject to borrowers meeting appropriate underwriting conditions. This is not a
          commitment to lend. Other restrictions apply. All rights reserved.
        </p>
      </section>
    );
  }
});
