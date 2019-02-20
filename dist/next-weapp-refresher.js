(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxWxPromisify = nx.wxPromisify || require('next-wx-promisify');
  var wx = global.wx;

  var NxWeappRefresher = nx.declare('nx.WeappRefresher', {
    statics: {
      'start,stop': function(inName) {
        return function(inOptions) {
          return new Promise(function(resove, reject) {
            return wx[inName + 'PullDownRefresh'](
              nx.mix(nxWxPromisify(resove, reject), inOptions)
            );
          });
        };
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappRefresher;
  }
})();
