function solve(input){
    let rotationCount = Number(input[input.length - 1]);
    let result = input.slice(0, input.length - 1);

    for (let i = 0; i < rotationCount; i++) {
        result.unshift(result.pop());
        
    }

    console.log(result.join(' '));    
}

solve(
    ['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
);