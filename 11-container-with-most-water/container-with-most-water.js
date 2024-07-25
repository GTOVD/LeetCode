/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0;
    let right=height.length-1;
    let maxWater=0;

    while(left<right) {
        let width = right-left
        let h=Math.min(height[left], height[right])
        let water=width*h
        maxWater=Math.max(maxWater, water);

        if(height[left]<height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;

    if ( height.length < 2 ) return 0
    let result = [];
    let max = 0;
    for(let i=0; i<height.length; i++){
        for(let j=i+1; j<height.length; j++){
            if(Math.min(height[i], height[j]) * (j-i) > max) {
                max = Math.min(height[i], height[j]) * (j-i)
            }
        }
    }
    return max;
};