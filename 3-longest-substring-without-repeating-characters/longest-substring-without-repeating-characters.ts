function lengthOfLongestSubstring(s: string): number {
 const scanner: string[] = []
  let longest = 0

  for (const char of s) {
    console.log(scanner)
    const possibleIndex = scanner.indexOf(char)
    console.log(char, possibleIndex)
    if (possibleIndex !== -1) { scanner.splice(0, possibleIndex + 1) }
    scanner.push(char)
    longest = Math.max(longest, scanner.length)
  }

  return longest


    // let index = 0;
    // const strSet = new Set()
    // let allSets = []

    // if(s.length <= 1) return s.length;

    // while(index < s.length) {
    //     if(strSet.has(s[index])) {
    //         allSets.push(strSet.size)
    //         if(strSet.size>=2) index-=strSet.size-1
    //         strSet.clear()
    //     } else {
    //         strSet.add(s[index])
    //         index++
    //     }
    // }

    // return Math.max(...allSets, strSet.size)
};