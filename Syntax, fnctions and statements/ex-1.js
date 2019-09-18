function fruit(a, b, c){
    console.log(`I need $${((b/1000)*c).toFixed(2)} to buy ${(b/1000).toFixed(2)} kilograms ${a}.`)
}

fruit('apple', 1563, 2.35);