function solve(input){
    let step = input[input.length - 1];
    step = Number(step);

    for (let i = 0; i < input.length - 1; i++) {
        if(i % step === 0){
            console.log(input[i]);
        }        
    }
}

solve(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
);