function solve(params) {
    let arr = [];

    for (const token of params) {
        let obj = {};
        let tok = token.split(" / ");

        let lev = Number(tok[1]);

        obj = {
            name: tok[0],
            level: lev,
            items: []
        };

        let spl = tok[2].split(", ");

        for (const key of spl) {
            obj.items.push(key);
        }

        arr.push(obj);
    }

    console.log(JSON.stringify(arr));
}

solve(['Jake / 1000 / Gauss, HolidayGrenade']);