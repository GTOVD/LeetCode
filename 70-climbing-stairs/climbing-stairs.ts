function climbStairs(n: number, memo={}): number {
    if(n<=2) return n;

    const table = [];
    table[1] = 1;
    table[2] = 2;

    for(let i = 3; i<=n; i++) {
        table[i]= table[i-1] + table[i-2]
    }

    console.log(table)

    return table[n]


    // console.log(memo)
    // if(n<=3) return n;
    // if(!memo[n]) memo[n] = (climbStairs(n-1, memo) + climbStairs(n-2, memo))
    // return memo[n]

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