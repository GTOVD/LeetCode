/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length) {
        return []
    }
    let phonePad = {
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r', 's'],
        '8': ['t','u','v'],
        '9': ['w','x','y', 'z'],
    }
    
    const result = []

    const backtrack = (index, comb) => {
        console.log({index, comb, result})
        if(index === digits.length) {
            result.push(comb)
            return
        }

        for(let letter of phonePad[digits[index]]) {
            backtrack(index+1, comb+letter)
        }
    }
    backtrack(0,"")
    return result

    // digits.forEach((digit, index) => {
    //     let a = phonePad[digit]
    //     if(digits.length>1) {
    //         for(let i=index; i<digits.length; i++) {
    //             if(i === index) continue;
    //             let b = phonePad[digits[i]]
    //             a.forEach(a=>{
    //                 b.forEach(b=>{
    //                     results.push(`${a}${b}`)
    //                 })
    //             })
    //         }
    //     } else {
    //         a.forEach(a=>{
    //             results.push(`${a}`)
    //         })
    //     }
    // })
    return results
};