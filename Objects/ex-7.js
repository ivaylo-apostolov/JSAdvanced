function solve(input){
    let names = [];

    for (const name of input) {
        if (!names.find(x => x == name)) {
            names.push(name);
        }
    }

    names.sort((a, b) => a.length - b.length || a.localeCompare(b)).map(x => console.log(x));
}

solve(
    ['Denise',
'Ignatius',
'Iris',
'Isacc',
'Indie',
'Dean',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot']

)