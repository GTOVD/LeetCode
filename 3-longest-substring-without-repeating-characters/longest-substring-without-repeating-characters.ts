function lengthOfLongestSubstring(s: string): number {
    let index = 0;
    const strSet = new Set()
    let allSets = []

    if(s.length <= 1) return s.length;

    while(index < s.length) {
        if(strSet.has(s[index])) {
            allSets.push(strSet.size)
            if(strSet.size>=2) index-=strSet.size-1
            strSet.clear()
        } else {
            strSet.add(s[index])
            index++
        }
    }

    return Math.max(...allSets, strSet.size)
};