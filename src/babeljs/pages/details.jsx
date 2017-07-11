const Footer = require('../components/footer.jsx');

module.exports = React.createClass({
  propTypes: {
    baseObject: React.PropTypes.object.isRequired,
  },
  displayName: 'details',

  getInitialState: function() {
    return {opacity: .1, disabled:true};
  },
  componentDidMount: function() {
    this.timeOut = setTimeout(this.setState.bind(this, {opacity: 1}), 500)
  },
  componentWillUnmount: function(){
    clearTimeout(this.timeOut);
  },
  onUpdateClick: function(){
    this.setState({disabled:false})
  },
  onSave: function(){
    this.setState({disabled:true})
  },
  onCancel: function(){
    this.setState({disabled:true})
  },
  render: function() {

    let fields = []
    for(let key in this.props.baseObject){
      fields.push(<label key={key}>{key}</label>)

      if(key==="images"){
        for(let item of this.props.baseObject[key]){
          fields.push(<input key={item['name']} type="text" defaultValue={item['name']}/>)
          fields.push(<input key={item['url']} type="text" defaultValue={item['url']}/>)
        }
      }else{
        fields.push(<input key={'i'+key} type="text" defaultValue={this.props.baseObject[key]}/>)
      }

    }
    let buttons = [];
    if(this.state.disabled){
      buttons.push(  <button key={1} onClick={this.onUpdateClick}>Update</button> )
    }else{
      buttons.push(   <button key={1} onClick={this.onCancel}>Cancel</button> )
      buttons.push(   <button key={2} onClick={this.onSave}>Save</button> )

    }

    return(
      <section id="services-page" className="main-tab" style={{opacity: this.state.opacity}}>
        <div className="ln-white-dark-light"></div>
        <div className="layout-fixed">
          <form style={{width:'500px'}}>
            <fieldset disabled={this.state.disabled}>
              {fields}
            </fieldset>
          </form>
        {buttons}
        </div>
        <div className="ln-white-dark-light"></div>
        <Footer/>
      </section>
    );
  }
});
