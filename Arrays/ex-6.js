function solve(input) {
    let result = input.sort((a, b) => a.length - b.length || a.localeCompare(b));

    result.forEach(element => {
        console.log(element);
    });
}

solve(['test', 
'Deny', 
'omen', 
'Default']

);