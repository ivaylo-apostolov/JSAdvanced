function sameNumbers(a){
    var str = a.toString();
    var result = true;
    
    for (let i = 0; i < str.length -1; i++) {
        if (str[i] != str[i + 1]) {
            result = false;
            break;
        }
    }
    // var temp = str[0];

    // str.every((element) => {
    //     if (temp != element) {
    //         return result = false;
    //     }
    //     return temp
    // });

    console.log(result);

    sum = str.map(e => Number(e));
    sum = sum.reduce((a, b) => Number(a) + Number(b), 0);
    console.log(sum);
}

sameNumbers(22222221);