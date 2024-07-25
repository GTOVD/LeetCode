/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let max = 2**31-1;
    let min = 2**31*-1

    if(parseInt(s) > max) return max;
    if( parseInt(s) < min) return min;
    return parseInt(s) || 0
};