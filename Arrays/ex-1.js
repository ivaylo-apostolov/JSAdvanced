function solve(input){
    let delimeter = input[input.length - 1];
    let sliceInput = input.slice(0, input.length - 1);

    console.log(sliceInput.join(delimeter));
}

solve(
    ['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_']

);