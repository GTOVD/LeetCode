/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    for(let i=0; i<t.length; i++) {
        if(t[i]!==s[i]) {
            t = t.slice(1)
            i--
        } else {
            s = s.slice(1)
            t = t.slice(1)
            i--
        }
    }
    return s.length > 0 ? false : true;
};