/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target, memo={}, num=0) {
    if(nums[num] in memo) return [memo[nums[num]], num]
    memo[target -nums[num]] = num
    return twoSum(nums, target, memo, ++num)
};