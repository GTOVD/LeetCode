/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']
    let left = 0, right = s.length-1;
    let sArr = s.split('')
    while(left<=right) {
        if(!vowels.includes(sArr[left])) {
            left++
            continue
        }
        if(!vowels.includes(sArr[right])) {
            right--
            continue
        }
        if(vowels.includes(sArr[left]) && vowels.includes(sArr[right])) {
            let temp = sArr[right]
            sArr[right] = sArr[left]
            sArr[left] = temp
            left++
            right--
        }
    }
    return sArr.join('')
};