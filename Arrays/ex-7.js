function solve(input) {
    let arr = [];
    let result = input.map(x => {
        return arr.push(x.reduce((a, b) => {
            a += b;
            return a;
        }))
    })

    let areEqual = arr.every(x => x === arr[0]);
    console.log(areEqual);
}

solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);