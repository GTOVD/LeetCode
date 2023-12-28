/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    nums.splice(0, nums.length, ...[...nums.splice(-k%nums.length,nums.length), ...nums.splice(0,nums.length)] )
    return nums
};