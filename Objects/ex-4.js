function solve(input) {
    let obj = {};

    const sortAsc = (a, b) => a.localeCompare(b);

    for (const token of input) {
        let [name, price] = token.split(" : ");
        price = Number(price);

        if (!obj.hasOwnProperty(name[0])) {
            obj[name[0]] = {};
        }
        if (!obj[name[0]].hasOwnProperty(name)) {
            obj[name[0]][name] = price;
        }
    }  
    let objArr = Object.keys(obj).sort(sortAsc);

    for (const key of objArr) {
        console.log(key);

        let objArrNest = Object.keys(obj[key]).sort(sortAsc);
        for (const key2 of objArrNest) {
            console.log(`  ${key2}: ${obj[key][key2]}`);
        }
    }
}

solve(['Banana : 2',
'Rubic's Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
)