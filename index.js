
// Function expression
const divide = function(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
};

let result = divide(10, 2);
console.log(result);  
//  square arrow function
const square = (x) => x * x;
//add arrow function
const add = (a, b) => a + b;

