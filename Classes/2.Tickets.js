function solve(input, sortBy) {
  let arr = [];
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }
  for (const token of input) {
    let [destination, price, status] = token.split("|");
    arr.push(new Ticket(destination, price, status));
  }

  arr = arr.sort((a, b) => {
    if(typeof a[sortBy] === 'string'){
    return a[sortBy].localeCompare(b[sortBy]);
    } else{
      return a[sortBy] - b[sortBy];
    }})

  return arr;
}

console.log(solve(
    ['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'destination'  
));
