module.exports = function reverse (n) {
    let reverseStr = Math.abs(n).toString().split("").reverse().join("");
    return Number(reverseStr);
}
