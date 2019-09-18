function circleArea(a){
    var result;

    if (typeof(a) === 'number') {
        result = Math.PI * a**2;
        console.log(result.toFixed(2));  
    }
    else{
        console.log('We can not calculate the circle area, because we receive a string.');
    }    
}

circleArea("k");