function solve(...params) {
    let arr = [];

    let obj;

    let tokens = params.split(",");

    for (const token in tokens) {
        let tok = token.split(" / ");

        obj = {
            name: tok[0],
            level: tok[1],
            items: []
        };

        let spl = tok[2].split(", ");

        for (const key in spl) {
            obj.items.push(key);
        }

        arr.push(obj);
    }

    console.log(obj);
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);