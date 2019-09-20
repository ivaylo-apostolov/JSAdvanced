function solve(...params){
    let obj = {};

    for (let i = 0; i < params.length; i++) {
        if (i % 2 == 0) {
            obj[params[i]] = Number(params[i + 1]);
        }        
    }

    let str = "";
    for (let i = 0; i < params.length; i++) {
        if (i % 2 == 0) {
            str += obj[i] + "+ ";
        }
        else{
            str += obj[i] + ",";
        }
        
    }

    console.log(str);
}

solve('Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42);