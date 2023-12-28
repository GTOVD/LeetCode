function twoSum(nums: number[], target: number, memo: { [index: number]: number } = {}, i: number = 0): number[] {
    if(nums[i] in memo) return [memo[nums[i]],i];
    memo[target - nums[i]] = i;
    return twoSum(nums, target, memo, ++i);
};