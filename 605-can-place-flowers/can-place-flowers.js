/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let openPos = 0
    if(flowerbed.length <= 1 && flowerbed[0] === 0) return n <= 1 ? true : false
    for(let i=0; i<flowerbed.length-1; i++) {
        console.log(i)
        if(i===0 && flowerbed[0] === 0 && flowerbed[1] === 0) {
            if(flowerbed.length === 3 && flowerbed[1] === 0 && flowerbed[2] === 0) openPos++
            openPos++
            i++
            continue
        }
        if(i===flowerbed.length-2 && flowerbed[i] === 0 && flowerbed[i+1] === 0) {
            openPos++
            continue
        }
        if(flowerbed[i] === 0 && flowerbed[i-1] === 0 && flowerbed[i+1] === 0) {
            if(i < flowerbed.length-3) i++
            openPos++
        }
    }
    console.log(openPos)
    return n <= openPos ? true : false
};