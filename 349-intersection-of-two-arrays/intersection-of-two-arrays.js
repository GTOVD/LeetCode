/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
nums1.sort()
    nums2.sort()

    const contains1 = nums1.map((num)=>{
        return (nums2.includes(num)) ? true : false
    })
    const intersection1 = contains1.map((contain,index)=>{
        return (contain) ? nums1[index] : undefined
    }).filter(num=>num!==undefined)

    const contains2 = nums2.map((num)=>{
        return (nums1.includes(num)) ? true : false
    })
    const intersection2 = contains2.map((contain,index)=>{
        return (contain) ? nums2[index] : undefined
    }).filter(num=>num!==undefined)
    
    console.log({contains1, intersection1, contains2, intersection2})
    
    const set1 = [...new Set(intersection1)]
    const set2 = [...new Set(intersection2)]
    
    return set1.length < set2.length ? set1 : set2
};