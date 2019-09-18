function largestNumber(...params){
    var num = 0;
    console.log(`The largest number is ${Math.max(...params)}.`);
}

largestNumber(5, -3, 16);