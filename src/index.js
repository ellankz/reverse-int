module.exports = function reverse(n) {
    const string = String(Math.abs(n));
    return string.split("").reverse().join("");
};
