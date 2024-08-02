/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b)
    let result=Infinity, resultSum
    for(let i=0; i<nums.length-2; i++) {
        let left = i+1
        let right = nums.length-1
        while(left<right) {
            let sum = nums[i]+nums[left]+nums[right]
            let dif = Math.abs(target-sum)
            if(dif<result) {
                result = dif
                resultSum = sum
            }
            if(sum<target) {
                left++
            } else {
                right--
            }
        }
    }
    return resultSum
    // return bruteForce(nums, target)
};

const bruteForce = (nums, target) => {
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
}