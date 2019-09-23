function solve(input){
    let cars = {};


    for (const token of input) {
        let [make, model, quantity] = token.split(" | ");
        quantity = Number(quantity);

        if (!cars.hasOwnProperty(make)) {
            cars[make] = {};
        }

        if (!cars[make].hasOwnProperty(model)) {
            cars[make][model]=0;
        }

        cars[make][model] += quantity;        
    }

    for (const mk in cars) {
        console.log(mk);

        let models = cars[mk];

        for (const mod in models) {
            console.log(`###${mod} -> ${models[mod]}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)

