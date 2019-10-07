let obj = [
    { name: 'Sharpe', val: 21 },
    { name: 'Edward', val: 21 },
    { name: 'And', val: 21 }
];

obj.sort((a,b) => a.val - b.val || a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase()));

function sortByValue(a, b) {
    return a.val - b.val;
}

function sortByName(a, b){
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
    if(nameA < nameB){
        return -1;
    }
    if(nameA > nameB){
        return 1;
    }
    return 0;
}

console.log(obj);


