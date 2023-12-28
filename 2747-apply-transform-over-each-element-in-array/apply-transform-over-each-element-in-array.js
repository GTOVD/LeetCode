/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let x = []
    for(let [i, a] of arr.entries()) {
        x.push(fn(a, i))
    }
    return x
};