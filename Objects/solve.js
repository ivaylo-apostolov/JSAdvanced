function solve([...params]){
    let arr = params.split(",");

    for (const key in arr) {
        console.log(key)
    }
}

solve(1,2,3,4);