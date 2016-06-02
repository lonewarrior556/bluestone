var ImgSlider = React.createClass({

  propTypes: {
    classString:   React.PropTypes.string,
    urls       :   React.PropTypes.array,
    duration   :   React.PropTypes.number
  },
  getDefaultProps: function(){
    return { duration: 10000 };
  },
  getInitialState: function() {
    return {order : 0, opacity: 0, itemName: "a"+Math.random().toString(36).substr(2,6)}
  },
  changeImage: function() {
    this.setState({opacity:0})
    setTimeout(this.setState.bind(this,{order: (this.state.order+1)%this.props.urls.length, opacity:1}),1000)
  },
  componentDidMount: function(){
    this.setState( { opacity:1, interval: setInterval(this.changeImage, this.props.duration) });
  },
  componentWillUnmount: function(){
    clearInterval(this.state.interval);
  },
  render: function(){
    var allClasses = this.props.classString +" "+ this.state.itemName;

    return    <div className={allClasses}>
                <style>{`
                  .${this.state.itemName}{
                    background-image: url(${this.props.urls[this.state.order]});
                    opacity: ${this.state.opacity};
                    transition: opacity 1.5s ease;
                  }
                `}</style>
              </div>


  }

})

module.exports =  ImgSlider;
