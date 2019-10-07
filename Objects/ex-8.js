function solve(input){
    let parseInput = JSON.parse(input);
    let result = [];

    for (const arr of input) {
        console.log(typeof(arr));
        let ar = arr.sort((a, b) => b - a);

        if (!result.find(x => x.equals(ar))) {
            result.push(ar);
        }

    }

    console.log(result);
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
)