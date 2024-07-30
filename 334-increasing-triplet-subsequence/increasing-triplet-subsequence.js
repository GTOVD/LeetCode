/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let numMap = {
        first: Infinity,
        second: Infinity,
    }
    for(let num of nums) {
        if(num <= numMap['first']) numMap['first'] = num
        else if(num <= numMap['second']) numMap['second'] = num
        else return true
    }
    return false
};