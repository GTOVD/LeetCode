/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    return parseInt(dividend/divisor) > 2147483647 ? 2147483647 : parseInt(dividend/divisor)
};