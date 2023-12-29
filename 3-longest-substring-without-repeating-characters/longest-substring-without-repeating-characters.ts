function lengthOfLongestSubstring(s: string): number {
    let index = 0;
    let strSet = []
    let allSets = []

    if(s.length <= 1) return s.length;

    while(index < s.length) {
        if(strSet.includes(s[index])) {
            allSets.push(strSet.length)
            if(strSet.length>=2) index-=strSet.length-1
            strSet = []
        } else {
            strSet.push(s[index])
            index++
        }
    }

    return Math.max(...allSets, strSet.length)
};