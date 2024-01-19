function majorityElement(nums: number[]): number {
    let answer = {}
    nums.forEach((num)=>{
        if(answer[num]) answer[num]++
        else answer[num] = 1
    })
    for(let [key, value] of Object.entries(answer)) {
        if(+value > (Math.floor(nums.length/2))) return +key
    }
    return null
};