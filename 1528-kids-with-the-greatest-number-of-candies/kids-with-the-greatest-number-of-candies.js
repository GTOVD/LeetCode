/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let highestCandies = Math.max(...candies)
    let result = candies.map(candy => {
        if(candy+extraCandies >= highestCandies) return true
        return false
    })
    return result
};