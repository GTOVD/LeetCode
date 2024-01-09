function getRow(rowIndex: number): number[] {
    let answer = new Array(rowIndex+1).fill(1)

    for(let i = 0; i<answer.length; i++) {
        if(i === 0 || i === answer.length-1) continue
        if(i === 1 || i === answer.length-2) answer[i] = rowIndex

        answer[i] = answer[i-1]*(rowIndex-i+1)/i
    }

    return answer
};