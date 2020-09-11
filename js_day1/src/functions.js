

//Observe: no return type, no type on parameters
function add(n1, n2) {

    return n1 + n2;
}
function mul(n1, n2) {
    return n1 * n2;
}

var sub = function (n1, n2) {
    return n1 - n2;
}

var cb = function (n1, n2, callback) {

    if (typeof n1 && typeof n2 === "number"  && typeof callback === "function") {
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
    } else {
        return "Der er gået ged i den";
    }

};

console.log(add(1, 2));// printer 3
console.log(add); // printer Function: add dvs den printer navnet på funktionen??
console.log(add(1, 2, 3)); // printer 3. altså 1+2.
console.log(add(1)); // printer NaN = Not a number
console.log(cb(3, 3, add)); //Result from the two numbers 3 + 3 = 6
console.log(cb(4, 3, sub)); // Result from the two number 4+3 = 1
console.log(cb(5, 5, mul)); // Result from the two number 5+5 = 25
console.log(cb(3, 3, add())); // TypeError: callback is not a function.
console.log(cb(3, "hh", add)); // Printer 3hh
console.log(cb(3,3,(function (n1,n2){return n1/n2})));

