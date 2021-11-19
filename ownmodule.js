const add = (a, b) => {
    return a + b;
};
const mul = (a, b) => {
    return a * b;
};

// for one function only
// module.exports = add;

// for multiple function
// module.exports.add = add;
// module.exports.mul = mul;

// for multiple functions using object destructuring
module.exports = { add, mul };