/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return nums.sort().reduce((a,b,i,arr)=>(a) ? true : b===arr[i+1], false)
};