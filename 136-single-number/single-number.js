/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) { 
    let ans = []
    nums.sort().forEach((num,index,arr)=> {
        if(num===arr[index+1]) ans.push(num)
    })
    ans.forEach(a=>{
        if(nums.includes(a)) nums.splice(nums.indexOf(a),2)
    })
    return nums
};