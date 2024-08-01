/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let result = Infinity
    let resultSum
    for(let i=0; i<nums.length-2; i++) {
        for(let j=i+1; j<nums.length-1; j++) {
            for(let k=j+1; k<nums.length; k++) {
                let sum = nums[i]+nums[j]+nums[k]
                let difference = Math.abs(target-sum)
                if(difference < result) {
                    result = difference
                    resultSum = sum
                }
            }   
        }
    }
    return resultSum
};