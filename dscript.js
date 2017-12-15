/*     DScript.js 1.0.0
*     (c) 2017 Deepak Ranjan Jena, Frontend Atchitect
*     DScript may be freely distributed under the MIT license.
*/

(() => {
  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;
  
  // Create a safe reference to the DScript object for use below.
  var DS = function(obj) {
    if (obj instanceof DS) return obj;
    if (!(this instanceof DS)) return new DS(obj);
  };
  
  // Export the DScript object for **Node.js**, with
  // backwards-compatibility for their old module API. If we're in
  // the browser, add `DS` as a global object.
  // (`nodeType` is checked to ensure that `module`
  // and `exports` are not HTML elements.)
  
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = DS;
    }
    exports.DS = DS;
  } else {
    root.DS = DS;
  }
  
  // Current version.
  DS.VERSION = '1.0.0';
  
  // Returns the result in a new array iterating each element
  DS.map = (arr, callback) => {
    let results = []; // Initialize the new array
    for(let i = 0, len = arr.length; i < len; i++) {
      results.push(callback(arr[i]));
    }
    return results;
  };
  
})();
