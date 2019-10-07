function solve(input){
    let initialValue = 1;
    let result = [];

    for (const command of input) {
        if (command === 'add') {
            result.push(initialValue);
        }else if(command === 'remove'){
            result.pop();
        }
        initialValue++;
    }

    if (result.length == 0) {
        console.log('Empty');
    }
    else{
        result.forEach(element => {
            console.log(element);
        });
    }    
}

solve(
    ['remove', 
'remove', 
'remove']



);