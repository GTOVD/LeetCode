/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.every((str)=>str.startsWith(strs[0]))) return strs[0]
    strs[0] = strs[0].slice(0,-1)
    return longestCommonPrefix(strs)
};