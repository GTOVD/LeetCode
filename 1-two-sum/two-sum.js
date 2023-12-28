/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashNums = nums.reduce( (acc, num, i) => {
        acc[num] = i
        return acc
    }, {})

    for(let i = 0; i < nums.length; i++) {
        if(hashNums[target-nums[i]] && hashNums[target-nums[i]] !== i) return ([i, hashNums[target-nums[i]]])
    }

    // for(let i = 0; i < nums.length; i++) {
    //     for(let j = i+1; j < nums.length; j++) {
    //         if(nums[i] + nums[j] === target) return [i, j]
    //     }
    // }
};