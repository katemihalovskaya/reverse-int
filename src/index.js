module.exports = function reverse (n) {
  let reverseStr = n.toString().split("").reverse().join("");
  console.log(Number(reverseStr));
}
