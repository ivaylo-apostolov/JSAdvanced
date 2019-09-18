function agregateElement(...params){
    const avg = params.reduce((a,b) => a + b, 0) / params.length
    console.log(avg);

    const a1 = params.reduce((a,b) => a + 1/b, 0);
    console.log(a1.toFixed(4));

    
    console.log(params.join(''));
}

function agregateElement(...params){
    const avg = params.reduce((a,b) => a + b, 0) / params.length
    console.log(avg);

    const a1 = params.reduce((a,b) => a + 1/b, 0);
    console.log(a1.toFixed(4));

    
    console.log(params.join(''));
}

agregateElement(1, 2, 3);