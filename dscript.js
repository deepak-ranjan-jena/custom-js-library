/* DScript.js 1.0.0
*  copyright Deepak Ranjan Jena, Frontend Atchitect
*  DScript may be freely distributed under the MIT license.
*/

(() => {
  // Create a safe reference to the DScript object for use below.
  function DS(obj) {
    return (obj instanceof DS)? obj : new DS(obj);
  };    
  
  /*
  * @param(collection) - Array|Object to iterate
  * @param(callback) - callback function that needs to be called on each iter
  * @return - new Array with mapped value
  */
  function baseMap(collection, callback) {
    // initialize the array
    let results = [];
    // execute callback only if it is a function and collection is an array
    if(typeof callback == 'function' && Array.isArray(collection)) {
      for(let i = 0, len = collection.length; i < len; i++) {
        results[i] = callback(collection[i], i, collection);
      }        
    }
    // return the mapped array
    return results;
  };

  this.DS = DS;
  
  // Current version.
  DS.VERSION = '1.0.0';
  
  DS.map = baseMap;
  
}).call(this);
