function generate(numRows: number): number[][] {
    if (numRows === 1) return [[1]]
    if (numRows === 2) return [[1], [1, 1]]
    
    let results = [[1], [1, 1]]

    for(let i = 3; i<=numRows; i++) {
        results.push(new Array(i).fill(1))
    }

    results = results.map((result, i)=> {
        if(result.length <= 2) return result
        for(let j=0; j<result.length; j++) {
            if(j === 0 || j == result.length-1) continue;
            result[j] = results[i-1][j-1] + results[i-1][j];
        }
        return result
    })

    return results
};