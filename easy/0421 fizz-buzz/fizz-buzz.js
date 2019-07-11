var fizzBuzz = function (n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        let str = '';
        if (i % 3 == 0) str += "Fizz";
        if (i % 5 == 0) str += "Buzz";

        if (str) res.push(str);
        else res.push(i+str);
    }
    return res;
};

console.log(fizzBuzz(15))