function plusOne(digits: number[]): number[] {
    digits[digits.length-1] += 1
    
    if(digits[digits.length-1] < 10) return digits

    for(let i=digits.length-1; i>=0; i--){
        if(digits[i] === 10) {
            digits[i] = 0
            digits[i-1] += 1
        }
    }

    if(digits[0] === 0) digits.unshift(1)

    return digits
};