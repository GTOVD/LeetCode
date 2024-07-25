/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    p = p.replace(/\*{1,}/g, "{0,}")
    let regex = new RegExp(`^${p}$`, "g");
    let ans = regex.test(s)
    return ans
};