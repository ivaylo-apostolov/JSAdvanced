function solve(input) {
    let result = input
        .reduce((a, b, i) => {
            if(i === 0){
                a.push(b);
            }
            if (b > a[a.length - 1]) {
                a.push(b);
            }
            return a;
        }, []);

    result.forEach(element => {
        console.log(element);
    });
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    
    
);