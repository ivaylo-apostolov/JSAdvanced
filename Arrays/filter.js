let filtered = [12, 5, 8, 130, 44].filter(x => x >=10);

function filt(value){
    return value >= 10;
}

console.log(filtered);

let isTrue = [1,1,1,1,].reduce(function(a, b){ return (a === b) ? true : false; });

console.log(isTrue);