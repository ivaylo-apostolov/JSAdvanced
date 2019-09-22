function solve(input){
    let juses = {};
    let bottles = {};

    for (const line of input) {
        let [name, quantity] = line.split(" => ");
        quantity = Number(quantity);

        if (!juses.hasOwnProperty(name)) {
            juses[name] = 0
        }

        juses[name] += quantity;

        if (juses[name] >= 1000) {
            bottles[name] = Math.trunc(juses[name] / 1000);
        }

    }
    
    for (const key in bottles) {
        console.log(`${key} => ${bottles[key]}`);
    }
}

solve(
    ['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
)