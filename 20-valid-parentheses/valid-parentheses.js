/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length===0) return true
    if(s.length%2===1) return false
    const regex = /(\{\})|(\[\])|(\(\))/g;
    while(s.match(regex)) {
        s = s.replace(regex, '')
    }
    return s==='' ? true : false
};