function climbStairs(n: number, memo={}): number {
    if(n<=3) return n;
    if(!memo[n]) memo[n] = (climbStairs(n-1, memo) + climbStairs(n-2, memo))
    return memo[n]

    // let result = 0;
    // let one = 0
    // let two = 1

    // for(let i=0; i<n; i++) {
    //     console.log(one, two, result)
    //     result = one + two
    //     one = two
    //     two = result
    // }
    // return result
};