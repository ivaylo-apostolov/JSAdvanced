function sum(a, b){
    var start = Number(a);
    var stop = Number(b);
    var sum = 0;

    for (let i = start; i <= stop; i++) {
        sum += i;        
    }

    console.log(sum);
}

sum('-8', '20');