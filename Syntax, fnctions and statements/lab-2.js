function mathOperation(a, b, operator){
    var result;
    if(operator == '+'){
        result = a + b;
    }
    else if(operator == '-'){
        result = a - b;
    }
    else if(operator == '*'){
        result = a * b;
    }
    else if(operator == '/'){
        result = a / b;
    }
    else if(operator == '%'){
        result = a % b;
    }
    else if(operator == '**'){
        result = a ** b;
    }

    console.log(result);
    
}

mathOperation(2, 3, '**');