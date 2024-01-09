function generate(numRows: number): number[][] {
    console.log(numRows)
    let results = []

    for(let i = 1; i<=numRows; i++) {
        results.push(new Array(i).fill(1))
    }
    results = results.map((result, i)=> {
        console.log(result)
        if(result.length <= 2) return result
        for(let j=0; j<result.length; j++) {
            if(j === 0 || j == result.length-1) continue;
            result[j] = results[i-1][j-1] + results[i-1][j];
        }
        return result
    })

    return results
};