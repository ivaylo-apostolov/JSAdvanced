function solve(input, sortBy) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }
  
  return input
    .reduce((prev, line) => {
      let [destination, price, status] = line.split("|");
      let ticket = new Ticket(destination, price, status);
      prev.push(ticket)
      return prev;
    }, [])
    .sort((a, b) =>{
      if(typeof a[sortBy] === 'string'){
        return a[sortBy].localeCompare(b[sortBy]);
      } else{
        return a[sortBy] - b[sortBy];
      }
    })  
}

console.log(solve(
    ['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'price'  
));
