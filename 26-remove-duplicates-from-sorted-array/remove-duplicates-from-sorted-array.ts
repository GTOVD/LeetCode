function removeDuplicates(nums: number[]): number {
    nums.splice(0, nums.length, ...nums.map((num, index)=>(num===nums[index+1])? undefined : num).filter(num=>num!==undefined))

  return nums.length
};