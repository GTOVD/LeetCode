function climbStairs(n: number): number {
    let result = 0;
    let one = 0
    let two = 1

    for(let i=0; i<n; i++) {
        console.log(one, two, result)
        result = one + two
        one = two
        two = result
    }
    return result
};