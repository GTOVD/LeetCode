function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let mergedArr = nums1.concat(nums2).sort((a,b) => a-b)
    let arrMid = Math.round((mergedArr.length/2) -1)

    if(mergedArr.length%2 !== 0) {
        return mergedArr[arrMid]
    } else {
        return (mergedArr[arrMid] + mergedArr[arrMid+1]) / 2
    }
};