function solve(a){
    return function(b){
        return a - b;
    }
}

let multiplyer = solve(2);
console.log(multiplyer(3));

