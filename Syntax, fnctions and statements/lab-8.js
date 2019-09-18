function agregateElement(...params){
    const avg = params.reduce((a,b) => a + b, 0) / params.length
    console.log(avg)
}

agregateElement([1, 2, 3])