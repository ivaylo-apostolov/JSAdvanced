function solve(operand1, operator, operand2) {
    let obj = {
        '+': function (a, b) { return a + b },
        '-': function (a, b) { return a - b }
    }

    let result = obj[operator](operand1, operand2);
    console.log(result.toFixed(2));
}

solve(25.5, '-', 3);