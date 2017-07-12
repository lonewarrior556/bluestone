//libs
const _ = require('underscore');
//components
const Footer = require('../components/footer.jsx');

module.exports = React.createClass({
  propTypes: {
    baseObjects: React.PropTypes.array.isRequired,
    index: React.PropTypes.string.isRequired
  },
  displayName: 'details',

  getInitialState: function() {
    //update load from save or defaults
    this.items = JSON.parse(localStorage["data"] || 'null') || this.props.baseObjects;
    return {opacity: .1, disabled:true, index: this.props.index, item: this.items[this.props.index]};
  },
  componentDidMount: function() {
    //transition effects
    setTimeout(this.setState.bind(this, {opacity: 1}), 500)
  },  
  componentWillReceiveProps: function(props){
    this.setState({disabled:true,index: props.index, item: this.items[props.index]})
  },
  onUpdateClick: function(){
    this.tempItem = _.clone(this.items[this.state.index]);
    this.setState({disabled:false, item: this.tempItem})
  },
  updateTemp: function(obj, key, event){
    obj[key] = event.target.value
    this.setState({item : this.tempItem})
  },
  onSave: function(){
    this.items[this.props.index] = this.tempItem;
    localStorage["data"] = JSON.stringify(this.items);
    this.setState({disabled:true, item: _.clone(this.tempItem)})
  },
  onCancel: function(){
    this.setState({disabled:true, item: this.items[this.props.index]})
  },
  render: function() {

    let fields = [];
    let activeItem = this.state.item;
    for(let key in activeItem){
      fields.push(<label key={key}>{key}</label>)

      if(key==="images"){
        for (let i = 0; i < activeItem[key].length; i++) {
          let item = activeItem[key][i]
          fields.push(<input key={'a'+i} type="text" placeholder="name" value={item['name']} onChange={this.updateTemp.bind(this, item, 'name')}/>)
          fields.push(<input key={'b'+i} type="text" placeholder="url" value={item['url']} onChange={this.updateTemp.bind(this, item, 'url')}/>)
          fields.push(<hr key={'c'+i}/>)
        }
      }else{
        fields.push(<input key={'i'+key} type="text" value={this.state.item[key]} onChange={this.updateTemp.bind(this, activeItem, key)}/>)
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
