
var grad = function(color1, color2, type){
  type = type || 'linear';
  return(`background: ${color1};
          background: -webkit-${type}-gradient(${color1}, ${color2});
          background: -o-${type}-gradient(${color1}, ${color2});
          background: -moz-${type}-gradient(${color1}, ${color2});
          background: ${type}-gradient(${color1}, ${color2})`)
}

module.exports = grad;
